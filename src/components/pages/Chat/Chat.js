import React, { Component } from 'react';
import WidePane from '../../layout/WidePane';

class Chat extends Component {
  render() {
    return (
      <WidePane animateClass={this.props.animateClass}>
        Chat
      </WidePane>
    );
  }
};

export default Chat;