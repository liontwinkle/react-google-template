import React, { Component } from 'react';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Content from './layout/Content';
import './assets/css/command.post.css';

class CommandPost extends Component {
  render() {
    return (
      // Return Header and Content components
      <div>
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default CommandPost;
