import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const ActionMultiAgencyAmbulance = ({
  tabIndex, fieldItem, onSetData, value,
}) => {
  const [ageAmbulanceState, setAgeAmbulanceState] = useState({
    police: false,
    fire: false,
  });

  useEffect(() => {
    setAgeAmbulanceState({
      police: (value && value[`tab_${tabIndex}_field_${fieldItem.field_type}-police_${fieldItem.id}`] === 'police'),
      fire: (value && value[`tab_${tabIndex}_field_${fieldItem.field_type}-fire_${fieldItem.id}`] === 'fire'),
    });
  }, [value, tabIndex, fieldItem.field_type, fieldItem.id]);

  const changeState = (type) => () => {
    setAgeAmbulanceState(() => ({
      ...ageAmbulanceState,
      [type]: !ageAmbulanceState[type],
    }));
    onSetData({ [`tab_${tabIndex}_field_${fieldItem.field_type}-${type}_${fieldItem.id}`]: type });
  };

  const cancel = () => {
    onSetData({
      [`tab_${tabIndex}_field_${fieldItem.field_type}-police_${fieldItem.id}`]: null,
      [`tab_${tabIndex}_field_${fieldItem.field_type}-fire_${fieldItem.id}`]: null,
      [`tab_${tabIndex}_field_${fieldItem.field_type}-no_${fieldItem.id}`]: 'no',
    });
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
          className="btn btn-dim btn-outline-primary"
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
  value: PropTypes.object,
  onSetData: PropTypes.func.isRequired,
};

ActionMultiAgencyAmbulance.defaultProps = {
  tabIndex: 1,
  value: null,
  fieldItem: {},
};

export default ActionMultiAgencyAmbulance;
