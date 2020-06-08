import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form } from 'react-bootstrap';
import { AlertCircle } from 'react-feather';

function Teams(props) {
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        const getTeamsHandler = async (idInstance, idEvent) => {
            try {
                const { data } = await axios.get(process.env.REACT_APP_API_URL + '/auth/teams/' + idInstance + '/' + idEvent);
                // set teams data
                setTeams(data.teams);
            }
            catch (e) {
                // if unauthorized
                if (e.response.status === 401) {
                    // redirect to SIGNIN route
                    return;
                }
                console.log("Unexpected error: SelectTeam:getTeamsHandler", e);
            }
        }
        getTeamsHandler(props.idInstance, props.idEvent);
    }, [props.idInstance, props.idEvent])

    return (
        <>
            <Form.Group controlId="id_team">
                <Form.Label>Team <span className="tx-danger">*</span></Form.Label>
                <Form.Control onChange={props.changeTeamHandler} value={props.idTeam || ""} name="id_team" as="select" ref={props.register({ required: true })} className={(props.errors.id_team ? "parsley-error" : (props.formState.isSubmitted && props.formState.touched.id_team ? "parsley-success" : "")) + " custom-select " + (!props.idTeam ? " invalid" : "")}>
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
