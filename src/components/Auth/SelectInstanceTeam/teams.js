import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Spinner } from 'react-bootstrap';
import { AlertCircle } from 'react-feather';
import { useDispatch } from 'redux-react-hook';
import * as actions from '../../../constants/action_types';

function Teams(props) {
    const dispatch = useDispatch();
    const [teams, setTeams] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getTeamsHandler = async (idInstance, idEvent) => {
            setLoading(true);
            try {
                const { data } = await axios.get(process.env.REACT_APP_API_URL + '/auth/teams/' + idInstance + '/' + idEvent);
                // set teams data
                setTeams(data.teams);
                // set default value
                console.log('props.idTeam', props.idTeam);
                props.setValue("id_team", props.idTeam || "");
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
                console.log("Unexpected error: SelectTeam:getTeamsHandler", e);
            }
        }
        getTeamsHandler(props.idInstance, props.idEvent);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.idInstance, props.idEvent])

    return (
        <>
            <Form.Group controlId="id_team">
                {loading && <Spinner size="sm" animation="grow" />}
                <Form.Label>Team <span className="tx-danger">*</span></Form.Label>
                <Form.Control disabled={loading} onChange={props.changeTeamHandler} name="id_team" as="select" ref={props.register({ required: true })} className={(props.errors.id_team ? "parsley-error" : (props.formState.isSubmitted && props.formState.touched.id_team ? "parsley-success" : "")) + " custom-select " + (!props.idTeam ? " invalid" : "")}>
                    <option value="" disabled hidden className="invalid">Select Team</option>
                    {teams.map((team, index) => <option key={team.id} value={team.id}>{team.team_title}</option>)}
                </Form.Control>
                {props.errors.id_team && props.errors.id_team.type === "required" && (<div className="parsley-errors-list filled mt-1">This value is required.</div>)}
                <div className="alert alert-light d-flex align-items-center mt-2" role="alert">
                    <AlertCircle size={18} className="mg-r-10" /> If your team is not listed, please select 'N/A'
                </div>
            </Form.Group>
        </>
    )
}

export default Teams;
