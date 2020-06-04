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
            dispatch({ type: actions.SET_AUTH_USER, authUser: null });
            dispatch({ type: actions.SET_LOGIN_STEP, isInstanceSelected: false });
        }
    }
    catch {
        dispatch({ type: actions.SET_AUTH_USER, authUser: null });
        dispatch({ type: actions.SET_LOGIN_STEP, isInstanceSelected: false });
    }
}

function useWithAuthenticate() {
    const dispatch = useDispatch();
    useEffect(() => {
        authenticate(dispatch);
    }, [dispatch])
}

export default useWithAuthenticate;
