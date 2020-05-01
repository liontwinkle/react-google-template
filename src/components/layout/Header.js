import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Header extends Component {

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
    return (
      <header className="navbar navbar-header navbar-header-fixed">
        <a href="." id="mainSidebar" className="burger-menu d-md-none"><i data-feather="menu"></i></a>
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
            <a id="mainMenuClose" href="."><i data-feather="x"></i></a>
          </div>
          <div id="headerSearch" className="d-flex">
            <div className="search-form mg-l-15">
              <input type="search" className="form-control" placeholder="Search" />
              <button className="btn" type="button"><i data-feather="search"></i></button>
            </div>
          </div>
          <div id="sessionTimeoutMessage" className="m-auto d-none d-sm-block"></div>
        </div>
        <div className="navbar-right">
          <a href="dashforge.html" className="">Docs</a>
          <div className="dropdown dropdown-message">
            <a href="." className="dropdown-link new-indicator" data-toggle="dropdown">
              <i data-feather="message-square"></i>
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
              <i data-feather="bell"></i>
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
              <h6 className="tx-semibold mg-b-5">User data</h6>
              <p className="mg-b-25 tx-12 tx-color-03">User data</p>

              <span className="dropdown-item d-none"><i data-feather="edit-3"></i> Edit Profile</span>
              <span className="dropdown-item d-none"><i data-feather="user"></i> View Profile</span>
              <div className="dropdown-divider"></div>
              <a href="https://ineedhelpers.com/" className="dropdown-item"><i data-feather="help-circle"></i> Help</a>
              <span className="change-section dropdown-item" data-section-name="settings"><i data-feather="settings"></i> Settings</span>
              <a href="change-password.php" className="dropdown-item"><i data-feather="edit"></i> Change Password</a>
              <a href="signout.php" className="dropdown-item"><i data-feather="log-out"></i> Sign Out</a>
            </div>
          </div>
        </div>
      </header>
    )
  }
}