import React, { Component } from 'react';
import WidePane from '../../layout/WidePane';

class TaskList extends Component {
  render() {
    return (
      <WidePane animateClass={this.props.animateClass}>
        TaskList
      </WidePane>
    );
  }
};

export default TaskList;