import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import * as routes from '../../../../constants/routes';
import NavbarMenu from './NavbarMenu';
import NavbarRight from './NavbarRight';
import { Menu, ArrowLeft } from 'react-feather';


import classNames from 'classnames';

import { setMainMenuState, setNavbarMenuState } from '../../../../redux/action/themeConfigs';

function AuthHeader({
	setNavbarMenuState,
	setMainMenuState,
	isMainMenuOpened,
	authUser,
}) {

	const navbarMenuOpenHandler = (e) => {
		e.preventDefault();
		setNavbarMenuState(true);
	}

	const mainMenuOpenHandler = (e) => {
		e.preventDefault();
		setMainMenuState(true);
	}

	let navbarMenuOpenClasses = classNames({
		'burger-menu': true,
		'd-md-flex': true,
		'd-lg-none': true,
		'd-none': !isMainMenuOpened
	});

	let mainMenuOpenClasses = classNames({
		'burger-menu': true,
		'd-md-none': true,
		'd-none': isMainMenuOpened
	});

	return (
		<>
			<header className="navbar navbar-header navbar-header-fixed">
				<a href="" id="mainMenuOpen" className="burger-menu"><i data-feather="menu" /></a>
				<a href="" id="chatContentClose" className="burger-menu d-none"><i data-feather="arrow-left" /></a>

				<div className="navbar-brand">
					<Link className="df-logo" to={routes.HOME}>Command<span>Post</span></Link>
				</div>
				<NavbarMenu />
				<NavbarRight authUser={authUser} />
			</header>
		</>
	)
}

AuthHeader.propTypes = {
	setMainMenuState: PropTypes.func.isRequired,
	setNavbarMenuState: PropTypes.func.isRequired,
	isMainMenuOpened: PropTypes.bool.isRequired,
	authUser: PropTypes.object.isRequired,
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
	setMainMenuState,
	setNavbarMenuState
}, dispatch);

const mapStateToProps = (store) => ({
	isMainMenuOpened: store.themeConfigData.isMainMenuOpened,
	authUser: store.sessionData.authUser
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(AuthHeader);
