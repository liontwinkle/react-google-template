import React, {useState, useRef, useEffect} from 'react';
import * as Icon from 'react-feather';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';
import axios from 'axios';
import useOutsideAlerter from '../../OutsideAlerter';
import Scrollbar from 'perfect-scrollbar-react';

function MainMenu(props) {
	const wrapperRef = useRef(null);
	useOutsideAlerter(wrapperRef);

	const [apps, setApps] = useState([]);
    const [loading, setLoading] = useState(false);
	const [activeItem, setActiveItem] = useState(0);

	const clickMenuItemHandler = (index, e) => {
		e.preventDefault();
		setActiveItem(index);
	}

    useEffect(() => {
        const getAppsHandler = async (userId, eventId) => {
            setLoading(true);
            try {
                const { data } = await axios.get(process.env.REACT_APP_API_URL + '/apps/' + eventId);
                // set apps data
                setApps(data.apps);
                setLoading(false);
            }
            catch (e) {
                // if unauthorized
                if (e.response.status === 401) {
                    // shold be shown logout information modal
                    return;
                }
                console.log("Unexpected error: MainMenu:getAppsHandler", e);
            }
        }
        getAppsHandler(props.userId, props.eventId);
    }, [props.userId, props.eventId])

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
