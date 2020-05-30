import React, { useCallback } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import Header from '../Layout/Header';
import Loader from '../Loader';
import Signin from '../Auth/Signin';
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
    authUser: state.sessionState.authUser
  }), [])

  const { loading, authUser } = useMappedState(mapState);

  if (loading) return <Loader />

  return (
    <Router basename={process.env.PUBLIC_URL}>
        <Header />
        <Switch>
          <Route exact path={routes.HOME}>
            {authUser ? <Home /> : <Redirect to={routes.SIGNIN} />}
          </Route>
          <Route exact path={routes.SIGNIN} component={() => <Signin />} />
          <Route component={NotFound} />
        </Switch>
    </Router>
  );
}

export default App;
