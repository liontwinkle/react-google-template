import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faQuestionCircle,
  faCog,
  faEdit,
} from '@fortawesome/pro-light-svg-icons';
import Signout from '../../../Auth/Signout';

function NavbarRight(props) {
  return (
    <>
      <div className="navbar-right">
        <a href="dashforge.html">Docs</a>
        <div className="dropdown dropdown-message">
          <a href="#dropdown" className="dropdown-link new-indicator" data-toggle="dropdown">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-message-square"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            <span>5</span>
          </a>
          <div className="dropdown-menu dropdown-menu-right">
            <div className="dropdown-header">New Messages</div>
            <a href="#dropdown" className="dropdown-item">
              <div className="media">
                <div className="avatar avatar-sm avatar-online">
                  <img
                    src="https://via.placeholder.com/350"
                    className="rounded-circle"
                    alt="avatar"
                  />
                </div>
                <div className="media-body mg-l-15">
                  <strong>Socrates Itumay</strong>
                  <p>nam libero tempore cum so...</p>
                  <span>Mar 15 12:32pm</span>
                </div>
              </div>
            </a>
            <a href="#dropdown" className="dropdown-item">
              <div className="media">
                <div className="avatar avatar-sm avatar-online">
                  <img
                    src="https://via.placeholder.com/500"
                    className="rounded-circle"
                    alt="avatar"
                  />
                </div>
                <div className="media-body mg-l-15">
                  <strong>Joyce Chua</strong>
                  <p>on the other hand we denounce...</p>
                  <span>Mar 13 04:16am</span>
                </div>
              </div>
            </a>
            <a href="#dropdown" className="dropdown-item">
              <div className="media">
                <div className="avatar avatar-sm avatar-online">
                  <img
                    src="https://via.placeholder.com/600"
                    className="rounded-circle"
                    alt=""
                  />
                </div>
                <div className="media-body mg-l-15">
                  <strong>Althea Cabardo</strong>
                  <p>is there anyone who loves...</p>
                  <span>Mar 13 02:56am</span>
                </div>
              </div>
            </a>
            <a href="#dropdown" className="dropdown-item">
              <div className="media">
                <div className="avatar avatar-sm avatar-online">
                  <img
                    src="https://via.placeholder.com/500"
                    className="rounded-circle"
                    alt="avatar"
                  />
                </div>
                <div className="media-body mg-l-15">
                  <strong>Adrian Monino</strong>
                  <p>duis aute irure dolor in repre...</p>
                  <span>Mar 12 10:40pm</span>
                </div>
              </div>
            </a>
            <div className="dropdown-footer"><a href="#">View all Messages</a></div>
          </div>
        </div>
        <div className="dropdown dropdown-notification">
          <a href="#dropdown" className="dropdown-link new-indicator" data-toggle="dropdown">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-bell"
            >
              <path
                d="M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3zm-8.27 4a2 2 0 0 1-3.46 0"
              />
            </svg>
            <span>2</span>
          </a>
          <div className="dropdown-menu dropdown-menu-right">
            <div className="dropdown-header">Notifications</div>
            <a href="#dropdown" className="dropdown-item">
              <div className="media">
                <div className="avatar avatar-sm avatar-online">
                  <img
                    src="https://via.placeholder.com/350"
                    className="rounded-circle"
                    alt="avatar"
                  />
                </div>
                <div className="media-body mg-l-15">
                  <p>
                    Congratulate
                    <strong>Socrates Itumay</strong>
                    {' '}
                    for work anniversaries
                  </p>
                  <span>Mar 15 12:32pm</span>
                </div>
              </div>
            </a>
            <a href="#dropdown" className="dropdown-item">
              <div className="media">
                <div className="avatar avatar-sm avatar-online">
                  <img
                    src="https://via.placeholder.com/500"
                    className="rounded-circle"
                    alt="avatar"
                  />
                </div>
                <div className="media-body mg-l-15">
                  <p>
                    <strong>Joyce Chua</strong>
                    {' '}
                    just created a new blog post
                  </p>
                  <span>Mar 13 04:16am</span>
                </div>
              </div>
            </a>
            <a href="#dropdown" className="dropdown-item">
              <div className="media">
                <div className="avatar avatar-sm avatar-online">
                  <img
                    src="https://via.placeholder.com/600"
                    className="rounded-circle"
                    alt="avatar"
                  />
                </div>
                <div className="media-body mg-l-15">
                  <p>
                    <strong>Althea Cabardo</strong>
                    {' '}
                    just created a new blog post
                  </p>
                  <span>Mar 13 02:56am</span>
                </div>
              </div>
            </a>
            <a href="#dropdown" className="dropdown-item">
              <div className="media">
                <div className="avatar avatar-sm avatar-online">
                  <img
                    src="https://via.placeholder.com/500"
                    className="rounded-circle"
                    alt="avatar"
                  />
                </div>
                <div className="media-body mg-l-15">
                  <p>
                    <strong>Adrian Monino</strong>
                    {' '}
                    added new comment on your photo
                  </p>
                  <span>Mar 12 10:40pm</span>
                </div>
              </div>
            </a>
            <div className="dropdown-footer"><a href="#">View all Notifications</a></div>
          </div>
        </div>
        <div className="dropdown dropdown-profile">
          <a href="#dropdown" className="dropdown-link" data-toggle="dropdown" data-display="static">
            <div className="avatar avatar-sm">
              <img src="https://via.placeholder.com/500" className="rounded-circle" alt="avatar" />
            </div>
          </a>
          <div className="dropdown-menu dropdown-menu-right">
            <div className="avatar avatar-lg mg-b-15">
              <img src="https://via.placeholder.com/500" className="rounded-circle" alt="avatar" />
            </div>
            <h6 className="tx-semibold mg-b-5">
              {props.authUser.first_name}
              {' '}
              {props.authUser.last_name}
            </h6>
            <p className="mg-b-25 tx-12 tx-color-03">{props.authUser.role}</p>
            <div className="dropdown-divider" />
            <a href="https://ineedhelpers.com" className="dropdown-item">
              <FontAwesomeIcon icon={faQuestionCircle} />
              {' '}
              Help
              {' '}
            </a>
            <a href="#dropdown" className="dropdown-item">
              <FontAwesomeIcon icon={faCog} />
              Settings
            </a>
            <a href="#dropdown" className="dropdown-item">
              <FontAwesomeIcon icon={faEdit} />
              Change Password
            </a>
            <Signout isDropdownItem />
          </div>
        </div>
      </div>
    </>
  );
}
NavbarRight.propTypes = {
  authUser: PropTypes.object,
};

NavbarRight.defaultProps = {
  authUser: null,
};

export default NavbarRight;
