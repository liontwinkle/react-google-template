import React from 'react';
import PropTypes from 'prop-types';
import * as loginSteps from '../../../constants/login_steps';
import AuthHeader from './Auth';
import NonAuthHeader from './nonauth';

function Header(props) {
  if (props.authUser && props.loginStep === loginSteps.FINISHED && !document.body.classList.contains('app-mail')) {
    document.body.classList.add('app-mail');
  }
  return props.authUser && props.loginStep === loginSteps.FINISHED ? <AuthHeader authUser={props.authUser} isMainMenuOpened={props.isMainMenuOpened} isNavbarMenuOpened={props.isNavbarMenuOpened} /> : <NonAuthHeader />;
}

Header.propTypes = {
  authUser: PropTypes.object,
  isMainMenuOpened: PropTypes.bool,
  isNavbarMenuOpened: PropTypes.bool,
  loginStep: PropTypes.string,
};

Header.defaultProps = {
  authUser: null,
  loginStep: null,
  isMainMenuOpened: false,
  isNavbarMenuOpened: false,
};
export default Header;
