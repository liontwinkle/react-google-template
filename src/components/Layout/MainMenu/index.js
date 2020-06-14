import React, {useState, useRef, useEffect} from 'react';
import * as Icon from 'react-feather';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';
import axios from 'axios';
import useOutsideAlerter from '../../OutsideAlerter';
import Scrollbar from 'perfect-scrollbar-react';
import { useDispatch } from 'redux-react-hook';
import * as actions from '../../../constants/action_types';

function MainMenu(props) {
	const dispatch = useDispatch();
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
	            dispatch({
	                type: actions.SET_AUTH_USER,
	                authUser: data
	            })
	        }
	        else {
	            // open session expiry modal
	            dispatch({ type: actions.SET_SESSION_EXPIRY_MODAL_STATE, isSessionExpiryModalOpened: true });
	        }
	    }
	    catch {
	        // open session expiry modal
	        dispatch({ type: actions.SET_SESSION_EXPIRY_MODAL_STATE, isSessionExpiryModalOpened: true });
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
                    dispatch({ type: actions.SET_SESSION_EXPIRY_MODAL_STATE, isSessionExpiryModalOpened: true });
                    return;
                }
                console.log("Unexpected error: MainMenu:getAppsHandler", e);
            }
        }
        getAppsHandler(props.userId, props.eventId);
    }, [props.userId, props.eventId, dispatch])

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

export default MainMenu;
