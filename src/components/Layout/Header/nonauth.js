import React from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../../../constants/routes';
import { Menu } from 'react-feather';

function NonAuthHeader() {
	return (
		<>
			<header className="navbar navbar-header navbar-header-fixed">
	            <a href="." id="mainMenuOpen" className="burger-menu"><Menu /></a>
	            <div className="navbar-brand">
	            	<Link className="df-logo" to={routes.HOME}>Command<span>Post</span></Link>
	            </div>
            </header>
		</>
	)
}

export default NonAuthHeader;
