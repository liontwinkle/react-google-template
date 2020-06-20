import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { LogOut } from 'react-feather';
import { Dropdown } from 'react-bootstrap';

import { signOut } from '../../redux/action/session';
import { setSessionExpiryModalState } from '../../redux/action/themeConfigs';

function Signout({
    signOut,
    setSessionExpiryModalState,
    isDropdownItem,
}) {
    const signoutHandler = (e) => {
        e.preventDefault();
        signOut()
            .then(() => {
                setSessionExpiryModalState(false);
            })
            .catch((error) => {
                setSessionExpiryModalState(false);
            })
    }

    if (isDropdownItem) {
        return <Dropdown.Item onClick={signoutHandler}><LogOut /> Sign Out</Dropdown.Item>
    }

    return <a href="." onClick={signoutHandler}>Sign Out</a>
}

Signout.propTypes = {
    signOut: PropTypes.func.isRequired,
    setSessionExpiryModalState: PropTypes.func.isRequired,
    isDropdownItem: PropTypes.bool.isRequired,
};

Signout.defaultProps = {
    isDropdownItem: false,
}
const mapDispatchToProps = (dispatch) => bindActionCreators({
    signOut,
    setSessionExpiryModalState
}, dispatch);

export default connect(
    null,
    mapDispatchToProps,
)(Signout);
