import React, { Component } from 'react';
import WidePane from '../../layout/WidePane';

class Settings extends Component {
  render() {
    return (
      <WidePane animateClass={this.props.animateClass}>
        Settings
      </WidePane>
    );
  }
};

export default Settings;