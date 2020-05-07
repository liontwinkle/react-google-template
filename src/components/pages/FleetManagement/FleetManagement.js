import React, { Component } from 'react';
import WidePane from '../../layout/WidePane';
import fleetBackground from './assets/img/fleet_management_background.gif';

class FleetManagement extends Component {
  render() {
    return (
      <WidePane animateClass={this.props.animateClass}>
        <img src={fleetBackground} style={{ minHeight: "100%", minWidth: "100%", maxWidth: "1600px"}} alt="FleetManagement" />
      </WidePane>
    );
  }
};

export default FleetManagement;