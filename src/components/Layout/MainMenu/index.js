import React, { useState, useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as Icon from 'react-feather';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';
import axios from 'axios';
import Scrollbar from 'perfect-scrollbar-react';

import {
	setSessionExpiryModalState,
	setMainMenuState,
	setNavbarMenuState,
} from '../../../redux/action/themeConfigs';

import { setAuthUser } from '../../../redux/action/session';

function MainMenu({
	setAuthUser,
	setSessionExpiryModalState,
	userId,
	eventId,
	setMainMenuState,
	setNavbarMenuState,
}) {
	const wrapperRef = useRef(null);

	const [apps, setApps] = useState([]);
	const [activeItem, setActiveItem] = useState(0);

	const clickMenuItemHandler = async (index, e) => {
		e.preventDefault();
		// check session
		try {
			const { data } = await axios.get(process.env.REACT_APP_API + '/auth/verifyToken');

			if (data) {
				setActiveItem(index);
				setAuthUser(data);
			}
			else {
				// open session expiry modal
				setSessionExpiryModalState(true);
			}
		}
		catch {
			// open session expiry modal
			setSessionExpiryModalState(true);
		}
		// end of check session
	}

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

		const getAppsHandler = async (userId, eventId) => {
			try {
				const { data } = await axios.get(process.env.REACT_APP_API + '/apps/' + eventId);
				// set apps data
				setApps(data.apps);
			}
			catch (e) {
				// if unauthorized
				if (e.response.status === 401) {
					// open session expiry modal
					setSessionExpiryModalState(true);
					return;
				}
				console.log("Unexpected error: MainMenu:getAppsHandler", e);
			}
		}
		getAppsHandler(userId, eventId);

		return () => {
			// Unbind the event listener on clean up
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [
		wrapperRef,
		setMainMenuState,
		setNavbarMenuState,
		userId,
		eventId,
		setSessionExpiryModalState,
		setAuthUser
	])

	return (
		<>
			<div className="mail-sidebar" ref={wrapperRef} id="mainMenu">
				<div className="mail-sidebar-body">
					<Scrollbar>
						<div className="pd-y-15">
							<nav className="nav nav-sidebar tx-13">
								{apps.map((app, index) => {
									let AppIcon = Icon[app.app_icon];
									return (
										<OverlayTrigger
											key={index}
											placement="right"
											overlay={
												<Tooltip id={"tooltip-" + index}>
													{app.application_title}
												</Tooltip>
											}
										>
											<a href="." onClick={(e) => clickMenuItemHandler(index, e)} className={activeItem === index ? 'nav-link active' : 'nav-link'}><AppIcon /></a>
										</OverlayTrigger>
									)
								})}
							</nav>
						</div>
					</Scrollbar>
				</div>
			</div>
		</>
	)
}

MainMenu.propTypes = {
	setAuthUser: PropTypes.func.isRequired,
	setSessionExpiryModalState: PropTypes.func.isRequired,
	userId: PropTypes.number,
	eventId: PropTypes.string.isRequired,
	setMainMenuState: PropTypes.func.isRequired,
	setNavbarMenuState: PropTypes.func.isRequired,
}

MainMenu.defaultProps = {
	userId: null,
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
	setAuthUser,
	setSessionExpiryModalState,
	setMainMenuState,
	setNavbarMenuState,
}, dispatch);

export default connect(
	null,
	mapDispatchToProps,
)(MainMenu);