import React from 'react';
import axios from 'axios';
import { useDispatch } from 'redux-react-hook';
import { withRouter } from 'react-router-dom';
import * as actions from '../../constants/action_types';
import { LogOut } from 'react-feather';
import { Dropdown } from 'react-bootstrap';

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
            // unset sessionData data
            dispatch({ type: actions.SET_SESSION_DATA, sessionData: null });
            // will redirect to required route related with sessions unset
        }
        catch (e) {
            console.log("Unexpected error: Signout:signoutHandler", e);
        }
    }

    if (props.isDropdownItem) {
        return <Dropdown.Item onClick={signoutHandler}><LogOut /> Sign Out</Dropdown.Item>
    }

    return <a href="." onClick={signoutHandler}>Sign Out</a>
}

export default withRouter(Signout);
