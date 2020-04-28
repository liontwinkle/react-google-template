import React, { Fragment, Component } from 'react';
import Header from './layout/Header';
import Footer from './layout/Footer';
import MainMenu from './layout/MainMenu';
import './assets/css/command.post.css';

class CommandPost extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <div className="main-wrapper">
          <MainMenu />
          <div id="sectionContainer">
            <p>Inner content</p>
          </div>
        </div>
        <Footer />
      </Fragment>
    );
  }
}

export default CommandPost;
