import { SET_AUTH_USER, SET_LOGIN_STEP } from '../constants/action_types';

const INITIAL_STATE = {
	authUser: localStorage.getItem('authUser') ? JSON.parse(localStorage.getItem('authUser')) : null,
	isInstanceSelected: localStorage.getItem('isInstanceSelected') ? true : false,
	loading: true
};

function sessionReducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case SET_AUTH_USER: {
			if (action.authUser) {
				localStorage.setItem('authUser', JSON.stringify(action.authUser));
			} else {
				localStorage.removeItem('authUser');
			}
			return { authUser: action.authUser, isInstanceSelected: localStorage.getItem('isInstanceSelected') || false, loading: false };
		}
		case SET_LOGIN_STEP: {
			if (action.isInstanceSelected) {
				localStorage.setItem('isInstanceSelected', action.isInstanceSelected);
			} else {
				localStorage.removeItem('isInstanceSelected');
			}
			return { authUser: localStorage.getItem('authUser') ? JSON.parse(localStorage.getItem('authUser')) : null, isInstanceSelected: action.isInstanceSelected, loading: false };
		}
		default: return state;
	}
}

export default sessionReducer;
