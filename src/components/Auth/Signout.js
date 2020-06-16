import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { LogOut } from 'react-feather';
import { Dropdown } from 'react-bootstrap';

import {
    signOut,
    setAuthUser,
    setLoginStep,
    setSessionData,
    setSessionExpiryModalState,
} from '../../../redux/action';

function Signout({
    setAuthUser,
    signOut,
    setLoginStep,
    setSessionData,
    setSessionExpiryModalState,
    isDropdownItem,
}) {
    const signoutHandler = async (e) => {
        e.preventDefault();
        try {
            await signOut();
            // unset authUser data
            setAuthUser(null);
            // unset loginStep data
            setLoginStep(false);
            // unset sessionData data
            setSessionData(null);
            // will redirect to required route related with sessions unset
            // close session expiry modal
            setSessionExpiryModalState(false);
        }
        catch (e) {
            // if unauthorized
            if (e.response.status === 401) {
                // unset authUser data
                setAuthUser(null);
                // unset loginStep data
                setLoginStep(false);
                // unset sessionData data
                setSessionData(null);
                // will redirect to required route related with sessions unset
                // close session expiry modal
                setSessionExpiryModalState(false);
                return;
            }
            console.log("Unexpected error: Signout:signoutHandler", e);
        }
    }

    if (isDropdownItem) {
        return <Dropdown.Item onClick={signoutHandler}><LogOut /> Sign Out</Dropdown.Item>
    }

    return <a href="." onClick={signoutHandler}>Sign Out</a>
}

Signout.propTypes = {
    setAuthUser: PropTypes.func.isRequired,
    signOut: PropTypes.func.isRequired,
    setLoginStep: PropTypes.func.isRequired,
    setSessionData: PropTypes.func.isRequired,
    setSessionExpiryModalState: PropTypes.func.isRequired,
    isDropdownItem: PropTypes.bool.isRequired,
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
    setAuthUser,
    signOut,
    setLoginStep,
    setSessionData,
    setSessionExpiryModalState
}, dispatch);

export default connect(
    null,
    mapDispatchToProps,
)(Signout);
