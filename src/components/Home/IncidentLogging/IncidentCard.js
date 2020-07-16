import React from 'react';
import PropTypes from 'prop-types';

const IncidentCard = ({ children, title }) => (
  <div className="incident-card">
    <div className="incident-card-header">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-home"
        fill="none"
      >
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
      <span className="header-color">{ title }</span>
      <span className="incident-card-header-action">
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
          className="feather feather-corner-up-left"
        >
          <polyline points="9 14 4 9 9 4" />
          <path d="M20 20v-7a4 4 0 0 0-4-4H4" />
        </svg>
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
          className="feather feather-list"
        >
          <line x1="8" y1="6" x2="21" y2="6" />
          <line x1="8" y1="12" x2="21" y2="12" />
          <line x1="8" y1="18" x2="21" y2="18" />
          <line x1="3" y1="6" x2="3" y2="6" />
          <line x1="3" y1="12" x2="3" y2="12" />
          <line x1="3" y1="18" x2="3" y2="18" />
        </svg>
      </span>
    </div>
    <div className="incident-card-body p-1">
      {children}
    </div>
  </div>
);

IncidentCard.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
};

IncidentCard.defaultProps = {
  children: null,
  title: '',
};

export default IncidentCard;
