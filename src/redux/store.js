import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import { routerMiddleware } from 'react-router-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import * as History from 'history';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

const initialState = {};
const enhancers = [];

export const history = History.createBrowserHistory();

const middleware = [thunk, logger, routerMiddleware(history)];

if (process.env.NODE_ENV === 'development') {
  const { devToolsExtension } = window;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers,
);

export default createStore(rootReducer(history), initialState, composedEnhancers);
