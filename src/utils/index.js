import React from 'react';
import {
    faSirenOn,
    faFlagCheckered
} from "@fortawesome/pro-solid-svg-icons";

import {
    faTicketAlt,
    faShip,
    faHandSparkles,
    faOutlet,
    faSubway,
} from "@fortawesome/pro-light-svg-icons";

import {
    faAmbulance,
    faChild,
    faCctv,
    faRam,
    faTools,
    faPlaneDeparture,
} from "@fortawesome/pro-regular-svg-icons"
import {
    faFireAlt,
    faBurgerSoda
} from "@fortawesome/pro-duotone-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const getToolbarIcon = (str) => {
    switch (str) {
        case 'fas fa-siren-on':
            return <FontAwesomeIcon icon={faSirenOn} className="action-icon-font" color='#8392a5' />;
        case 'fad fa-fire-alt':
            return <FontAwesomeIcon icon={faFireAlt} className="action-icon-font" color='#8392a5' />;
        case 'far fa-ambulance':
            return <FontAwesomeIcon icon={faAmbulance} className="action-icon-font" color='#8392a5' />;
        case 'far fa-child':
            return <FontAwesomeIcon icon={faChild} className="action-icon-font" color='#8392a5' />;
        case 'far fa-cctv':
            return <FontAwesomeIcon icon={faCctv} className="action-icon-font" color='#8392a5' />;
        case 'fas fa-flag-checkered':
            return <FontAwesomeIcon icon={faFlagCheckered} className="action-icon-font" color='#8392a5' />;
        case 'fal fa-ticket-alt':
            return <FontAwesomeIcon icon={faTicketAlt} className="action-icon-font" color='#8392a5' />;
        case 'fad fa-burger-soda':
            return <FontAwesomeIcon icon={faBurgerSoda} className="action-icon-font" color='#8392a5' />;
        case 'far fa-ram':
            return <FontAwesomeIcon icon={faRam} className="action-icon-font" color='#8392a5' />;
        case 'fal fa-ship':
            return <FontAwesomeIcon icon={faShip} className="action-icon-font" color='#8392a5' />;
        case 'fal fa-hand-sparkles':
            return <FontAwesomeIcon icon={faHandSparkles} className="action-icon-font" color='#8392a5' />;
        case 'fal fa-outlet':
            return <FontAwesomeIcon icon={faOutlet} className="action-icon-font" color='#8392a5' />;
        case 'fal fa-subway':
            return <FontAwesomeIcon icon={faSubway} className="action-icon-font" color='#8392a5' />;
        case 'far fa-tools':
            return <FontAwesomeIcon icon={faTools} className="action-icon-font" color='#8392a5' />;
        case 'far fa-plane-departure':
            return <FontAwesomeIcon icon={faPlaneDeparture} className="action-icon-font" color='#8392a5' />;
        default:
            return null;
    }
};

export const convertStringToKey = (str) => {
    let temp = str.replace(/\/|\+/g, "").toLowerCase();
    let stringArray = temp.split(' ');
    return stringArray.join('_');
};