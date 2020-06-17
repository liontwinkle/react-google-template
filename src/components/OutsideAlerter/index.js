import { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { setMainMenuState, setNavbarMenuState } from '../../redux/action/themeConfigs';
/**
 * Hook that detects clicks outside of the passed ref
 */
function useOutsideAlerter({
	ref,
	setMainMenuState,
	setNavbarMenuState
}) {
	useEffect(() => {
		/**
		* if clicked on outside of element
		*/
		function handleClickOutside(event) {
			if (ref.current && !ref.current.contains(event.target)) {
				// clicked outside of NavbarMenu component
				if (ref.current.id === "navbarMenu" && document.body.classList.contains('navbar-nav-show')) {
					setNavbarMenuState(false);
					setMainMenuState(false);
				}

				// clicked outside of MainMenu component
				if (ref.current.id === "mainMenu" && document.body.classList.contains('mail-sidebar-show') && !event.target.getAttribute('isnavbarmenuopenclicked') && !event.target.parentNode.getAttribute('isnavbarmenuopenclicked')) {
					setMainMenuState(false);
				}
			}
		}

		// Bind the event listener
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			// Unbind the event listener on clean up
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [ref, setMainMenuState, setNavbarMenuState]);
}


useOutsideAlerter.propTypes = {
	setMainMenuState: PropTypes.func.isRequired,
	setNavbarMenuState: PropTypes.func.isRequired,
	ref: PropTypes.object.isRequired,
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
	setMainMenuState,
	setNavbarMenuState
}, dispatch);

export default connect(
	null,
	mapDispatchToProps,
)(useOutsideAlerter);