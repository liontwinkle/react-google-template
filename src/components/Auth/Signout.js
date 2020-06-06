import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'redux-react-hook';
import { withRouter, Redirect } from 'react-router-dom';
import * as actions from '../../constants/action_types';
import * as routes from '../../constants/routes';

function Signout(props) {
    const dispatch = useDispatch();

    useEffect(() => {
        const signoutHandler = async () => {
            try {
                await axios.get(process.env.REACT_APP_API_URL + '/auth/signout');
                // unset authUser data
                dispatch({ type: actions.SET_AUTH_USER, authUser: null });
                // unset loginStep data
                dispatch({ type: actions.SET_LOGIN_STEP, loginStep: false });
            }
            catch (e) {
                console.log("Unexpected error: Signout:signoutHandler", e);
            }
        }
        signoutHandler();
    }, [dispatch]);

    return <Redirect to={routes.SIGNIN} />
}

export default withRouter(Signout);
