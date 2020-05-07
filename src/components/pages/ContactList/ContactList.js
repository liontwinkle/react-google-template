import React, { Component } from 'react';
import WidePane from '../../layout/WidePane';

class ContactList extends Component {
  render() {
    return (
      <WidePane animateClass={this.props.animateClass}>
        ContactList
      </WidePane>
    );
  }
};

export default ContactList;