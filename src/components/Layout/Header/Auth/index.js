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
				<a href="" id="mainMenuOpen" className="burger-menu">
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
						 stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
						 className="feather feather-menu">
						<line x1="3" y1="12" x2="21" y2="12" />
						<line x1="3" y1="6" x2="21" y2="6" />
						<line x1="3" y1="18" x2="21" y2="18" />
					</svg></a>
				<a href="" id="chatContentClose" className="burger-menu d-none">
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
						 stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
						 className="feather feather-arrow-left">
						<line x1="19" y1="12" x2="5" y2="12" />
						<polyline points="12 19 5 12 12 5" />
					</svg></a>

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
