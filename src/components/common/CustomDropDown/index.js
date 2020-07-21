import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronDown,
  faUserPlus,
  faPlusSquare,
  faServer,
  faBell,
  faBolt,
  faEdit,
} from '@fortawesome/pro-regular-svg-icons';

import './style.scss';

const CustomDropDown = () => (
  <div className="incident-sidebar-header">
    <a href="#dropdown" data-toggle="dropdown" className="dropdown-link">
      <div className="d-flex align-items-center">
        <div className="avatar avatar-sm mg-r-8">
          <span className="avatar-initial rounded-circle">T</span>
        </div>
        <span className="tx-color-01 tx-semibold">TeamName</span>
      </div>
      <span><FontAwesomeIcon icon={faChevronDown} /></span>
    </a>
    <div className="dropdown-menu dropdown-menu-right">
      <a href="#dropdown" className="dropdown-item">
        <FontAwesomeIcon icon={faUserPlus} />
        {' '}
        Invite People
      </a>
      <a href="#dropdown" className="dropdown-item">
        <FontAwesomeIcon icon={faPlusSquare} />
        {' '}
        Create Channel
      </a>
      <a href="#dropdown" className="dropdown-item">
        <FontAwesomeIcon icon={faServer} />
        {' '}
        Server Settings
      </a>
      <a href="#dropdown" className="dropdown-item">
        <FontAwesomeIcon icon={faBell} />
        {' '}
        Notification Settings
      </a>
      <a href="#dropdown" className="dropdown-item">
        <FontAwesomeIcon icon={faBolt} />
        {' '}
        Privacy Settings
      </a>
      <div className="dropdown-divider" />
      <a href="#dropdown" className="dropdown-item">
        <FontAwesomeIcon icon={faEdit} />
        {' '}
        Edit Team Details
      </a>
      <a href="#dropdown" className="dropdown-item">
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
          className="feather feather-shield-off"
        >
          <path d="M19.69 14a6.9 6.9 0 0 0 .31-2V5l-8-3-3.16 1.18" />
          <path d="M4.73 4.73L4 5v7c0 6 8 10 8 10a20.29 20.29 0 0 0 5.62-4.38" />
          <line x1="1" y1="1" x2="23" y2="23" />
        </svg>
        Hide Muted Channels
      </a>
    </div>
  </div>
);

export default CustomDropDown;
