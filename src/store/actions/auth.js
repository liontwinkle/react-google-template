import axios from 'axios';

import * as actionTypes from './actionTypes';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (token, userId, userData) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        idToken: token,
        userId: userId,
        userData: userData
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    localStorage.removeItem('userId');
    localStorage.removeItem('userData');
    //Redirect user to Signin after token failed
    if (window.location.pathname.split('/').pop() !== 'signin') window.location.href = '/signin';
    return {
        type: actionTypes.AUTH_LOGOUT
    };
};

export const checkAuthTimeout = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime * 1000);
    };
};

export const auth = (email, password, isSignup) => {
    return dispatch => {
        dispatch(authStart());
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        };
        let url = 'http://74.208.102.130:4000/api/register';
        if (!isSignup) {
            url = 'http://74.208.102.130:4000/api/login';
        }
        axios.post(url, authData)
            .then(response => {
                console.log(response);
                if (response.data.status.code === 200) {
                    console.log(response.data.user.user_first_name);
                    const expirationDate = new Date(new Date().getTime() + response.data.expiresIn * 1000);
                    localStorage.setItem('token', response.data.user.user_login_token);
                    localStorage.setItem('expirationDate', expirationDate);
                    localStorage.setItem('userId', response.data.user.id);
                    localStorage.setItem('userData', JSON.stringify(response.data.user));
                    dispatch(authSuccess(response.data.user.user_login_token, response.data.user.id, response.data.user));
                    dispatch(checkAuthTimeout(response.data.expiresIn));
                } else {
                    dispatch(authFail(response.data.status));
                }
            })
            .catch(err => {
                dispatch(authFail({
                    "code": 0,
                    "message": 'Something went wrong. Please try again later. ' + err
                  }));
            });
    };
};

export const setAuthRedirectPath = (path) => {
    return {
        type: actionTypes.SET_AUTH_REDIRECT_PATH,
        path: path
    };
};

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if (!token) {
            dispatch(logout());
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if (expirationDate <= new Date()) {
                dispatch(logout());
            } else {
                const userId = localStorage.getItem('userId');

                //Dispatch data from Local storage to Redux store after page refresh
                const userData = JSON.parse(localStorage.getItem('userData'));

                dispatch(authSuccess(token, userId, userData));
                dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000));
            }
        }
    };
};