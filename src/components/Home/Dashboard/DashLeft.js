import React from 'react';
import PropTypes from 'prop-types';

function DashLeft({ info, sessionData }) {
  return (
    <>
      <div className="alert alert-secondary m-3" role="alert">
        <strong>Event: </strong>
        {' '}
        {info.event_title}
        {' '}
        (ID:
        {' '}
        {sessionData.id_event}
        {' '}
        )
        <br />
        <strong>Instance: </strong>
        {' '}
        {info.instance_title}
        {' '}
        -
        {' '}
        {info.instance_shortname}
        {' '}
        (ID:
        {sessionData.id_instance}
        )
        <br />
        <strong>Team: </strong>
        {' '}
        {info.team_title}
        {' '}
        (ID:
        {' '}
        {sessionData.id_team}
        )
        <br />
        <strong>User: </strong>
        {' '}
        {info.user_first_name}
        {' '}
        {info.user_last_name}
        {' '}
        (
        {info.user_role}
        )
      </div>
    </>
  );
}

DashLeft.propTypes = {
  info: PropTypes.object.isRequired,
  sessionData: PropTypes.object.isRequired,
};

export default DashLeft;
