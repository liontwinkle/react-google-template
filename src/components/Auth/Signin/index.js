import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'redux-react-hook';
import { withRouter } from 'react-router-dom';
import * as actions from '../../../constants/action_types';
import * as routes from '../../../constants/routes';

function Signin(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    const handleChange = setter => e => {
        setter(e.target.value);
    }

    const submit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const requestBody = {
                username: username,
                password: password
            };

            const { data } = await axios.post('http://localhost:4000/auth/signin', requestBody);

            if (data.error) {
                setError(data.message);
                setLoading(false);
            }
            else {
                setError(null);
                setLoading(false);
                
                dispatch({
                    type: actions.SET_AUTH_USER,
                    authUser: data
                })
                props.history.push(routes.HOME);
            }
        }
        catch (e) {
            setError(e.response.data.message);
            setLoading(false);
        }
    }

    
    return (
        <>
            <h1>Signin</h1>
            <div className="auth-form">
                <form onSubmit={submit}>
                    <input className="form-input" type="username" placeholder="Username" value={username} onChange={handleChange(setUsername)} />
                    <input className="form-input" type="password" placeholder="Password" onChange={handleChange(setPassword)} />

                    <div><span style={{ color: "red" }}>{error || ""}</span></div>

                    <input className="form-submit" type="submit" value={loading ? "Verifying..." : "Signin"} />
                </form>
            </div>
        </>
    )
    
/*
    return (
        <>
            <header className="navbar navbar-header navbar-header-fixed">
            <a href="#" id="mainMenuOpen" className="burger-menu"><i data-feather="menu"></i></a>
            <div className="navbar-brand">
            <a href="/" className="df-logo">Command<span>Post</span></a>
            </div>
            <div id="navbarMenu" className="navbar-menu-wrapper">
            <div className="navbar-menu-header">
              <a href="/" className="df-logo">Command<span>Post</span></a>
              <a id="mainMenuClose" href=""><i data-feather="x"></i></a>
            </div>
            <ul className="nav navbar-menu">
              <li className="nav-label pd-l-20 pd-lg-l-25 d-lg-none">Main Navigation</li>
              <li className="nav-item with-sub">
                <a href="" className="nav-link"><i data-feather="pie-chart"></i> Dashboard</a>
                <ul className="navbar-menu-sub">
                  <li className="nav-sub-item"><a href="dashboard-one.html" className="nav-sub-link"><i data-feather="bar-chart-2"></i>Sales Monitoring</a></li>
                  <li className="nav-sub-item"><a href="dashboard-two.html" className="nav-sub-link"><i data-feather="bar-chart-2"></i>Website Analytics</a></li>
                  <li className="nav-sub-item"><a href="dashboard-three.html" className="nav-sub-link"><i data-feather="bar-chart-2"></i>Cryptocurrency</a></li>
                  <li className="nav-sub-item"><a href="dashboard-four.html" className="nav-sub-link"><i data-feather="bar-chart-2"></i>Helpdesk Management</a></li>
                </ul>
              </li>
              <li className="nav-item with-sub">
                <a href="" className="nav-link"><i data-feather="package"></i> Apps</a>
                <ul className="navbar-menu-sub">
                  <li className="nav-sub-item"><a href="app-calendar.html" className="nav-sub-link"><i data-feather="calendar"></i>Calendar</a></li>
                  <li className="nav-sub-item"><a href="app-chat.html" className="nav-sub-link"><i data-feather="message-square"></i>Chat</a></li>
                  <li className="nav-sub-item"><a href="app-contacts.html" className="nav-sub-link"><i data-feather="users"></i>Contacts</a></li>
                  <li className="nav-sub-item"><a href="app-file-manager.html" className="nav-sub-link"><i data-feather="file-text"></i>File Manager</a></li>
                  <li className="nav-sub-item"><a href="app-mail.html" className="nav-sub-link"><i data-feather="mail"></i>Mail</a></li>
                </ul>
              </li>
              <li className="nav-item with-sub">
                <a href="" className="nav-link"><i data-feather="layers"></i> Pages</a>
                <div className="navbar-menu-sub">
                  <div className="d-lg-flex">
                    <ul>
                      <li className="nav-label">Authentication</li>
                      <li className="nav-sub-item"><a href="page-signin.html" className="nav-sub-link"><i data-feather="log-in"></i> Sign In</a></li>
                      <li className="nav-sub-item"><a href="page-signup.html" className="nav-sub-link"><i data-feather="user-plus"></i> Sign Up</a></li>
                      <li className="nav-sub-item"><a href="page-verify.html" className="nav-sub-link"><i data-feather="user-check"></i> Verify Account</a></li>
                      <li className="nav-sub-item"><a href="page-forgot.html" className="nav-sub-link"><i data-feather="shield-off"></i> Forgot Password</a></li>
                      <li className="nav-label mg-t-20">User Pages</li>
                      <li className="nav-sub-item"><a href="page-profile-view.html" className="nav-sub-link"><i data-feather="user"></i> View Profile</a></li>
                      <li className="nav-sub-item"><a href="page-connections.html" className="nav-sub-link"><i data-feather="users"></i> Connections</a></li>
                      <li className="nav-sub-item"><a href="page-groups.html" className="nav-sub-link"><i data-feather="users"></i> Groups</a></li>
                      <li className="nav-sub-item"><a href="page-events.html" className="nav-sub-link"><i data-feather="calendar"></i> Events</a></li>
                    </ul>
                    <ul>
                      <li className="nav-label">Error Pages</li>
                      <li className="nav-sub-item"><a href="page-404.html" className="nav-sub-link"><i data-feather="file"></i> 404 Page Not Found</a></li>
                      <li className="nav-sub-item"><a href="page-500.html" className="nav-sub-link"><i data-feather="file"></i> 500 Internal Server</a></li>
                      <li className="nav-sub-item"><a href="page-503.html" className="nav-sub-link"><i data-feather="file"></i> 503 Service Unavailable</a></li>
                      <li className="nav-sub-item"><a href="page-505.html" className="nav-sub-link"><i data-feather="file"></i> 505 Forbidden</a></li>
                      <li className="nav-label mg-t-20">Other Pages</li>
                      <li className="nav-sub-item"><a href="page-timeline.html" className="nav-sub-link"><i data-feather="file-text"></i> Timeline</a></li>
                      <li className="nav-sub-item"><a href="page-pricing.html" className="nav-sub-link"><i data-feather="file-text"></i> Pricing</a></li>
                      <li className="nav-sub-item"><a href="page-help-center.html" className="nav-sub-link"><i data-feather="file-text"></i> Help Center</a></li>
                      <li className="nav-sub-item"><a href="page-invoice.html" className="nav-sub-link"><i data-feather="file-text"></i> Invoice</a></li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="nav-item"><a href="../../components/" className="nav-link"><i data-feather="box"></i> Components</a></li>
              <li className="nav-item"><a href="../../collections/" className="nav-link"><i data-feather="archive"></i> Collections</a></li>
            </ul>
            </div>
            <div className="navbar-right">
            <a href="http://dribbble.com/themepixels" className="btn btn-social"><i className="fab fa-dribbble"></i></a>
            <a href="https://github.com/themepixels" className="btn btn-social"><i className="fab fa-github"></i></a>
            <a href="https://twitter.com/themepixels" className="btn btn-social"><i className="fab fa-twitter"></i></a>
            <a href="https://themeforest.net/item/azia-responsive-bootstrap-4-dashboard-template/22983790" className="btn btn-buy"><i data-feather="shopping-bag"></i> <span>Buy Now</span></a>
            </div>
            </header>

            <div className="content content-fixed content-auth">
            <div className="container">
            <div className="media align-items-stretch justify-content-center ht-100p pos-relative">
              <div className="sign-wrapper">
                <div className="wd-100p">
                  <h3 className="tx-color-01 mg-b-5">Sign In</h3>
                  <p className="tx-color-03 tx-16 mg-b-40">Welcome back! Please signin to continue.</p>

                  <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="yourname@yourmail.com" />
                  </div>
                  <div className="form-group">
                    <div className="d-flex justify-content-between mg-b-5">
                      <label className="mg-b-0-f">Password</label>
                      <a href="" className="tx-13">Forgot password?</a>
                    </div>
                    <input type="password" className="form-control" placeholder="Enter your password" />
                  </div>
                  <button className="btn btn-brand-02 btn-block">Sign In</button>
                  <div className="divider-text">or</div>
                  <button className="btn btn-outline-facebook btn-block">Sign In With Facebook</button>
                  <button className="btn btn-outline-twitter btn-block">Sign In With Twitter</button>
                  <div className="tx-13 mg-t-20 tx-center">Don't have an account? <a href="page-signup.html">Create an Account</a></div>
                </div>
              </div>
            </div>
            </div>
            </div>

            <footer className="footer">
            <div>
            <span>&copy; 2019 DashForge v1.0.0. </span>
            <span>Created by <a href="http://themepixels.me">ThemePixels</a></span>
            </div>
            <div>
            <nav className="nav">
              <a href="https://themeforest.net/licenses/standard" className="nav-link">Licenses</a>
              <a href="../../change-log.html" className="nav-link">Change Log</a>
              <a href="https://discordapp.com/invite/RYqkVuw" className="nav-link">Get Help</a>
            </nav>
            </div>
            </footer>
        </>
    ) */
}

export default withRouter(Signin);
