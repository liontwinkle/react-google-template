import React, { useState, useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as Icon from 'react-feather';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';
import axios from 'axios';
import useOutsideAlerter from '../../OutsideAlerter';
import Scrollbar from 'perfect-scrollbar-react';

import { setSessionExpiryModalState } from '../../../redux/action/themeConfigs';
import { setAuthUser } from '../../../redux/action/session';

function MainMenu({
	setAuthUser,
	setSessionExpiryModalState,
	userId,
	eventId,
}) {
	const wrapperRef = useRef(null);
	useOutsideAlerter(wrapperRef);

	const [apps, setApps] = useState([]);
	const [activeItem, setActiveItem] = useState(0);

	const clickMenuItemHandler = async (index, e) => {
		e.preventDefault();
		// check session
		try {
			const { data } = await axios.get(process.env.REACT_APP_API_URL + '/auth/verifyToken');

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
		const getAppsHandler = async (userId, eventId) => {
			try {
				const { data } = await axios.get(process.env.REACT_APP_API_URL + '/apps/' + eventId);
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
	}, [userId, eventId, setSessionExpiryModalState, setAuthUser])

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
	userId: PropTypes.string.isRequired,
	eventId: PropTypes.string.isRequired,
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
	setAuthUser,
	setSessionExpiryModalState,
}, dispatch);

export default connect(
	null,
	mapDispatchToProps,
)(MainMenu);