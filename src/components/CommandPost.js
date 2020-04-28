import React, { Fragment, Component } from 'react';
import Cookies from "universal-cookie";
import Header from './layout/Header';
import Footer from './layout/Footer';
import MainMenu from './layout/MainMenu';

class CommandPost extends Component {

  state = {
    darkMode: false,
    isLoading: true,
    userLoggedIn: false
  }

  componentDidMount() {
    // Apply theme at page loading
    const cookies = new Cookies();
    const isDarkMode = (cookies.get('df-mode') === 'true');
    this.setState({ 
      darkMode: isDarkMode,
      isLoading: false 
    });
  }

  componentDidUpdate() {
    const head = document.head;
    const darkModeCSS = document.createElement('link');
    darkModeCSS.type = 'text/css';
    darkModeCSS.rel = 'stylesheet';
    darkModeCSS.id = 'dfMode';
    darkModeCSS.href = '/assets/css/commandpost.dark.css';

    if (this.state.darkMode) {
      head.appendChild(darkModeCSS);
    } else {
      const darkModeCSSExist = document.getElementById('dfMode');
      if (darkModeCSSExist) head.removeChild(darkModeCSSExist);
    }
  }

  switchThemeHandler = () => {
    // Switch mode button is clicked
    const cookies = new Cookies();
    const doesDarkMode = this.state.darkMode;

    this.setState({ darkMode: !doesDarkMode });
    cookies.set('df-mode', !doesDarkMode);

    console.log(cookies.get('df-mode'));
  }

  render() {
    return (
      <Fragment>
        <Header />
        <div className="main-wrapper">
          <MainMenu
            click={() => this.switchThemeHandler()}
            isDark={this.state.darkMode} />
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
