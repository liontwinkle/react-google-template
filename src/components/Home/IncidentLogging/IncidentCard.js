import React from 'react';
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faReply, faBars } from "@fortawesome/free-solid-svg-icons";
const IncidentCard = ({children, title}) => {
    return (
        <div className="incident-card">
            <div className="incident-card-header">
                <FontAwesomeIcon icon={faHome} />
                <span>{ title }</span>
                <span className="incident-card-header-action">
                    <FontAwesomeIcon icon={faReply} />
                    <FontAwesomeIcon icon={faBars} />
                </span>
            </div>
            <div className="incident-card-body">
                {children}
            </div>
        </div>
    )
};

IncidentCard.propTypes = {
    children: PropTypes.node,
};

IncidentCard.defaultProps = {
    children: null
};

export default IncidentCard;