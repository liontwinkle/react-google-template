import React from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../../../constants/routes';

function NonAuthHeader() {
	return (
		<>
			<header className="navbar navbar-header navbar-header-fixed">
	            <div className="navbar-brand">
	            	<Link className="df-logo" to={routes.HOME}>Command<span>Post</span></Link>
	            </div>
            </header>
		</>
	)
}

export default NonAuthHeader;
