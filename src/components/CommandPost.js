import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import { BrowserRouter } from 'react-router-dom';
import Routes from './pages/Routes';
import { connect } from 'react-redux';
import * as actions from '../store/actions/index';
import Header from './layout/Header';
import Footer from './layout/Footer';
import MainMenu from './layout/MainMenu';
import 'animate.css/animate.css';

class CommandPost extends Component {

  // Main App data storage
  state = {
    darkMode: false,
    isLoading: true,
    userLoggedIn: false,
    pagesAnimation: "animated fadeIn fast" //animate css class [https://github.com/daneden/animate.css]
  }

  // Document ready event
  componentDidMount() {
    // Apply theme at page loading
    const cookies = new Cookies();
    const isDarkMode = (cookies.get('df-mode') === 'true');
    this.setState({
      darkMode: isDarkMode,
      isLoading: false
    });

  }

  // Main App component redraw event
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
  }

  render() {
    let mainMenu = null;

    if ( this.props.isAuthenticated ) {
      mainMenu = (
        <MainMenu
            click={() => this.switchThemeHandler()}
            isDark={this.state.darkMode} />
      );
    }

    return (
      <BrowserRouter>
        <Header />
        <div className="main-wrapper">
          {mainMenu}
          <Routes pagesAnimation={this.state.pagesAnimation} isAuth={this.props.isAuthenticated} />
        </div>
        <Footer />
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch( actions.authCheckState() )
  };
};

export default connect( mapStateToProps, mapDispatchToProps )( CommandPost );
