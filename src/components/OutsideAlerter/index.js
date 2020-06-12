import { useEffect } from 'react';
import { useDispatch } from 'redux-react-hook';
import { SET_MAIN_MENU_STATE, SET_NAVBAR_MENU_STATE } from '../../constants/action_types';

/**
 * Hook that detects clicks outside of the passed ref
 */
function useOutsideAlerter(ref) {
	const dispatch = useDispatch();
	useEffect(() => {
		/**
		* if clicked on outside of element
		*/
		function handleClickOutside(event) {
			if (ref.current && !ref.current.contains(event.target)) {
				// clicked outside of NavbarMenu component
				if (ref.current.id === "navbarMenu" && document.body.classList.contains('navbar-nav-show')) {
					dispatch({
		                type: SET_NAVBAR_MENU_STATE,
		                isNavbarMenuOpened: false
		            })
		            dispatch({
		                type: SET_MAIN_MENU_STATE,
		                isMainMenuOpened: false
		            })
				}

				// clicked outside of MainMenu component
				if (ref.current.id === "mainMenu" && document.body.classList.contains('mail-sidebar-show') && !event.target.getAttribute('isnavbarmenuopenclicked') && !event.target.parentNode.getAttribute('isnavbarmenuopenclicked')) {
					dispatch({
		                type: SET_MAIN_MENU_STATE,
		                isMainMenuOpened: false
		            })
				}
			}
		}

		// Bind the event listener
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			// Unbind the event listener on clean up
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [ref, dispatch]);
}

export default useOutsideAlerter;
