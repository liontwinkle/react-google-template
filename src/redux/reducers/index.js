import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import sessionData from './session';
import themeConfigData from './themeConfigs';

export default (history) => combineReducers({
    router: connectRouter(history),
    sessionData,
    themeConfigData,
});
