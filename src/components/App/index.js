import React, { useCallback } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import Loader from '../Loader';
import Signin from '../Auth/Signin';
import SelectInstanceTeam from '../Auth/SelectInstanceTeam';
import CreateNewInstance from '../Auth/CreateNewInstance';
import Home from '../Home';
import NotFound from '../NotFound';
import useWithAuthenticate from '../WithAuthenticate';
import * as routes from '../../constants/routes';
import * as loginSteps from '../../constants/login_steps';
import { useMappedState } from 'redux-react-hook';
import './App.css';

function App() {
  useWithAuthenticate();
  
  const mapState = useCallback((state) => ({
    loading: state.sessionState.loading,
    authUser: state.sessionState.authUser,
    loginStep: state.sessionState.loginStep,
  }), [])

  const { loading, authUser, loginStep } = useMappedState(mapState);

  if (loading && authUser) return <Loader />

  if (loading) return false;

  return (
    <Router basename={process.env.PUBLIC_URL}>
        <Header />
        <Switch>
          <Route exact path={routes.HOME}>
            {authUser ? (loginStep ? (loginStep === loginSteps.CREATE_NEW_INSTANCE ? <Redirect to={routes.CREATE_NEW_INSTANCE} /> : <Home />) : <Redirect to={routes.SELECT_INSTANCE_TEAM} />) : <Redirect to={routes.SIGNIN} />}
          </Route>
          <Route exact path={routes.SIGNIN}>
            {authUser ? (loginStep ? (loginStep === loginSteps.CREATE_NEW_INSTANCE ? <Redirect to={routes.CREATE_NEW_INSTANCE} /> : <Redirect to={routes.HOME} />) : <Redirect to={routes.SELECT_INSTANCE_TEAM} />) : <Signin />}
          </Route>
          <Route exact path={routes.SELECT_INSTANCE_TEAM}>
            {authUser ? (!loginStep ? <SelectInstanceTeam authUser={authUser} /> : (loginStep === loginSteps.CREATE_NEW_INSTANCE ? <Redirect to={routes.CREATE_NEW_INSTANCE} /> : <Redirect to={routes.HOME} />)) : <Redirect to={routes.SIGNIN} />}
          </Route>
          <Route exact path={routes.CREATE_NEW_INSTANCE}>
            {authUser ? (!loginStep ? <Redirect to={routes.SELECT_INSTANCE_TEAM} /> : (loginStep === loginSteps.CREATE_NEW_INSTANCE ? <CreateNewInstance /> : <Redirect to={routes.HOME} />)) : <Redirect to={routes.SIGNIN} />}
          </Route>
          <Route component={NotFound} />
        </Switch>
        <Footer />
    </Router>
  );
}

export default App;
