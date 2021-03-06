import types from '../actionType';

const INITIAL_STATE = {
  isMainMenuOpened: !!localStorage.getItem('isMainMenuOpened'),
  isNavbarMenuOpened: !!localStorage.getItem('isNavbarMenuOpened'),
  isSessionExpiryModalOpened: !!localStorage.getItem('isSessionExpiryModalOpened'),
  isLoading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SET_MAIN_MENU_STATE: {
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
        isNavbarMenuOpened: !!localStorage.getItem('isNavbarMenuOpened'),
        isSessionExpiryModalOpened: !!localStorage.getItem('isSessionExpiryModalOpened'),
      };
    }
    case types.SET_NAVBAR_MENU_STATE: {
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
        isMainMenuOpened: !!localStorage.getItem('isMainMenuOpened'),
        isNavbarMenuOpened: action.isNavbarMenuOpened,
        isSessionExpiryModalOpened: !!localStorage.getItem('isSessionExpiryModalOpened'),
      };
    }
    case types.SET_SESSION_EXPIRY_MODAL_STATE: {
      if (action.isSessionExpiryModalOpened) {
        localStorage.setItem('isSessionExpiryModalOpened', true);
      } else {
        localStorage.removeItem('isSessionExpiryModalOpened');
      }
      return {
        isMainMenuOpened: !!localStorage.getItem('isMainMenuOpened'),
        isNavbarMenuOpened: !!localStorage.getItem('isNavbarMenuOpened'),
        isSessionExpiryModalOpened: action.isSessionExpiryModalOpened,
      };
    }
    case types.SET_LOADING_VALUE: {
      const { isLoading } = action;
      return {
        ...state,
        isLoading,
      };
    }
    default: return state;
  }
};
