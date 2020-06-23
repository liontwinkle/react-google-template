import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import axios from 'axios';
import Loader from '../Loader';
import './style.scss';

import { setSessionExpiryModalState } from '../../redux/action/themeConfigs';
import { resetSessionData } from '../../redux/action/session';

import TaskBar from '../common/TaskBar';

function Dashboard({
    setSessionExpiryModalState,
    sessionData,
    resetSessionData
}) {
    const [info, setInfo] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getInfoHandler = async () => {
            setLoading(true);
            try {
                const { data } = await axios.get(process.env.REACT_APP_API + '/auth/info/' + sessionData.id_instance + '/' + sessionData.id_team + '/' + sessionData.id_event);
                // set instances data
                setInfo(data.info);
                setLoading(false);
            }
            catch (e) {
                // if unauthorized
                if (e.response.status !== 400) {
                    // open session expiry modal
                    setSessionExpiryModalState(true);
                    setLoading(false);
                    return;
                }
                console.log("Unexpected error: Dashboard:getInfoHandler", e);
            }
        }
        getInfoHandler();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if (loading) return <Loader />

    return (
        <>
            <div className="mail-group">
                <div className="alert alert-secondary m-3" role="alert">
                    <strong>Event: </strong> {info.event_title} (ID: {sessionData.id_event} )
					<br /><strong>Instance: </strong> {info.instance_title} - {info.instance_shortname}  (ID: {sessionData.id_instance})
					<br /><strong>Team: </strong> {info.team_title} (ID: {sessionData.id_team})
					<br /><strong>User: </strong> {info.user_first_name} {info.user_last_name} ({info.user_role})
				</div>
            </div>
            <div className="mail-content">
                <div class="mail-content__footer">
                    <TaskBar />
                </div>
            </div>
        </>
    )
}

Dashboard.propTypes = {
    setSessionExpiryModalState: PropTypes.func.isRequired,
    resetSessionData: PropTypes.func.isRequired,
    sessionData: PropTypes.object.isRequired,
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    setSessionExpiryModalState,
    resetSessionData,
}, dispatch);

const mapStateToProps = (store) => ({
    sessionData: store.sessionData.sessionData,
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Dashboard);
