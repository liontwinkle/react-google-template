import { SET_MAIN_MENU_STATE, SET_NAVBAR_MENU_STATE, SET_SESSION_EXPIRY_MODAL_STATE } from '../constants/action_types';

const INITIAL_STATE = {
	isMainMenuOpened: localStorage.getItem('isMainMenuOpened') ? true : false,
	isNavbarMenuOpened: localStorage.getItem('isNavbarMenuOpened') ? true : false,
	isSessionExpiryModalOpened: localStorage.getItem('isSessionExpiryModalOpened') ? true : false
};

function themeConfigsReducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case SET_MAIN_MENU_STATE: {
			if (action.isMainMenuOpened) {
				localStorage.setItem('isMainMenuOpened', true);
				if (!document.body.classList.contains('mail-sidebar-show')) {
					document.body.classList.add('mail-sidebar-show');
				}
			} else {
				localStorage.removeItem('isMainMenuOpened');
				if (document.body.classList.contains('mail-sidebar-show')) {
					document.body.classList.remove('mail-sidebar-show');
				}
			}
			return {
				isMainMenuOpened: action.isMainMenuOpened,
				isNavbarMenuOpened: localStorage.getItem('isNavbarMenuOpened') ? true : false,
				isSessionExpiryModalOpened: localStorage.getItem('isSessionExpiryModalOpened') ? true : false
			};
		}
		case SET_NAVBAR_MENU_STATE: {
			if (action.isNavbarMenuOpened) {
				localStorage.setItem('isNavbarMenuOpened', true);
				if (!document.body.classList.contains('navbar-nav-show')) {
					document.body.classList.add('navbar-nav-show');
				}
			} else {
				if (document.body.classList.contains('navbar-nav-show')) {
					document.body.classList.remove('navbar-nav-show');
				}
				localStorage.removeItem('isNavbarMenuOpened');
			}
			return {
				isMainMenuOpened: localStorage.getItem('isMainMenuOpened') ? true : false,
				isNavbarMenuOpened: action.isNavbarMenuOpened,
				isSessionExpiryModalOpened: localStorage.getItem('isSessionExpiryModalOpened') ? true : false
			};
		}
		case SET_SESSION_EXPIRY_MODAL_STATE: {
			if (action.isSessionExpiryModalOpened) {
				localStorage.setItem('isSessionExpiryModalOpened', true);
			} else {
				localStorage.removeItem('isSessionExpiryModalOpened');
			}
			return {
				isMainMenuOpened: localStorage.getItem('isMainMenuOpened') ? true : false,
				isNavbarMenuOpened: localStorage.getItem('isNavbarMenuOpened') ? true : false,
				isSessionExpiryModalOpened: action.isSessionExpiryModalOpened
			};
		}
		default: return state;
	}
}

export default themeConfigsReducer;
