import sessionService from '../../services/session.service';
import types from '../actionType';

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

export const verifyToken = () => (dispatch) => {
    return sessionService.VerifyToken()
        .then((data) => {
            dispatch({
                type: types.SET_AUTH_USER,
                authUser: data
            })
            return data;
        })
}

export const updateUser = (userData) => (dispatch, getState) => {
    const currentAuthUser = getState().sessionData.authUser;
    return sessionService.UpdateUser(userData)
        .then(() => {
            console.log('userData: ', userData); // fixme
            console.log('currentAuth: ', currentAuthUser); // fixme
            dispatch({
                type: types.SET_AUTH_USER,
                authUser: Object.assign(currentAuthUser, userData)
            });
        })
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

export const getInstances = () => (dispatch) => {
    return sessionService.GetInstancecs()
        .then((data) => {
            dispatch({
                type: types.SET_INSTANCES,
                instances: data.data.instances,
            })
        })
}

export const setInstances = (data) => (dispatch) => {
    dispatch({
        type: types.SET_AUTH_USER,
        authUser: data
    })
}

export const getTeams = (idInstance, idEvent) => (dispatch) => {
    return sessionService.GetTeams(idInstance, idEvent)
        .then(({ data }) => {
            dispatch({
                type: types.SET_TEAMS,
                teams: data.teams
            })
        })
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

export const signOut = () => (dispatch) => {
    return sessionService.SignOut()
        .then(() => {
            dispatch({
                type: types.RESET_SESSION_DATA,
            })
        })
        .catch((error) => {
            dispatch({
                type: types.RESET_SESSION_DATA,
            })
            throw error;
        })
};

export const resetSessionData = () => (dispatch) => {
    dispatch({
        type: types.RESET_SESSION_DATA,
    })
}