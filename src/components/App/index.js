import React, { useCallback } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import Header from '../Layout/Header';
import MainMenu from '../Layout/MainMenu';
import Footer from '../Layout/Footer';
import Loader from '../Loader';
import Signin from '../Auth/Signin';
import SelectInstanceTeam from '../Auth/SelectInstanceTeam';
import CreateNewInstance from '../Auth/CreateNewInstance';
import CompleteTraining from '../Auth/CompleteTraining';
import Home from '../Home';
import NotFound from '../NotFound';
import useWithAuthenticate from '../WithAuthenticate';
import * as routes from '../../constants/routes';
import * as loginSteps from '../../constants/login_steps';
import { useMappedState } from 'redux-react-hook';
import './App.css';
import './Layout.css';

function App() {
  useWithAuthenticate();
  
  const mapState = useCallback((state) => ({
    loading: state.sessionState.loading,
    authUser: state.sessionState.authUser,
    loginStep: state.sessionState.loginStep,
    sessionData: state.sessionState.sessionData,
    isMainMenuOpened: state.themeConfigsState.isMainMenuOpened,
    isNavbarMenuOpened: state.themeConfigsState.isNavbarMenuOpened
  }), [])

  const { loading, authUser, loginStep, sessionData, isMainMenuOpened, isNavbarMenuOpened } = useMappedState(mapState);

  if (loading && authUser) return <Loader />

  if (loading) return false;
  
  return (
    <Router basename={process.env.PUBLIC_URL}>
        <Header authUser={authUser} loginStep={loginStep} isMainMenuOpened={isMainMenuOpened} isNavbarMenuOpened={isNavbarMenuOpened} />
        <Switch>
          <Route exact path={routes.HOME}>
            {authUser ? (loginStep ? (loginStep === loginSteps.CREATE_NEW_INSTANCE ? <Redirect to={routes.CREATE_NEW_INSTANCE} /> : (loginStep === loginSteps.COMPLETE_TRAINING ? <Redirect to={routes.COMPLETE_TRAINING} /> : <div className="mail-wrapper"><MainMenu /><Home /></div>)) : <Redirect to={routes.SELECT_INSTANCE_TEAM} />) : <Redirect to={routes.SIGNIN} />}
          </Route>
          <Route exact path={routes.SIGNIN}>
            {authUser ? (loginStep ? (loginStep === loginSteps.CREATE_NEW_INSTANCE ? <Redirect to={routes.CREATE_NEW_INSTANCE} /> : (loginStep === loginSteps.COMPLETE_TRAINING ? <Redirect to={routes.COMPLETE_TRAINING} /> : <Redirect to={routes.HOME} />)) : <Redirect to={routes.SELECT_INSTANCE_TEAM} />) : <Signin />}
          </Route>
          <Route exact path={routes.SELECT_INSTANCE_TEAM}>
            {authUser ? (!loginStep ? <SelectInstanceTeam authUser={authUser} sessionData={sessionData} /> : (loginStep === loginSteps.CREATE_NEW_INSTANCE ? <Redirect to={routes.CREATE_NEW_INSTANCE} /> : (loginStep === loginSteps.COMPLETE_TRAINING ? <Redirect to={routes.COMPLETE_TRAINING} /> : <Redirect to={routes.HOME} />))) : <Redirect to={routes.SIGNIN} />}
          </Route>
          <Route exact path={routes.CREATE_NEW_INSTANCE}>
            {authUser ? (!loginStep ? <Redirect to={routes.SELECT_INSTANCE_TEAM} /> : (loginStep === loginSteps.CREATE_NEW_INSTANCE ? <CreateNewInstance /> : (loginStep === loginSteps.COMPLETE_TRAINING ? <Redirect to={routes.COMPLETE_TRAINING} /> : <Redirect to={routes.HOME} />))) : <Redirect to={routes.SIGNIN} />}
          </Route>
          <Route exact path={routes.COMPLETE_TRAINING}>
            {authUser ? (!loginStep ? <Redirect to={routes.SELECT_INSTANCE_TEAM} /> : (loginStep === loginSteps.COMPLETE_TRAINING ? <CompleteTraining /> : (loginStep === loginSteps.CREATE_NEW_INSTANCE ? <Redirect to={routes.CREATE_NEW_INSTANCE} /> : <Redirect to={routes.HOME} />))) : <Redirect to={routes.SIGNIN} />}
          </Route>
          <Route component={NotFound} />
        </Switch>
        <Footer />
        {loginStep === loginSteps.FINISHED && <div className="backdrop"></div>}
    </Router>
  );
}

export default App;
