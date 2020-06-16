import sessionService from 'services/serssion.service';
import types from '../actionTypes';

export const signInAuth = (requestBody) => (dispatch) => {

    return sessionService.SignIn(requestBody)
        .then((data) => {
            dispatch({
                type: types.SET_AUTH_USER,
                authUser: data
            });
        })
        .catch((error) => {
            throw error;
        });
};

export const signOut = () => {
    return sessionService.SignOut()
};

export const verifyToken = () => {
    return sessionService.VerifyToken()
}

export const updateUser = (userData) => {
    return sessionService.updateUser(userData);
}

export const getTrainingCount = (loginSteps) => (dispatch) => {
    return sessionService.GetTrainingCount()
        .then((data) => {
            let trainingCompleted = data.count > 0;
            let updateLoginSteps = trainingCompleted ? loginSteps.FINISHED : loginSteps.COMPLETE_TRAINING;
            dispatch({
                type: types.SET_LOGIN_STEP,
                loginStep: updateLoginSteps
            })
            return data;
        })
        .catch((err) => {
            throw err;
        });
}

export const getInstances = () => {
    return sessionService.GetInstancecs()
}

export const getTeams = (idInstance, idEvent) => {
    return sessionService.GetTeams(idInstance, idEvent)
}

export const setAuthUser = (value) => (dispatch) => {
    dispatch({
        type: types.SET_AUTH_USER,
        authUser: value
    })
}

export const setLoginStep = (step) => (dispatch) => {
    dispatch({
        type: types.SET_LOGIN_STEP,
        loginStep: step
    })
}

export const setSessionData = (data) => (dispatch) => {
    dispatch({
        type: types.SET_SESSION_DATA,
        sessionData: data
    })
}

export const setSessionExpiryModalState = (expiryState) => (dispatch) => {
    dispatch({
        type: types.SET_SESSION_EXPIRY_MODAL_STATE,
        isSessionExpiryModalOpened: expiryState
    })
}