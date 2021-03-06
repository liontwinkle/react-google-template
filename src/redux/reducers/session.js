import types from '../actionType';

const INITIAL_STATE = {
  authUser: localStorage.getItem('authUser') ? JSON.parse(localStorage.getItem('authUser')) : null,
  loginStep: localStorage.getItem('loginStep') || null,
  sessionData: localStorage.getItem('sessionData') ? JSON.parse(localStorage.getItem('sessionData')) : null,
  instances: [],
  teams: [],
  loading: false,
  teamFg: false,
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
        ...state,
        authUser: action.authUser,
        loginStep: localStorage.getItem('loginStep') || null,
        sessionData: localStorage.getItem('sessionData') ? JSON.parse(localStorage.getItem('sessionData')) : null,
        loading: false,
      };
    }
    case types.SET_LOGIN_STEP: {
      if (action.loginStep) {
        localStorage.setItem('loginStep', action.loginStep);
      } else {
        localStorage.removeItem('loginStep');
      }
      return {
        ...state,
        authUser: localStorage.getItem('authUser') ? JSON.parse(localStorage.getItem('authUser')) : null,
        loginStep: action.loginStep,
        sessionData: localStorage.getItem('sessionData') ? JSON.parse(localStorage.getItem('sessionData')) : null,
        loading: false,
      };
    }
    case types.SET_SESSION_DATA: {
      if (action.sessionData) {
        localStorage.setItem('sessionData', JSON.stringify(action.sessionData));
      } else {
        localStorage.removeItem('sessionData');
      }
      return {
        ...state,
        authUser: localStorage.getItem('authUser') ? JSON.parse(localStorage.getItem('authUser')) : null,
        loginStep: localStorage.getItem('loginStep') || null,
        sessionData: action.sessionData,
        loading: false,
      };
    }
    case types.SET_INSTANCES: {
      const { instances } = action;
      return {
        ...state,
        instances,
      };
    }

    case types.SET_TEAMS: {
      const { teams } = action;
      return {
        ...state,
        teams,
        teamFg: true,
      };
    }

    case types.RESET_SESSION_DATA: {
      localStorage.clear();
      return {
        ...state,
        authUser: null,
        loginStep: null,
        sessionData: null,
      };
    }

    case types.SIGN_OUT: {
      localStorage.clear();
      return {
        ...state,
        authUser: null,
        loginStep: null,
        sessionData: null,
      };
    }
    default: return state;
  }
};
