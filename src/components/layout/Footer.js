import React, { Component, Fragment } from 'react';

export default class Footer extends Component {
    render() {
        let signInFooter = null;

        if (!this.props.isAuth) {
            signInFooter = (
                <footer className="footer">
                    <div>
                        <span>&copy; 2020 I Need Helpers | All Rights Reserved </span>
                    </div>
                    <div>
                        <nav className="nav">
                            <a href="https://ineedhelpers.com/" className="nav-link" target="_blank" rel="noopener noreferrer">Get Help</a>
                        </nav>
                    </div>
                </footer>
            );
        }
        return (
            <Fragment>
                {signInFooter}

                <div id="modalsContainer">

                    <div className="modal fade" id="modalUsers" tabIndex="-1" role="dialog" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered" role="document">
                            <div className="modal-content">
                                <div className="modal-body pd-20 pd-sm-30">
                                    <h4 className="tx-18 tx-sm-20 mg-b-3">Share with another instance</h4>
                                    <p className="mg-b-20 tx-color-03">Display this log item within a different room for joint response</p>
                                    <a href="." role="button" className="close pos-absolute t-15 r-15" data-dismiss="modal"
                                        aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </a>

                                    <div className="bd">
                                        <div className="d-flex ht-45 pd-x-15 align-items-center bd-b">
                                            <input type="search" className="form-control bd-0 pd-0 shadow-none-f"
                                                placeholder="Active instances…" />
                                            <a href="." role="button" className="link-03"><i data-feather="search"
                                                className="wd-20 ht-20 stroke-wd-2-5"></i></a>
                                        </div>

                                        <ul className="list-unstyled media-list tx-12 tx-sm-13 mg-b-0">
                                            <li className="media bg-ui-01 pd-y-10 pd-x-15">
                                                <div className="avatar"><img src="https://via.placeholder.com/500" className="rounded-circle"
                                                    alt="" /></div>
                                                <div className="media-body mg-l-15">
                                                    <h6 className="tx-13 mg-b-2">Ambulance Operations Centre (AOC)</h6>
                                                    <span className="d-block tx-color-03">29x active users</span>
                                                </div>
                                                <a href="." className="btn btn-white rounded-circle btn-icon mg-l-15"><i
                                                    data-feather="plus"></i></a>
                                            </li>
                                            <li className="media bg-ui-01 pd-y-10 pd-x-15 mg-t-1">
                                                <div className="avatar"><img src="https://via.placeholder.com/500" className="rounded-circle"
                                                    alt="" /></div>
                                                <div className="media-body mg-l-15">
                                                    <h6 className="tx-13 mg-b-2">Police Operation Centre (POC)</h6>
                                                    <span className="d-block tx-color-03">29x active users</span>
                                                </div>
                                                <a href="." className="btn btn-white rounded-circle btn-icon mg-l-15"><i
                                                    data-feather="plus"></i></a>
                                            </li>
                                            <li className="media bg-ui-01 pd-y-10 pd-x-15 mg-t-1">
                                                <div className="avatar"><img src="https://via.placeholder.com/500" className="rounded-circle"
                                                    alt="" /></div>
                                                <div className="media-body mg-l-15">
                                                    <h6 className="tx-13 mg-b-2">Government Coordination Centre (GCC)</h6>
                                                    <span className="d-block tx-color-03">29x active users</span>
                                                </div>
                                                <a href="." className="btn btn-white rounded-circle btn-icon mg-l-15"><i
                                                    data-feather="plus"></i></a>
                                            </li>
                                            <li className="media bg-ui-01 pd-y-10 pd-x-15 mg-t-1">
                                                <div className="avatar"><img src="https://via.placeholder.com/500" className="rounded-circle"
                                                    alt="" /></div>
                                                <div className="media-body mg-l-15">
                                                    <h6 className="tx-13 mg-b-2">Event Control Centre (ECC)</h6>
                                                    <span className="d-block tx-color-03">29x active users</span>
                                                </div>
                                                <a href="." className="btn btn-white rounded-circle btn-icon mg-l-15"><i
                                                    data-feather="plus"></i></a>
                                            </li>
                                            <li className="media bg-ui-01 pd-y-10 pd-x-15 mg-t-1">
                                                <div className="avatar"><img src="https://via.placeholder.com/500" className="rounded-circle"
                                                    alt="" /></div>
                                                <div className="media-body mg-l-15">
                                                    <h6 className="tx-13 mg-b-2">Security Operations Centre (SOC)</h6>
                                                    <span className="d-block tx-color-03">29x active users</span>
                                                </div>
                                                <a href="." className="btn btn-white rounded-circle btn-icon mg-l-15"><i
                                                    data-feather="plus"></i></a>
                                            </li>
                                            <li className="media bg-ui-01 pd-y-10 pd-x-15 mg-t-1">
                                                <div className="avatar"><img src="https://via.placeholder.com/500" className="rounded-circle"
                                                    alt="" /></div>
                                                <div className="media-body mg-l-15">
                                                    <h6 className="tx-13 mg-b-2">Event Operations Centre (EOC)</h6>
                                                    <span className="d-block tx-color-03">29x active users</span>
                                                </div>
                                                <a href="." className="btn btn-white rounded-circle btn-icon mg-l-15"><i
                                                    data-feather="plus"></i></a>
                                            </li>
                                            <li className="media bg-ui-01 pd-y-10 pd-x-15 mg-t-1">
                                                <div className="avatar"><img src="https://via.placeholder.com/500" className="rounded-circle"
                                                    alt="" /></div>
                                                <div className="media-body mg-l-15">
                                                    <h6 className="tx-13 mg-b-2">Volunteer Operations Centre (VOC)</h6>
                                                    <span className="d-block tx-color-03">29x active users</span>
                                                </div>
                                                <a href="." className="btn btn-white rounded-circle btn-icon mg-l-15"><i
                                                    data-feather="plus"></i></a>
                                            </li>
                                            <li className="media bg-ui-01 pd-y-10 pd-x-15 mg-t-1">
                                                <div className="avatar"><img src="https://via.placeholder.com/500" className="rounded-circle"
                                                    alt="" /></div>
                                                <div className="media-body mg-l-15">
                                                    <h6 className="tx-13 mg-b-2">Traffic Management Centre (TMC)</h6>
                                                    <span className="d-block tx-color-03">29x active users</span>
                                                </div>
                                                <a href="." className="btn btn-white rounded-circle btn-icon mg-l-15"><i
                                                    data-feather="plus"></i></a>
                                            </li>
                                            <li className="media bg-ui-01 pd-y-10 pd-x-15 mg-t-1">
                                                <div className="avatar"><img src="https://via.placeholder.com/500" className="rounded-circle"
                                                    alt="" /></div>
                                                <div className="media-body mg-l-15">
                                                    <h6 className="tx-13 mg-b-2">Joint Operations Centre (JOC)</h6>
                                                    <span className="d-block tx-color-03">29x active users</span>
                                                </div>
                                                <a href="." className="btn btn-white rounded-circle btn-icon mg-l-15"><i
                                                    data-feather="plus"></i></a>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="d-flex justify-content-end mg-t-30">
                                        <button type="button" className="btn btn-white" data-dismiss="modal">Cancel</button>
                                        <button type="button" className="btn btn-primary mg-l-5">Save Changes</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="modal fade" id="sessionTimeoutModal" tabIndex="-1" role="dialog" aria-labelledby="sessionTimeoutModalTitle" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="sessionTimeoutModalTitle">Please Sign In again</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <p>To keep your work secure, your CommandPost session has finished. To log back in, please refresh your browser, or hit Log In below.</p>
                                    <p>If you were in the middle of typing something, please close this message, copy the text, and then refresh.</p>
                                    <p>We apologize for interrupting your flow. Thanks for helping us keep CommandPost secure!</p>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <a href="signin.php" className="btn btn-primary">Sign In</a>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="modal fade" id="createNewTaskModal" tabIndex="-1" role="dialog" aria-labelledby="createNewTaskModalTitle" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="createNewTaskModalTitle">Create new task</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body part-task-details">
                                    <p>Task Details here</p>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <a href="." className="btn btn-primary">Create</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </Fragment>
        )
    }
}