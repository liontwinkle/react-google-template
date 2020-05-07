import React, { Component } from 'react';
import WidePane from '../../layout/WidePane';

class IntegratedMap extends Component {
  render() {
    return (
      <WidePane animateClass={this.props.animateClass}>
        IntegratedMap
      </WidePane>
    );
  }
};

export default IntegratedMap;