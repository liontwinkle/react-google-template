import React, { Component } from 'react';
import WidePane from '../../layout/WidePane';

class Dashboard extends Component {
  render() {
    return (
      <WidePane animateClass={this.props.animateClass}>
        Dashboard
      </WidePane>
    );
  }
};

export default Dashboard;