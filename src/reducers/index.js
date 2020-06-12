import { combineReducers } from 'redux';
import sessionReducer from './session';
import themeConfigsReducer from './themeConfigs';

const rootReducer = combineReducers({
	sessionState: sessionReducer,
	themeConfigsState: themeConfigsReducer
});

export default rootReducer;
