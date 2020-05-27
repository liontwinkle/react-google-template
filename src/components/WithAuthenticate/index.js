import { useEffect } from 'react';
import { useDispatch } from 'redux-react-hook';
import axios from 'axios';
import * as actions from '../../constants/action_types';

async function authenticate(dispatch) {
    try {
        const user = await axios.get('http://localhost:4000/auth/verifyToken', {withCredentials: true});
        
        if (user) {
            dispatch({
                type: actions.SET_AUTH_USER,
                authUser: user
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
    }, [])
}

export default useWithAuthenticate;
