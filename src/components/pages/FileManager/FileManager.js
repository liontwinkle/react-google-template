import React, { Component } from 'react';
import WidePane from '../../layout/WidePane';

class FileManager extends Component {
  render() {
    return (
      <WidePane animateClass={this.props.animateClass}>
        FileManager
      </WidePane>
    );
  }
};

export default FileManager;