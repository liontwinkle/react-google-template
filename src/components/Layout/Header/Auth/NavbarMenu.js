import React, {useRef} from 'react';
import { X, Search } from 'react-feather';
import { Form, Button } from 'react-bootstrap';
import * as routes from '../../../../constants/routes';
import { Link } from 'react-router-dom';
import './NavbarMenu.css';
import useOutsideAlerter from '../../../OutsideAlerter';

function NavbarMenu(props) {

	const wrapperRef = useRef(null);
	useOutsideAlerter(wrapperRef);

	return (
		<>
			<div id="navbarMenu" className="navbar-menu-wrapper" ref={wrapperRef}>
				<div className="navbar-menu-header">
	            	<Link className="df-logo" to={routes.HOME}>Command<span>Post</span></Link>
					<a id="mainMenuClose" href="."><X className="feather-x"/></a>
				</div>
				<div id="headerSearch" className="d-flex">
					<div className="search-form mg-l-15">
						<Form.Control placeholder="Search" />
						<Button variant="search"><Search /></Button>
					</div>
				</div>
				<div id="sessionTimeoutMessage" className="m-auto d-none d-sm-block"></div>
			</div>
		</>
	)
}

export default NavbarMenu;
