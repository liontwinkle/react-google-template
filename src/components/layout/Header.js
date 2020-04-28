// Header.js
import React, {Component} from 'react';

export default class Header extends Component {
    render(){
        return (
        <header className="navbar navbar-header navbar-header-fixed bd-b-0">
            <a href="." id="mainMenuOpen" className="burger-menu"><i data-feather="menu"></i></a>
            <div className="navbar-brand">
              <a href="../index.html" className="df-logo">dash<span>forge</span></a>
            </div>
            <div id="navbarMenu" className="navbar-menu-wrapper">
              <div className="navbar-menu-header">
                <a href="../index.html" className="df-logo">dash<span>forge</span></a>
                <a id="mainMenuClose" href="."><i data-feather="x"></i></a>
              </div>
              <ul className="nav navbar-menu">
                <li className="nav-label pd-l-15 pd-lg-l-25 d-lg-none">Main Navigation</li>
                <li className="nav-item with-sub">
                  <a href="." className="nav-link"><i data-feather="pie-chart"></i> Dashboard</a>
                  <ul className="navbar-menu-sub">
                    <li className="nav-sub-item"><a href="template/classic/dashboard-one.html" className="nav-sub-link"><i data-feather="bar-chart-2"></i>Sales Monitoring</a></li>
                    <li className="nav-sub-item"><a href="template/classic/dashboard-two.html" className="nav-sub-link"><i data-feather="bar-chart-2"></i>Website Analytics</a></li>
                    <li className="nav-sub-item"><a href="template/classic/dashboard-three.html" className="nav-sub-link"><i data-feather="bar-chart-2"></i>Cryptocurrency</a></li>
                    <li className="nav-sub-item"><a href="template/classic/dashboard-four.html" className="nav-sub-link"><i data-feather="bar-chart-2"></i>Helpdesk Management</a></li>
                  </ul>
                </li>
                <li className="nav-item with-sub">
                  <a href="." className="nav-link"><i data-feather="package"></i> Apps</a>
                  <ul className="navbar-menu-sub">
                    <li className="nav-sub-item"><a href="template/classic/app-calendar.html" className="nav-sub-link"><i data-feather="calendar"></i>Calendar</a></li>
                    <li className="nav-sub-item"><a href="template/classic/app-chat.html" className="nav-sub-link"><i data-feather="message-square"></i>Chat</a></li>
                    <li className="nav-sub-item"><a href="template/classic/app-contacts.html" className="nav-sub-link"><i data-feather="users"></i>Contacts</a></li>
                    <li className="nav-sub-item"><a href="template/classic/app-file-manager.html" className="nav-sub-link"><i data-feather="file-text"></i>File Manager</a></li>
                    <li className="nav-sub-item"><a href="template/classic/app-mail.html" className="nav-sub-link"><i data-feather="mail"></i>Mail</a></li>
                  </ul>
                </li>
                <li className="nav-item with-sub">
                  <a href="." className="nav-link"><i data-feather="layers"></i> Pages</a>
                  <div className="navbar-menu-sub">
                    <div className="d-lg-flex">
                      <ul>
                        <li className="nav-label">Authentication</li>
                        <li className="nav-sub-item"><a href="template/classic/page-signin.html" className="nav-sub-link"><i data-feather="log-in"></i> Sign In</a></li>
                        <li className="nav-sub-item"><a href="template/classic/page-signup.html" className="nav-sub-link"><i data-feather="user-plus"></i> Sign Up</a></li>
                        <li className="nav-sub-item"><a href="template/classic/page-verify.html" className="nav-sub-link"><i data-feather="user-check"></i> Verify Account</a></li>
                        <li className="nav-sub-item"><a href="template/classic/page-forgot.html" className="nav-sub-link"><i data-feather="shield-off"></i> Forgot Password</a></li>
                        <li className="nav-label mg-t-20">User Pages</li>
                        <li className="nav-sub-item"><a href="template/classic/page-profile-view.html" className="nav-sub-link"><i data-feather="user"></i> View Profile</a></li>
                        <li className="nav-sub-item"><a href="template/classic/page-connections.html" className="nav-sub-link"><i data-feather="user"></i> Connections</a></li>
                        <li className="nav-sub-item"><a href="template/classic/page-groups.html" className="nav-sub-link"><i data-feather="users"></i> Groups</a></li>
                        <li className="nav-sub-item"><a href="template/classic/page-events.html" className="nav-sub-link"><i data-feather="calendar"></i> Events</a></li>
                      </ul>
                      <ul>
                        <li className="nav-label">Error Pages</li>
                        <li className="nav-sub-item"><a href="template/classic/page-404.html" className="nav-sub-link"><i data-feather="file"></i> 404 Page Not Found</a></li>
                        <li className="nav-sub-item"><a href="template/classic/page-500.html" className="nav-sub-link"><i data-feather="file"></i> 500 Internal Server</a></li>
                        <li className="nav-sub-item"><a href="template/classic/page-503.html" className="nav-sub-link"><i data-feather="file"></i> 503 Service Unavailable</a></li>
                        <li className="nav-sub-item"><a href="template/classic/page-505.html" className="nav-sub-link"><i data-feather="file"></i> 505 Forbidden</a></li>
                        <li className="nav-label mg-t-20">Other Pages</li>
                        <li className="nav-sub-item"><a href="template/classic/page-timeline.html" className="nav-sub-link"><i data-feather="file-text"></i> Timeline</a></li>
                        <li className="nav-sub-item"><a href="template/classic/page-pricing.html" className="nav-sub-link"><i data-feather="file-text"></i> Pricing</a></li>
                        <li className="nav-sub-item"><a href="template/classic/page-help-center.html" className="nav-sub-link"><i data-feather="file-text"></i> Help Center</a></li>
                        <li className="nav-sub-item"><a href="template/classic/page-invoice.html" className="nav-sub-link"><i data-feather="file-text"></i> Invoice</a></li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="nav-item"><a href="components/" className="nav-link"><i data-feather="box"></i> Components</a></li>
                <li className="nav-item"><a href="collections/" className="nav-link"><i data-feather="archive"></i> Collections</a></li>
              </ul>
            </div>
            <div className="navbar-right">
              <a href="http://dribbble.com/themepixels" className="btn btn-social"><i className="fab fa-dribbble"></i></a>
              <a href="https://github.com/themepixels" className="btn btn-social"><i className="fab fa-github"></i></a>
              <a href="https://twitter.com/themepixels" className="btn btn-social"><i className="fab fa-twitter"></i></a>
              <a href="https://themeforest.net/item/dashforge-responsive-admin-dashboard-template/23725961" className="btn btn-buy"><i data-feather="shopping-bag"></i> <span>Buy Now</span></a>
            </div>
          </header>
        )
    }
}