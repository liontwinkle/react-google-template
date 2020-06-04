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
import SelectInstance from '../Auth/SelectInstance';
import Home from '../Home';
import NotFound from '../NotFound';
import useWithAuthenticate from '../WithAuthenticate';
import * as routes from '../../constants/routes';
import { useMappedState } from 'redux-react-hook';
import './App.css';

function App() {
  useWithAuthenticate();
  
  const mapState = useCallback((state) => ({
    loading: state.sessionState.loading,
    authUser: state.sessionState.authUser,
    isInstanceSelected: state.sessionState.isInstanceSelected,
  }), [])

  const { loading, authUser, isInstanceSelected } = useMappedState(mapState);

  if (loading && authUser) return <Loader />

  if (loading) return false;

  return (
    <Router basename={process.env.PUBLIC_URL}>
        <Header />
        <Switch>
          <Route exact path={routes.HOME}>
            {authUser ? (isInstanceSelected ? <Home /> : <Redirect to={routes.SELECT_INSTANCE} />) : <Redirect to={routes.SIGNIN} />}
          </Route>
          <Route exact path={routes.SIGNIN}>
            {!authUser ? <Signin /> : (isInstanceSelected ? <Redirect to={routes.HOME} /> : <Redirect to={routes.SELECT_INSTANCE} />)}
          </Route>
          <Route exact path={routes.SELECT_INSTANCE}>
            {authUser ? (!isInstanceSelected ? <SelectInstance /> : <Redirect to={routes.HOME} />) : <Redirect to={routes.HOME} />}
          </Route>
          <Route component={NotFound} />
        </Switch>
        <Footer />
    </Router>
  );
}

export default App;
