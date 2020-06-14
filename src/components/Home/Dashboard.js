import React, { useState, useCallback, useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useMappedState } from 'redux-react-hook';
import * as actions from '../../constants/action_types';
import Loader from '../Loader';

function Dashboard() {

	const mapState = useCallback((state) => ({
		sessionData: state.sessionState.sessionData
	}), [])

	const { sessionData } = useMappedState(mapState);

	const dispatch = useDispatch();
    const [info, setInfo] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getInfoHandler = async () => {
            setLoading(true);
            try {
                const { data } = await axios.get(process.env.REACT_APP_API_URL + '/auth/info/' + sessionData.id_instance + '/' + sessionData.id_team + '/' + sessionData.id_event);
                // set instances data
                setInfo(data.info);
                setLoading(false);
            }
            catch (e) {
                // if unauthorized
                if (e.response.status === 401) {
                    // open session expiry modal
                    dispatch({ type: actions.SET_SESSION_EXPIRY_MODAL_STATE, isSessionExpiryModalOpened: true });
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
					<br/><strong>Instance: </strong> {info.instance_title} - {info.instance_shortname}  (ID: {sessionData.id_instance})
					<br/><strong>Team: </strong> {info.team_title} (ID: {sessionData.id_team})
					<br/><strong>User: </strong> {info.user_first_name} {info.user_last_name} ({info.user_role})
				</div>
			</div>
			<div className="mail-content"></div>
		</>
	)
}

export default Dashboard;
