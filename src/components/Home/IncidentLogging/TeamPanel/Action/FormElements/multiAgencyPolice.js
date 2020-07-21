import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const ActionMultiAgencyPolice = ({
  tabIndex,
  fieldItem,
  onSetData,
  value,
}) => {
  const [agePoliceState, setAgePoliceState] = useState({
    fire: false,
    ambulance: false,
    no: false,
  });

  useEffect(() => {
    const updatedValue = {
      fire: (value.filter((item) => (item === 'fire')).length > 0),
      ambulance: (value.filter((item) => (item === 'ambulance')).length > 0),
      no: (value.filter((item) => (item === 'no')).length > 0),
    };
    setAgePoliceState(updatedValue);
  }, [value, tabIndex, fieldItem.field_type, fieldItem.id]);

  const getAgencyData = (state) => {
    const newData = [];
    if (state.fire) {
      newData.push('fire');
    }
    if (state.ambulance) {
      newData.push('ambulance');
    }

    if (state.no) {
      newData.push('no');
    }
    return newData;
  };

  const changeState = (type) => () => {
    const updateState = {
      ...agePoliceState,
      [type]: !agePoliceState[type],
      no: false,
    };
    const newData = getAgencyData(updateState, value);
    onSetData({ [`tab_${tabIndex}_field_${fieldItem.field_type}_${fieldItem.id}`]: newData });
  };

  const cancel = () => {
    onSetData({ [`tab_${tabIndex}_field_${fieldItem.field_type}_${fieldItem.id}`]: ['no'] });
  };

  return (
    <div
      className="custom-rad custom-mult-pol"
      id={`tab_${tabIndex}_field_${fieldItem.file_type}_${fieldItem.id}`}
      data-tab-id={tabIndex}
    >
      <div className="btn-group custom-rad" aria-label="Basic example">
        <button
          type="button"
          className={`btn btn-dim btn-outline-primary ${agePoliceState.fire === true ? 'selected' : ''}`}
          onClick={changeState('fire')}
        >
          Fire
        </button>
        <button
          type="button"
          className={`btn btn-dim btn-outline-primary ${agePoliceState.ambulance === true ? 'selected' : ''}`}
          onClick={changeState('ambulance')}
        >
          Ambulance
        </button>
        <button
          type="button"
          className={`btn btn-dim btn-outline-primary ${agePoliceState.no === true ? 'selected' : ''}`}
          onClick={cancel}
        >
          No
        </button>
      </div>
    </div>
  );
};

ActionMultiAgencyPolice.propTypes = {
  tabIndex: PropTypes.number,
  fieldItem: PropTypes.object,
  value: PropTypes.array,
  onSetData: PropTypes.func.isRequired,
};

ActionMultiAgencyPolice.defaultProps = {
  tabIndex: 1,
  value: [],
  fieldItem: {},
};

export default ActionMultiAgencyPolice;
