import React, { Component } from 'react';
import WidePane from '../../layout/WidePane';

class Procedures extends Component {
  render() {
    return (
      <WidePane animateClass={this.props.animateClass}>
        Procedures
      </WidePane>
    );
  }
};

export default Procedures;