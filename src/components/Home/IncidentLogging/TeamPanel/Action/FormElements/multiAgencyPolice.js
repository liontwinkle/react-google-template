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
  });

  useEffect(() => {
    setAgePoliceState({
      fire: (value && value[`tab_${tabIndex}_field_${fieldItem.field_type}-fire_${fieldItem.id}`] === 'fire'),
      ambulance: (value && value[`tab_${tabIndex}_field_${fieldItem.field_type}-ambulance_${fieldItem.id}`] === 'ambulance'),
    });
  }, [value, tabIndex, fieldItem.field_type, fieldItem.id]);

  const changeState = (type) => () => {
    setAgePoliceState(() => ({
      ...agePoliceState,
      [type]: !agePoliceState[type],
    }));
    onSetData({ [`tab_${tabIndex}_field_${fieldItem.field_type}-${type}_${fieldItem.id}`]: type });
  };

  const cancel = () => {
    setAgePoliceState({
      fire: false,
      ambulance: false,
    });
    onSetData({
      [`tab_${tabIndex}_field_${fieldItem.field_type}-no_${fieldItem.id}`]: 'no',
      [`tab_${tabIndex}_field_${fieldItem.field_type}-fire_${fieldItem.id}`]: null,
      [`tab_${tabIndex}_field_${fieldItem.field_type}-ambulance_${fieldItem.id}`]: null,
    });
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
          className="btn btn-dim btn-outline-primary"
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
  value: PropTypes.object,
  onSetData: PropTypes.func.isRequired,
};

ActionMultiAgencyPolice.defaultProps = {
  tabIndex: 1,
  value: null,
  fieldItem: {},
};

export default ActionMultiAgencyPolice;
