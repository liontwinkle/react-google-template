import { useEffect } from 'react';
import { useDispatch } from 'redux-react-hook';
import axios from 'axios';
import * as actions from '../../constants/action_types';

async function authenticate(dispatch) {
    axios.defaults.withCredentials = true;

    try {
        const { data } = await axios.get('https://api.commandpost.com.au/auth/verifyToken');
        
        if (data) {
            dispatch({
                type: actions.SET_AUTH_USER,
                authUser: data
            })
        }
        else {
            dispatch({ type: actions.SET_AUTH_USER, authUser: null });                
        }
    }
    catch {
        dispatch({ type: actions.SET_AUTH_USER, authUser: null });
    }
}

function useWithAuthenticate() {
    const dispatch = useDispatch();
    useEffect(() => {
        authenticate(dispatch);
    }, [dispatch])
}

export default useWithAuthenticate;
