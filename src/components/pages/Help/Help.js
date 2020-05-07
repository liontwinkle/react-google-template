import React, { Component } from 'react';
import WidePane from '../../layout/WidePane';

class Help extends Component {
  render() {
    return (
      <WidePane animateClass={this.props.animateClass}>
        Help
      </WidePane>
    );
  }
};

export default Help;