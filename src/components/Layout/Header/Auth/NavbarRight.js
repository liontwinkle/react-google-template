import React from 'react';
import Signout from '../../../Auth/Signout';

function NavbarRight(props) {
    return (
        <>
            <div className="navbar-right">
                <div className="dropdown dropdown-message">
                    <a href="" className="dropdown-link new-indicator" data-toggle="dropdown">
                        <i data-feather="message-square"/>
                        <span>5</span>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right">
                        <div className="dropdown-header">New Messages</div>
                        <a href="" className="dropdown-item">
                            <div className="media">
                                <div className="avatar avatar-sm avatar-online">
                                    <img
                                        src="https://via.placeholder.com/350" className="rounded-circle" alt=""/>
                                </div>
                                <div className="media-body mg-l-15">
                                    <strong>Socrates Itumay</strong>
                                    <p>nam libero tempore cum so...</p>
                                    <span>Mar 15 12:32pm</span>
                                </div>
                            </div>
                        </a>
                        <a href="" className="dropdown-item">
                            <div className="media">
                                <div className="avatar avatar-sm avatar-online"><img
                                    src="https://via.placeholder.com/500" className="rounded-circle" alt=""/>
                                </div>
                                <div className="media-body mg-l-15">
                                    <strong>Joyce Chua</strong>
                                    <p>on the other hand we denounce...</p>
                                    <span>Mar 13 04:16am</span>
                                </div>
                            </div>
                        </a>
                        <a href="" className="dropdown-item">
                            <div className="media">
                                <div className="avatar avatar-sm avatar-online"><img
                                    src="https://via.placeholder.com/600" className="rounded-circle" alt=""/>
                                </div>
                                <div className="media-body mg-l-15">
                                    <strong>Althea Cabardo</strong>
                                    <p>is there anyone who loves...</p>
                                    <span>Mar 13 02:56am</span>
                                </div>
                            </div>
                        </a>
                        <a href="" className="dropdown-item">
                            <div className="media">
                                <div className="avatar avatar-sm avatar-online"><img
                                    src="https://via.placeholder.com/500" className="rounded-circle" alt=""/>
                                </div>
                                <div className="media-body mg-l-15">
                                    <strong>Adrian Monino</strong>
                                    <p>duis aute irure dolor in repre...</p>
                                    <span>Mar 12 10:40pm</span>
                                </div>
                            </div>
                        </a>
                        <div className="dropdown-footer"><a href="">View all Messages</a></div>
                    </div>
                </div>
                <div className="dropdown dropdown-notification">
                    <a href="" className="dropdown-link new-indicator" data-toggle="dropdown">
                        <i data-feather="bell"/>
                        <span>2</span>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right">
                        <div className="dropdown-header">Notifications</div>
                        <a href="" className="dropdown-item">
                            <div className="media">
                                <div className="avatar avatar-sm avatar-online"><img
                                    src="https://via.placeholder.com/350" className="rounded-circle" alt=""/>
                                </div>
                                <div className="media-body mg-l-15">
                                    <p>Congratulate <strong>Socrates Itumay</strong> for work anniversaries</p>
                                    <span>Mar 15 12:32pm</span>
                                </div>
                            </div>
                        </a>
                        <a href="" className="dropdown-item">
                            <div className="media">
                                <div className="avatar avatar-sm avatar-online"><img
                                    src="https://via.placeholder.com/500" className="rounded-circle" alt=""/>
                                </div>
                                <div className="media-body mg-l-15">
                                    <p><strong>Joyce Chua</strong> just created a new blog post</p>
                                    <span>Mar 13 04:16am</span>
                                </div>
                            </div>
                        </a>
                        <a href="" className="dropdown-item">
                            <div className="media">
                                <div className="avatar avatar-sm avatar-online"><img
                                    src="https://via.placeholder.com/600" className="rounded-circle" alt=""/>
                                </div>
                                <div className="media-body mg-l-15">
                                    <p><strong>Althea Cabardo</strong> just created a new blog post</p>
                                    <span>Mar 13 02:56am</span>
                                </div>
                            </div>
                        </a>
                        <a href="" className="dropdown-item">
                            <div className="media">
                                <div className="avatar avatar-sm avatar-online"><img
                                    src="https://via.placeholder.com/500" className="rounded-circle" alt=""/>
                                </div>
                                <div className="media-body mg-l-15">
                                    <p><strong>Adrian Monino</strong> added new comment on your photo</p>
                                    <span>Mar 12 10:40pm</span>
                                </div>
                            </div>
                        </a>
                        <div className="dropdown-footer"><a href="">View all Notifications</a></div>
                    </div>
                </div>
                <div className="dropdown dropdown-profile">
                    <a href="" className="dropdown-link" data-toggle="dropdown" data-display="static">
                        <div className="avatar avatar-sm">
                            <img src="https://via.placeholder.com/500" className="rounded-circle" alt=""/>
                        </div>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right">
                        <div className="avatar avatar-lg mg-b-15">
                            <img src="https://via.placeholder.com/500" className="rounded-circle" alt=""/>
                        </div>
                        <h6 className="tx-semibold mg-b-5">{props.authUser.first_name} {props.authUser.last_name}</h6>
                        <p className="mg-b-25 tx-12 tx-color-03">{props.authUser.role}</p>
                        <div className="dropdown-divider"/>
                        <a href="https://ineedhelpers.com" className="dropdown-item"><i data-feather="help-circle"/> Help </a>
                        <a href="" className="dropdown-item"><i data-feather="settings"/>Settings</a>
                        <a href="" className="dropdown-item"><i data-feather="edit"/>Change Password</a>
                        <Signout isDropdownItem={true} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavbarRight;
