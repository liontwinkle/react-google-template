import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { GoogleApiWrapper } from 'google-maps-react';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import * as FullStory from '@fullstory/browser';
import axios from 'axios';
import { bindActionCreators } from 'redux';
import Header from '../Layout/Header';
import MainMenu from '../Layout/MainMenu';
import Footer from '../Layout/Footer';
import Loader from '../Loader';
import Signin from '../Auth/Signin';
import SelectInstanceTeam from '../Auth/SelectInstanceTeam';
import CreateNewInstance from '../Auth/CreateNewInstance';
import CompleteTraining from '../Auth/CompleteTraining';
import SessionExpiryModal from '../Auth/SessionExpiryModal';
import Home from '../Home';
import NotFound from '../NotFound';

import * as routes from '../../constants/routes';
import * as loginSteps from '../../constants/login_steps';

import {
  setMainMenuState, setNavbarMenuState,
  setSessionExpiryModalState,
} from '../../redux/action/themeConfigs';

import './App.css';
import './Layout.scss';
import { setAuthUser } from '../../redux/action/session';
import { setViewIndex } from '../../redux/action/dashboard';

function App({
  loading,
  teamFg,
  isLoading,
  authUser,
  loginStep,
  sessionData,
  isMainMenuOpened,
  isNavbarMenuOpened,
  isSessionExpiryModalOpened,
}) {
  const [apps, setApps] = useState([]);
  const [isGettingFlag, SetIsGettingFlag] = useState(false);
  useEffect(() => {
    SetIsGettingFlag(false);
    const getAppsHandler = async (userId, eventId) => {
      try {
        const { data } = await axios.get(`${process.env.REACT_APP_API}/apps/${eventId}`);
        // set apps data
        setApps(data.apps);
        SetIsGettingFlag(true);
      } catch (e) {
        // if unauthorized
        if (e.response.status === 401) {
          // open session expiry modal
          setSessionExpiryModalState(true);
        }
      }
    };
    if (authUser && sessionData) {
      getAppsHandler(authUser.id, sessionData.id_event);
    }
  }, [authUser, sessionData]);
  if (loading && authUser && isGettingFlag) return <Loader />;

  if (authUser) {
    FullStory.event(authUser.userId, {
      displayName: authUser.username,
      email: authUser.email,
    });
  }
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Header
        authUser={authUser}
        loginStep={loginStep}
        isMainMenuOpened={isMainMenuOpened}
        isNavbarMenuOpened={isNavbarMenuOpened}
      />
      <Switch>
        <Route exact path={routes.HOME}>
          {authUser ? (
            loginStep ? (
              loginStep === loginSteps.CREATE_NEW_INSTANCE ? (
                <Redirect to={routes.CREATE_NEW_INSTANCE} />
              ) : loginStep === loginSteps.COMPLETE_TRAINING ? (
                <Redirect to={routes.COMPLETE_TRAINING} />
              ) : (
                <div className="mail-wrapper">
                  {!isLoading && (
                    <MainMenu apps={apps} />
                  )}
                  <Home />
                </div>
              )
            ) : (
              teamFg ? (
                <Redirect to={routes.SELECT_INSTANCE_TEAM} />
              ) : (
                <Redirect to={routes.SIGNIN} />
              )
            )
          ) : (
            <Redirect to={routes.SIGNIN} />
          )}
        </Route>
        <Route exact path={routes.SIGNIN}>
          {authUser ? (
            loginStep ? (
              loginStep === loginSteps.CREATE_NEW_INSTANCE ? (
                <Redirect to={routes.CREATE_NEW_INSTANCE} />
              ) : loginStep === loginSteps.COMPLETE_TRAINING ? (
                <Redirect to={routes.COMPLETE_TRAINING} />
              ) : (
                <Redirect to={routes.HOME} />
              )
            ) : (
              teamFg ? (
                <Redirect to={routes.SELECT_INSTANCE_TEAM} />
              ) : (
                <Redirect to={routes.SIGNIN} />
              )
            )
          ) : (
            <Signin />
          )}
        </Route>
        <Route exact path={routes.SELECT_INSTANCE_TEAM}>
          {!isLoading && authUser ? (
            !loginStep ? (
              <SelectInstanceTeam
                authUser={authUser}
                sessionData={sessionData}
              />
            ) : loginStep === loginSteps.CREATE_NEW_INSTANCE ? (
              <Redirect to={routes.CREATE_NEW_INSTANCE} />
            ) : loginStep === loginSteps.COMPLETE_TRAINING ? (
              <Redirect to={routes.COMPLETE_TRAINING} />
            ) : (
              <Redirect to={routes.HOME} />
            )
          ) : (
            <Redirect to={routes.SIGNIN} />
          )}
        </Route>
        <Route exact path={routes.CREATE_NEW_INSTANCE}>
          {authUser ? (
            !loginStep ? (
              <Redirect to={routes.SELECT_INSTANCE_TEAM} />
            ) : loginStep === loginSteps.CREATE_NEW_INSTANCE ? (
              <CreateNewInstance />
            ) : loginStep === loginSteps.COMPLETE_TRAINING ? (
              <Redirect to={routes.COMPLETE_TRAINING} />
            ) : (
              <Redirect to={routes.HOME} />
            )
          ) : (
            <Redirect to={routes.SIGNIN} />
          )}
        </Route>
        <Route exact path={routes.COMPLETE_TRAINING}>
          {authUser ? (
            !loginStep ? (
              <Redirect to={routes.SELECT_INSTANCE_TEAM} />
            ) : loginStep === loginSteps.COMPLETE_TRAINING ? (
              <CompleteTraining />
            ) : loginStep === loginSteps.CREATE_NEW_INSTANCE ? (
              <Redirect to={routes.CREATE_NEW_INSTANCE} />
            ) : (
              <Redirect to={routes.HOME} />
            )
          ) : (
            <Redirect to={routes.SIGNIN} />
          )}
        </Route>
        <Route component={NotFound} />
      </Switch>
      <Footer />
      {loginStep === loginSteps.FINISHED && <div className="backdrop" />}
      {authUser && <SessionExpiryModal show={isSessionExpiryModalOpened} />}
    </Router>
  );
}

App.propTypes = {
  loginStep: PropTypes.string,
  authUser: PropTypes.object,
  sessionData: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool,
  teamFg: PropTypes.bool,
  isMainMenuOpened: PropTypes.bool.isRequired,
  isNavbarMenuOpened: PropTypes.bool.isRequired,
  isSessionExpiryModalOpened: PropTypes.bool.isRequired,
};

App.defaultProps = {
  authUser: null,
  loginStep: null,
  sessionData: null,
  isLoading: null,
  teamFg: null,
};

const mapStateToProps = (store) => ({
  loading: store.sessionData.loading,
  teamFg: store.sessionData.teamFg,
  authUser: store.sessionData.authUser,
  loginStep: store.sessionData.loginStep,
  sessionData: store.sessionData.sessionData,
  isLoading: store.themeConfigData.isLoading,
  isMainMenuOpened: store.themeConfigData.isMainMenuOpened,
  isNavbarMenuOpened: store.themeConfigData.isNavbarMenuOpened,
  isSessionExpiryModalOpened: store.themeConfigData.isSessionExpiryModalOpened,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  setSessionExpiryModalState,
}, dispatch);

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAQHX0rJGGbt6qbf0P5587hwE09u2Ggdm8',
})(connect(mapStateToProps, mapDispatchToProps)(App));
// import React from 'react';
//
// function App() {
//   return (
//     <div>testing</div>
//   );
// }
//
// export default App;
