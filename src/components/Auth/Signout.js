import React from 'react';
import axios from 'axios';
import { useDispatch } from 'redux-react-hook';
import { withRouter } from 'react-router-dom';
import * as actions from '../../constants/action_types';
import * as routes from '../../constants/routes';

function Signout(props) {
    const dispatch = useDispatch();

    const signoutHandler = async (e) => {
        e.preventDefault();
        try {
            await axios.get(process.env.REACT_APP_API_URL + '/auth/signout');
            // unset authUser data
            dispatch({ type: actions.SET_AUTH_USER, authUser: null });
            // unset loginStep data
            dispatch({ type: actions.SET_LOGIN_STEP, loginStep: false });
            // redirect to SIGNIN route
            props.history.push(routes.SIGNIN);
        }
        catch (e) {
            console.log("Unexpected error: Signout:signoutHandler", e);
        }
    }

    return <a href="." className={props.className} onClick={signoutHandler}>Sign Out</a>
}

export default withRouter(Signout);
