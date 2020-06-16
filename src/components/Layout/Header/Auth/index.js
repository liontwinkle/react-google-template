import React from 'react';
import { useDispatch } from 'redux-react-hook';
import { Link } from 'react-router-dom';
import * as routes from '../../../../constants/routes';
import NavbarMenu from './NavbarMenu';
import NavbarRight from './NavbarRight';
import { Menu, ArrowLeft } from 'react-feather';
import classNames from 'classnames';

import { SET_MAIN_MENU_STATE, SET_NAVBAR_MENU_STATE } from '../../../../constants/action_types';

function AuthHeader(props) {
	const dispatch = useDispatch();

	const navbarMenuOpenHandler = (e) => {
		e.preventDefault();
		dispatch({
            type: SET_NAVBAR_MENU_STATE,
            isNavbarMenuOpened: true
        })
	}

	const mainMenuOpenHandler = (e) => {
		e.preventDefault();
		dispatch({
            type: SET_MAIN_MENU_STATE,
            isMainMenuOpened: true
        })
	}

	let navbarMenuOpenClasses = classNames({
		'burger-menu': true,
		'd-md-flex': true,
		'd-lg-none': true,
		'd-none': !props.isMainMenuOpened
    });

    let mainMenuOpenClasses = classNames({
    	'burger-menu': true,
		'd-md-none': true,
		'd-none': props.isMainMenuOpened
    });

	return (
		<>
			<header className="navbar navbar-header navbar-header-fixed">
				<a href="." id="navbarMenuOpen" onClick={navbarMenuOpenHandler} className={navbarMenuOpenClasses} isnavbarmenuopenclicked="true" ><Menu isnavbarmenuopenclicked="true" /></a>
				<a href="." id="mainMenuOpen" onClick={mainMenuOpenHandler} className={mainMenuOpenClasses}><ArrowLeft /></a>
				
	            <div className="navbar-brand">
	            	<Link className="df-logo" to={routes.HOME}>Command<span>Post</span></Link>
	            </div>
	            <NavbarMenu/>
	            <NavbarRight authUser={props.authUser} />
            </header>
		</>
	)
}

export default AuthHeader;
