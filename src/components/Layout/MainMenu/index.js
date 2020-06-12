import React, {useState, useRef} from 'react';
import { Star, AlertCircle, Trello, MessageSquare, Phone, List, FileText, Map, MapPin, Truck, Book, HelpCircle, Settings } from 'react-feather';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';
import useOutsideAlerter from '../../OutsideAlerter';
import Scrollbar from 'perfect-scrollbar-react';

function MainMenu() {
	const wrapperRef = useRef(null);
	useOutsideAlerter(wrapperRef);
	const [activeItem, setActiveItem] = useState(0);

	const clickMenuItemHandler = (index, e) => {
		e.preventDefault();
		setActiveItem(index);
	}

	const menuItems = [
		{ title: 'Dashboard', icon: Star },
		{ title: 'Incident Logging', icon: AlertCircle },
		{ title: 'Program / Activations & Areas', icon: Trello },
		{ title: 'Chat', icon: MessageSquare },
		{ title: 'Contact List', icon: Phone },
		{ title: 'Task List', icon: List },
		{ title: 'File Manager', icon: FileText },
		{ title: 'Integrated Map', icon: Map },
		{ title: 'Resource Positioning', icon: MapPin },
		{ title: 'Fleet Management', icon: Truck },
		{ title: 'Procedures', icon: Book },
		{ title: 'Help', icon: HelpCircle }, 
		{ title: 'Settings', icon: Settings }
	];

	return (
		<>
			<div className="mail-sidebar" ref={wrapperRef} id="mainMenu">
				<div className="mail-sidebar-body">
					<Scrollbar>
						<div className="pd-y-15">
							<nav className="nav nav-sidebar tx-13">
								{menuItems.map((menuItem, index) => (
									<OverlayTrigger
								        key={index}
								        placement="right"
								        overlay={
								          <Tooltip id={"tooltip-" + index}>
								            {menuItem.title}
								          </Tooltip>
								        }
							      	>
										<a href="." onClick={(e) => clickMenuItemHandler(index, e)} className={activeItem === index ? 'nav-link active' : 'nav-link'}><menuItem.icon /></a>
									</OverlayTrigger>
								))}
							</nav>
						</div>
					</Scrollbar>
				</div>
			</div>
		</>
	)
}

export default MainMenu;
