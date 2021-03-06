import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { LogOut } from 'react-feather';
import { Dropdown } from 'react-bootstrap';

import { signOut, resetSessionData } from '../../redux/action/session';
import { setSessionExpiryModalState } from '../../redux/action/themeConfigs';

function Signout({
  isDropdownItem,
  signOut,
  setSessionExpiryModalState,
}) {
  const signoutHandler = (e) => {
    e.preventDefault();
    signOut()
      .then(() => {
        setSessionExpiryModalState(false);
        resetSessionData();
      })
      .catch(() => {
        setSessionExpiryModalState(false);
        resetSessionData();
      });
  };

  if (isDropdownItem) {
    return (
      <Dropdown.Item onClick={signoutHandler}>
        <LogOut />
        {' '}
        Sign Out
      </Dropdown.Item>
    );
  }

  return <a href="#sign" onClick={signoutHandler}>Sign Out</a>;
}

Signout.propTypes = {
  isDropdownItem: PropTypes.bool,
  signOut: PropTypes.func.isRequired,
  setSessionExpiryModalState: PropTypes.func.isRequired,
};

Signout.defaultProps = {
  isDropdownItem: false,
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
  signOut,
  setSessionExpiryModalState,
}, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(Signout);
