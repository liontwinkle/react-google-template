import React, { useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { X, Search } from 'react-feather';
import { Form, Button } from 'react-bootstrap';
import * as routes from '../../../../constants/routes';
import { Link } from 'react-router-dom';
import { setMainMenuState, setNavbarMenuState } from '../../../../redux/action/themeConfigs';

import './NavbarMenu.css';

function NavbarMenu({
	setMainMenuState,
	setNavbarMenuState,
}) {

	const wrapperRef = useRef(null);
	useEffect(() => {
		/**
		* if clicked on outside of element
		*/
		function handleClickOutside(event) {
			if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
				// clicked outside of NavbarMenu component
				if (wrapperRef.current.id === "navbarMenu"
					&& document.body.classList.contains('navbar-nav-show')
				) {
					setNavbarMenuState(false);
					setMainMenuState(false);
				}

				// clicked outside of MainMenu component
				if (wrapperRef.current.id === "mainMenu"
					&& document.body.classList.contains('mail-sidebar-show')
					&& !event.target.getAttribute('isnavbarmenuopenclicked')
					&& !event.target.parentNode.getAttribute('isnavbarmenuopenclicked')
				) {
					setMainMenuState(false);
				}
			}
		}

		// Bind the event listener
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			// Unbind the event listener on clean up
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [wrapperRef, setMainMenuState, setNavbarMenuState]);

	return (
		<>
			<div id="navbarMenu" className="navbar-menu-wrapper" ref={wrapperRef}>
				<div className="navbar-menu-header">
					<Link className="df-logo" to={routes.HOME}>Command<span>Post</span></Link>
					<a id="mainMenuClose" href="."><X className="feather-x" /></a>
				</div>
				<div id="headerSearch" className="d-flex">
					<div className="search-form mg-l-15">
						<Form.Control placeholder="Search" />
						<Button variant="search"><Search /></Button>
					</div>
				</div>
				<div id="sessionTimeoutMessage" className="m-auto d-none d-sm-block" />
			</div>
		</>
	)
}

NavbarMenu.propTypes = {
	setMainMenuState: PropTypes.func.isRequired,
	setNavbarMenuState: PropTypes.func.isRequired,
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
	setMainMenuState,
	setNavbarMenuState
}, dispatch);

export default connect(
	null,
	mapDispatchToProps,
)(NavbarMenu);
