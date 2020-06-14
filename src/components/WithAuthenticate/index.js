import { useEffect } from 'react';
import { useDispatch } from 'redux-react-hook';
import axios from 'axios';
import * as actions from '../../constants/action_types';

async function authenticate(dispatch) {
    axios.defaults.withCredentials = true;

    try {
        const { data } = await axios.get(process.env.REACT_APP_API_URL + '/auth/verifyToken');
        
        if (data) {
            dispatch({
                type: actions.SET_AUTH_USER,
                authUser: data
            })
        }
        else {
            // reset all sessions
            dispatch({ type: actions.SET_AUTH_USER, authUser: null });
            dispatch({ type: actions.SET_LOGIN_STEP, loginStep: false });
            dispatch({ type: actions.SET_SESSION_DATA, sessionData: null });
            // close session expiry modal
            dispatch({ type: actions.SET_SESSION_EXPIRY_MODAL_STATE, isSessionExpiryModalOpened: false });
        }
    }
    catch {
        // reset all sessions
        dispatch({ type: actions.SET_AUTH_USER, authUser: null });
        dispatch({ type: actions.SET_LOGIN_STEP, loginStep: false });
        dispatch({ type: actions.SET_SESSION_DATA, sessionData: null });
        // close session expiry modal
        dispatch({ type: actions.SET_SESSION_EXPIRY_MODAL_STATE, isSessionExpiryModalOpened: false });
    }
}

function useWithAuthenticate() {
    const dispatch = useDispatch();
    useEffect(() => {
        authenticate(dispatch);
    }, [dispatch])
}

export default useWithAuthenticate;
