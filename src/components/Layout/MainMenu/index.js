import React, { useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as Icon from 'react-feather';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';
import axios from 'axios';
import Scrollbar from 'perfect-scrollbar-react';

import {
  setSessionExpiryModalState,
  setMainMenuState,
  setNavbarMenuState,
} from '../../../redux/action/themeConfigs';

import { setAuthUser } from '../../../redux/action/session';
import { setViewIndex } from '../../../redux/action/dashboard';

function MainMenu({
  apps,
  viewIndex,
  setAuthUser,
  setViewIndex,
  setMainMenuState,
  setNavbarMenuState,
  setSessionExpiryModalState,
}) {
  const wrapperRef = useRef(null);

  const clickMenuItemHandler = async (index, e) => {
    e.preventDefault();
    // check session
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_API}/auth/verifyToken`);

      if (data) {
        setViewIndex(index);
        setAuthUser(data);
      } else {
        // open session expiry modal
        setSessionExpiryModalState(true);
      }
    } catch {
      // open session expiry modal
      setSessionExpiryModalState(true);
    }
    // end of check session
  };

  useEffect(() => {
    /**
		* if clicked on outside of element
		*/
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        // clicked outside of NavbarMenu component
        if (wrapperRef.current.id === 'navbarMenu'
					&& document.body.classList.contains('navbar-nav-show')
        ) {
          setNavbarMenuState(false);
          setMainMenuState(false);
        }

        // clicked outside of MainMenu component
        if (wrapperRef.current.id === 'mainMenu'
					&& document.body.classList.contains('mail-sidebar-show')
					&& !event.target.getAttribute('isnavbarmenuopenclicked')
					&& !event.target.parentNode.getAttribute('isnavbarmenuopenclicked')
        ) {
          setMainMenuState(false);
        }
      }
    }

    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [wrapperRef, setMainMenuState, setNavbarMenuState, setSessionExpiryModalState, setAuthUser]);

  return (
    <>
      <div className="mail-sidebar" ref={wrapperRef} id="mainMenu">
        <div className="mail-sidebar-body">
          <Scrollbar>
            <div className="pd-y-15">
              <nav className="nav nav-sidebar tx-13">
                {apps.map((app) => {
                  const AppIcon = Icon[app.app_icon];
                  return (
                    <OverlayTrigger
                      key={app.id_app}
                      placement="right"
                      overlay={(
                        <Tooltip id={`tooltip-${app.id_app}`}>
                          {app.application_title}
                        </Tooltip>
                      )}
                    >
                      <a
                        href="#dropdown"
                        onClick={(e) => clickMenuItemHandler(app.id_app, e)}
                        className={viewIndex === app.id_app ? 'nav-link active' : 'nav-link'}
                      >
                        <AppIcon />
                      </a>
                    </OverlayTrigger>
                  );
                })}
              </nav>
            </div>
          </Scrollbar>
        </div>
      </div>
    </>
  );
}

MainMenu.propTypes = {
  apps: PropTypes.array,
  viewIndex: PropTypes.number,
  setAuthUser: PropTypes.func.isRequired,
  setViewIndex: PropTypes.func.isRequired,
  setMainMenuState: PropTypes.func.isRequired,
  setNavbarMenuState: PropTypes.func.isRequired,
  setSessionExpiryModalState: PropTypes.func.isRequired,
};

MainMenu.defaultProps = {
  apps: [],
  viewIndex: null,
};

const mapStateToProps = (store) => ({
  viewIndex: store.dashboardData.viewIndex,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  setAuthUser,
  setViewIndex,
  setMainMenuState,
  setNavbarMenuState,
  setSessionExpiryModalState,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainMenu);
