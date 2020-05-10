import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { Search, MessageSquare, Bell, Edit3, User, Menu, X, Edit, LogOut, HelpCircle, Settings } from 'react-feather';

class Header extends Component {

  // Document ready event
  componentDidMount() {

    // Mobile sidebar menu and side drawer opening
    ['click', 'touchstart'].forEach(function (e) {
      document.getElementById('mainSidebar').addEventListener(e, function (e) {
        e.preventDefault();

        // Displaying second and other columns
        if (window.matchMedia('(max-width: 767px)').matches) {
          [...document.getElementsByClassName('chat-columns')].forEach(
            (element) => {
              element.style.width = '';
              element.style.transform = '';
            }
          );
        }

        // Switch main menu sidebar visibility
        if (document.body.classList.contains('main-content-show')) {
          document.body.classList.remove('main-content-show');
        } else {
          if (document.body.classList.contains('main-sidebar-show')) {
            document.body.classList.remove('main-sidebar-show');
          } else document.body.classList.add('main-sidebar-show');
        }

        // Hide burger-menu button after switch to first column on desktop
        if (window.matchMedia('(min-width: 768px)').matches) {
          document.getElementById('mainSidebar').classList.add('d-md-none');
        }
      });
    });

    // Closing of sidebar menu when clicking outside of it
    ['click', 'touchstart'].forEach(function (e) {
      document.addEventListener(e, function (e) {
        e.stopPropagation();

        if (!e.target.closest('.burger-menu') && !e.target.closest('.main-sidebar')) {
          document.body.classList.remove('main-sidebar-show');
        }
      });
    });

  }

  render() {
    let searchBlock = null;
    let userBlock = null;

    if (this.props.isAuth) {
      searchBlock = (
        <div id="headerSearch" className="d-flex">
          <div className="search-form mg-l-15">
            <input type="search" className="form-control" placeholder="Search" />
            <button className="btn" type="button"><Search /></button>
          </div>
        </div>
      );

      userBlock = (
        <div className="navbar-right">
          <a href="dashforge.html" className="">Docs</a>
          <div className="dropdown dropdown-message">
            <a href="." className="dropdown-link new-indicator" data-toggle="dropdown">
              <MessageSquare />
              <span>5</span>
            </a>
            <div className="dropdown-menu dropdown-menu-right">
              <div className="dropdown-header">New Messages</div>
              <a href="." className="dropdown-item">
                <div className="media">
                  <div className="avatar avatar-sm avatar-online"><img src="https://via.placeholder.com/350"
                    className="rounded-circle" alt="" /></div>
                  <div className="media-body mg-l-15">
                    <strong>Socrates Itumay</strong>
                    <p>nam libero tempore cum so...</p>
                    <span>Mar 15 12:32pm</span>
                  </div>
                </div>
              </a>
              <a href="." className="dropdown-item">
                <div className="media">
                  <div className="avatar avatar-sm avatar-online"><img src="https://via.placeholder.com/500"
                    className="rounded-circle" alt="" /></div>
                  <div className="media-body mg-l-15">
                    <strong>Joyce Chua</strong>
                    <p>on the other hand we denounce...</p>
                    <span>Mar 13 04:16am</span>
                  </div>
                </div>
              </a>
              <a href="." className="dropdown-item">
                <div className="media">
                  <div className="avatar avatar-sm avatar-online"><img src="https://via.placeholder.com/600"
                    className="rounded-circle" alt="" /></div>
                  <div className="media-body mg-l-15">
                    <strong>Althea Cabardo</strong>
                    <p>is there anyone who loves...</p>
                    <span>Mar 13 02:56am</span>
                  </div>
                </div>
              </a>
              <a href="." className="dropdown-item">
                <div className="media">
                  <div className="avatar avatar-sm avatar-online"><img src="https://via.placeholder.com/500"
                    className="rounded-circle" alt="" /></div>
                  <div className="media-body mg-l-15">
                    <strong>Adrian Monino</strong>
                    <p>duis aute irure dolor in repre...</p>
                    <span>Mar 12 10:40pm</span>
                  </div>
                </div>
              </a>
              <div className="dropdown-footer"><a href=".">View all Messages</a></div>
            </div>
          </div>
          <div className="dropdown dropdown-notification">
            <a href="." className="dropdown-link new-indicator" data-toggle="dropdown">
              <Bell />
              <span>2</span>
            </a>
            <div className="dropdown-menu dropdown-menu-right">
              <div className="dropdown-header">Notifications</div>
              <a href="." className="dropdown-item">
                <div className="media">
                  <div className="avatar avatar-sm avatar-online"><img src="https://via.placeholder.com/350"
                    className="rounded-circle" alt="" /></div>
                  <div className="media-body mg-l-15">
                    <p>Congratulate <strong>Socrates Itumay</strong> for work anniversaries</p>
                    <span>Mar 15 12:32pm</span>
                  </div>
                </div>
              </a>
              <a href="." className="dropdown-item">
                <div className="media">
                  <div className="avatar avatar-sm avatar-online"><img src="https://via.placeholder.com/500"
                    className="rounded-circle" alt="" /></div>
                  <div className="media-body mg-l-15">
                    <p><strong>Joyce Chua</strong> just created a new blog post</p>
                    <span>Mar 13 04:16am</span>
                  </div>
                </div>
              </a>
              <a href="." className="dropdown-item">
                <div className="media">
                  <div className="avatar avatar-sm avatar-online"><img src="https://via.placeholder.com/600"
                    className="rounded-circle" alt="" /></div>
                  <div className="media-body mg-l-15">
                    <p><strong>Althea Cabardo</strong> just created a new blog post</p>
                    <span>Mar 13 02:56am</span>
                  </div>
                </div>
              </a>
              <a href="." className="dropdown-item">
                <div className="media">
                  <div className="avatar avatar-sm avatar-online"><img src="https://via.placeholder.com/500"
                    className="rounded-circle" alt="" /></div>
                  <div className="media-body mg-l-15">
                    <p><strong>Adrian Monino</strong> added new comment on your photo</p>
                    <span>Mar 12 10:40pm</span>
                  </div>
                </div>
              </a>
              <div className="dropdown-footer"><a href=".">View all Notifications</a></div>
            </div>
          </div>
          <div className="dropdown dropdown-profile">
            <a href="." className="dropdown-link" data-toggle="dropdown" data-display="static">
              <div className="avatar avatar-sm"><img src="https://via.placeholder.com/500" className="rounded-circle"
                alt="" /></div>
            </a>
            <div className="dropdown-menu dropdown-menu-right tx-13 user-menu">
              <div className="avatar avatar-lg mg-b-15"><img src="https://via.placeholder.com/500"
                className="rounded-circle" alt="" /></div>
              <h6 className="tx-semibold mg-b-5">{this.props.userData.user_first_name} {this.props.userData.user_last_name}</h6>
              <p className="mg-b-25 tx-12 tx-color-03">{this.props.userData.user_role}</p>

              <span className="dropdown-item d-none"><Edit3 /> Edit Profile</span>
              <span className="dropdown-item d-none"><User /> View Profile</span>
              <div className="dropdown-divider"></div>
              <a href="https://ineedhelpers.com/" className="dropdown-item"><HelpCircle /> Help</a>
              <NavLink
                exact
                to="/settings"
                activeClassName='active-dropdown'
                className="dropdown-item">
                <Settings /> Settings
              </NavLink>
              <a href="change-password.php" className="dropdown-item"><Edit /> Change Password</a>
              <NavLink
                exact
                to="/signout"
                activeClassName='active-dropdown'
                className="dropdown-item">
                <LogOut /> Sign Out
              </NavLink>
            </div>
          </div>
        </div>
      );
    }

    return (
      <header className="navbar navbar-header navbar-header-fixed">
        <a href="." id="mainSidebar" className="burger-menu d-md-none"><Menu /></a>
        <div className="navbar-brand">
          <NavLink
            exact
            to="/"
            activeClassName='active'>
            <span className="df-logo">Command<span>Post</span></span>
          </NavLink>
        </div>
        <div id="navbarMenu" className="navbar-menu-wrapper">
          <div className="navbar-menu-header">
            <NavLink
              exact
              to="/"
              activeClassName='active'>
              <span className="df-logo">Command<span>Post</span></span>
            </NavLink>
            <a id="mainMenuClose" href="."><X /></a>
          </div>
          {searchBlock}
          <div id="sessionTimeoutMessage" className="m-auto d-none d-sm-block"></div>
        </div>
        {userBlock}
      </header>
    )
  }
}

const mapStateToProps = state => {
  return {
      isAuthenticated: state.auth.token !== null,
      userData: state.auth.userData
  };
};

export default connect(mapStateToProps)(Header);