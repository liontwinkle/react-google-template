import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { Form, Spinner } from 'react-bootstrap';
import { AlertCircle } from 'react-feather';

import { setSessionExpiryModalState } from '../../../redux/action/themeConfigs';

function Teams({
  setValue,
  errors,
  formState,
  idTeam,
  teams,
  idInstance,
  idEvent,
  register,
  setSessionExpiryModalState,
  changeTeamHandler,
}) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getTeamsHandler = async () => {
      setLoading(true);
      try {
        // set default value
        setValue('id_team', idTeam || '');
        setLoading(false);
      } catch (e) {
        // if unauthorized
        if (e.response.status === 401) {
          // open session expiry modal
          setSessionExpiryModalState(true);
          setLoading(false);
          return;
        }
        console.log('Unexpected error: SelectTeam:getTeamsHandler', e);
      }
    };
    getTeamsHandler(idInstance, idEvent);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idInstance, idEvent]);

  return (
    <>
      <Form.Group controlId="id_team">
        {loading && <Spinner size="sm" animation="grow" />}
        <Form.Label>
          Team
          <span className="tx-danger">*</span>
        </Form.Label>
        <Form.Control disabled={loading} onChange={changeTeamHandler} name="id_team" as="select" ref={register({ required: true })} className={`${errors.id_team ? 'parsley-error' : (formState.isSubmitted && formState.touched.id_team ? 'parsley-success' : '')} custom-select ${!idTeam ? ' invalid' : ''}`}>
          <option value="" disabled hidden className="invalid">Select Team</option>
          {teams.map((team) => <option key={team.id} value={team.id}>{team.team_title}</option>)}
        </Form.Control>
        {errors.id_team && errors.id_team.type === 'required' && (<div className="parsley-errors-list filled mt-1">This value is required.</div>)}
        <div className="alert alert-light d-flex align-items-center mt-2" role="alert">
          <AlertCircle size={18} className="mg-r-10" />
          {' '}
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          If your team is not listed, please select 'N/A'
        </div>
      </Form.Group>
    </>
  );
}

Teams.propTypes = {
  setSessionExpiryModalState: PropTypes.func.isRequired,
  teams: PropTypes.array.isRequired,
  setValue: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  formState: PropTypes.object.isRequired,
  idInstance: PropTypes.string,
  idEvent: PropTypes.string,
  idTeam: PropTypes.string,
  changeTeamHandler: PropTypes.func.isRequired,
};

Teams.defaultProps = {
  idInstance: null,
  idEvent: null,
  idTeam: null,
};

const mapStateToProps = (store) => ({
  sessionData: store.sessionData.sessionData,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  setSessionExpiryModalState,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Teams);
