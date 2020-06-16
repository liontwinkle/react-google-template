import types from '../actionTypes';

const INITIAL_STATE = {
	authUser: localStorage.getItem('authUser') ? JSON.parse(localStorage.getItem('authUser')) : null,
	loginStep: localStorage.getItem('loginStep') || false,
	sessionData: localStorage.getItem('sessionData') ? JSON.parse(localStorage.getItem('sessionData')) : null,
	loading: true
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case types.SET_AUTH_USER: {
			if (action.authUser) {
				localStorage.setItem('authUser', JSON.stringify(action.authUser));
			} else {
				localStorage.removeItem('authUser');
			}
			return {
				authUser: action.authUser,
				loginStep: localStorage.getItem('loginStep') || false,
				sessionData: localStorage.getItem('sessionData') ? JSON.parse(localStorage.getItem('sessionData')) : null,
				loading: false 
			};
		}
		case types.SET_LOGIN_STEP: {
			if (action.loginStep) {
				localStorage.setItem('loginStep', action.loginStep);
			} else {
				localStorage.removeItem('loginStep');
			}
			return {
				authUser: localStorage.getItem('authUser') ? JSON.parse(localStorage.getItem('authUser')) : null,
				loginStep: action.loginStep,
				sessionData: localStorage.getItem('sessionData') ? JSON.parse(localStorage.getItem('sessionData')) : null,
				loading: false
			};
		}
		case types.SET_SESSION_DATA: {
			if (action.sessionData) {
				localStorage.setItem('sessionData', JSON.stringify(action.sessionData));
			} else {
				localStorage.removeItem('sessionData');
			}
			return {
				authUser: localStorage.getItem('authUser') ? JSON.parse(localStorage.getItem('authUser')) : null,
				loginStep: localStorage.getItem('loginStep') || false,
				sessionData: action.sessionData,
				loading: false
			};
		}
		default: return state;
	}
}
