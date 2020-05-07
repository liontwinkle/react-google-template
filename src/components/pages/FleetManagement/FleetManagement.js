import React from 'react';
import fleetBackground from './assets/img/fleet_management_background.gif';

const FleetManagement = (props) => (
  <div className={`main-group wide-group ${props.animateClass}`}>
    <img src={fleetBackground} style={{ minHeight: "100%", minWidth: "100%", maxWidth: "1600px"}} alt="FleetManagement" />
  </div>
);

export default FleetManagement;