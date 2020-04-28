import './assets/css/command.post.css';
import React, { Component } from 'react';
import Header from './layout/Header';
import Content from './layout/Content';

class CommandPost extends Component {
  render() {
    return (
      // Return Header and Content components
      <div>
        <Header />
        <Content />
      </div>
    );
  }
}

export default CommandPost;
