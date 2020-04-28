import './assets/css/command.post.css';
import React, { Component } from 'react';
import Header from './components/Header';
import Content from './components/Content';

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
