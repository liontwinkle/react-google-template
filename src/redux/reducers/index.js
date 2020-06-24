import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import sessionData from './session';
import themeConfigData from './themeConfigs';
import dashboardData from './dashboard';

export default (history) => combineReducers({
    router: connectRouter(history),
    sessionData,
    dashboardData,
    themeConfigData,
});
