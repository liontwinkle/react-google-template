import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import sessionData from './session';
import themeConfigData from './themeConfigs';
import dashboardData from './dashboard';
import incidentData from './incident';

export default (history) => combineReducers({
  router: connectRouter(history),
  sessionData,
  incidentData,
  dashboardData,
  themeConfigData,
});
