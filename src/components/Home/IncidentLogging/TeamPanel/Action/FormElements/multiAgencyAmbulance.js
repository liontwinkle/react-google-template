import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const ActionMultiAgencyAmbulance = ({
  tabIndex, fieldItem, onSetData, value,
}) => {
  const [ageAmbulanceState, setAgeAmbulanceState] = useState({
    police: false,
    fire: false,
    no: false,
  });

  useEffect(() => {
    const updatedValue = {
      police: (value.filter((item) => (item === 'police')).length > 0),
      fire: (value.filter((item) => (item === 'fire')).length > 0),
      no: (value.filter((item) => (item === 'no')).length > 0),
    };
    setAgeAmbulanceState(updatedValue);
  }, [value, tabIndex, fieldItem.field_type, fieldItem.id]);

  const getAgencyData = (state) => {
    const newData = [];
    if (state.police) {
      newData.push('police');
    }
    if (state.fire) {
      newData.push('fire');
    }

    if (state.no) {
      newData.push('no');
    }
    return newData;
  };

  const changeState = (type) => () => {
    const updateState = {
      ...ageAmbulanceState,
      [type]: !ageAmbulanceState[type],
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
      className="custom-rad custom-mult-medical"
      id={`tab_${tabIndex}_field_${fieldItem.field_type}_${fieldItem.id}`}
      data-tab-id={tabIndex}
    >
      <div className="btn-group custom-rad" aria-label="Basic example">
        <button
          type="button"
          className={`btn btn-dim btn-outline-primary ${ageAmbulanceState.police === true ? 'selected' : ''}`}
          onClick={changeState('police')}
        >
          Police
        </button>
        <button
          type="button"
          className={`btn btn-dim btn-outline-primary ${ageAmbulanceState.fire === true ? 'selected' : ''}`}
          onClick={changeState('fire')}
        >
          Fire
        </button>
        <button
          type="button"
          className={`btn btn-dim btn-outline-primary ${ageAmbulanceState.no === true ? 'selected' : ''}`}
          onClick={cancel}
        >
          No
        </button>
      </div>
    </div>
  );
};

ActionMultiAgencyAmbulance.propTypes = {
  tabIndex: PropTypes.number,
  fieldItem: PropTypes.object,
  value: PropTypes.array,
  onSetData: PropTypes.func.isRequired,
};

ActionMultiAgencyAmbulance.defaultProps = {
  tabIndex: 1,
  value: [],
  fieldItem: {},
};

export default ActionMultiAgencyAmbulance;
