import sessionService from '../../services/session.service';
import types from '../actionType';

export const signInAuth = (requestBody) => (dispatch) => sessionService.SignIn(requestBody)
  .then((data) => {
    dispatch({
      type: types.SET_AUTH_USER,
      authUser: data,
    });
  })
  .catch((error) => {
    throw error;
  });

export const verifyToken = () => (dispatch) => sessionService.VerifyToken()
  .then(({ data }) => {
    dispatch({
      type: types.SET_AUTH_USER,
      authUser: data,
    });
    return data;
  });

export const updateUser = (userData) => (dispatch, getState) => {
  const currentAuthUser = getState().sessionData.authUser;
  return sessionService.UpdateUser(userData)
    .then(() => {
      dispatch({
        type: types.SET_AUTH_USER,
        authUser: Object.assign(currentAuthUser, userData),
      });
    });
};

export const getTrainingCount = (loginSteps) => (dispatch) => sessionService.GetTrainingCount()
  .then((data) => {
    const trainingCompleted = data.count > 0;
    const updateLoginSteps = trainingCompleted ? loginSteps.FINISHED : loginSteps.COMPLETE_TRAINING;
    dispatch({
      type: types.SET_LOGIN_STEP,
      loginStep: updateLoginSteps,
    });
    return data;
  })
  .catch((err) => {
    throw err;
  });

export const getInstances = () => (dispatch) => sessionService.GetInstancecs()
  .then((data) => {
    dispatch({
      type: types.SET_INSTANCES,
      instances: data.data.instances,
    });
  });

export const setInstances = (data) => (dispatch) => {
  dispatch({
    type: types.SET_AUTH_USER,
    authUser: data,
  });
};

export const getTeams = () => (dispatch) => sessionService.GetTeams()
  .then(({ data }) => {
    dispatch({
      type: types.SET_TEAMS,
      teams: data.teams,
    });
  });

export const setAuthUser = (value) => (dispatch) => {
  dispatch({
    type: types.SET_AUTH_USER,
    authUser: value,
  });
};

export const setLoginStep = (step) => (dispatch) => {
  dispatch({
    type: types.SET_LOGIN_STEP,
    loginStep: step,
  });
};

export const setSessionData = (data) => (dispatch) => {
  dispatch({
    type: types.SET_SESSION_DATA,
    sessionData: data,
  });
};

export const signOut = () => (dispatch) => sessionService.SignOut()
  .then(() => {
    dispatch({
      type: types.SIGN_OUT,
    });
  })
  .catch((error) => {
    throw error;
  });

export const resetSessionData = () => (dispatch) => {
  dispatch({
    type: types.RESET_SESSION_DATA,
  });
};
