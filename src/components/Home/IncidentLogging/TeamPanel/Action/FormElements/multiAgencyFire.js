import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const ActionMultiAgencyFire = ({
  tabIndex,
  fieldItem,
  onSetData,
  value,
}) => {
  const [ageFireState, setAgeFireState] = useState({
    police: false,
    ambulance: false,
  });

  useEffect(() => {
    setAgeFireState({
      police: (value && value[`tab_${tabIndex}_field_${fieldItem.field_type}-police_${fieldItem.id}`] === 'police'),
      ambulance: (value && value[`tab_${tabIndex}_field_${fieldItem.field_type}-ambulance_${fieldItem.id}`] === 'ambulance'),
    });
  }, [value, tabIndex, fieldItem.field_type, fieldItem.id]);

  const changeState = (type) => () => {
    setAgeFireState(() => ({
      ...ageFireState,
      [type]: !ageFireState[type],
    }));
    onSetData({ [`tab_${tabIndex}_field_${fieldItem.field_type}-${type}_${fieldItem.id}`]: type });
  };

  const cancel = () => {
    setAgeFireState({
      police: false,
      ambulance: false,
    });
    onSetData({
      [`tab_${tabIndex}_field_${fieldItem.field_type}-no_${fieldItem.id}`]: 'no',
      [`tab_${tabIndex}_field_${fieldItem.field_type}-police_${fieldItem.id}`]: null,
      [`tab_${tabIndex}_field_${fieldItem.field_type}-ambulance_${fieldItem.id}`]: null,
    });
  };
  return (
    <div
      className="custom-rad custom-mult-fire"
      id={`tab_${tabIndex}_field_${fieldItem.field_type}_${fieldItem.id}`}
      data-tab-id={tabIndex}
    >
      <div className="btn-group custom-rad" aria-label="Basic example">
        <button
          type="button"
          className={`btn btn-dim btn-outline-primary ${ageFireState.police === true ? 'selected' : ''}`}
          onClick={changeState('police')}
        >
          Police
        </button>
        <button
          type="button"
          className={`btn btn-dim btn-outline-primary ${ageFireState.ambulance === true ? 'selected' : ''}`}
          onClick={changeState('ambulance')}
        >
          Ambulance
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

ActionMultiAgencyFire.propTypes = {
  tabIndex: PropTypes.number,
  value: PropTypes.object,
  fieldItem: PropTypes.object,
  onSetData: PropTypes.func.isRequired,
};

ActionMultiAgencyFire.defaultProps = {
  tabIndex: 1,
  value: {},
  fieldItem: {},
};

export default ActionMultiAgencyFire;
