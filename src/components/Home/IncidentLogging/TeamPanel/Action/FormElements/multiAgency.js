import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const ActionMultiAgency = ({
  tabIndex, fieldItem, onSetData, value,
}) => {
  const [ageFire, setAgeFire] = useState({
    police: false,
    ambulance: false,
    no: false,
  });

  useEffect(() => {
    const updatedValue = {
      police: (value.filter((item) => (item === 'police')).length > 0),
      ambulance: (value.filter((item) => (item === 'ambulance')).length > 0),
      no: (value.filter((item) => (item === 'no')).length > 0),
    };
    setAgeFire(updatedValue);
  }, [value, tabIndex, fieldItem.field_type, fieldItem.id]);

  const getAgencyData = (state) => {
    const newData = [];
    if (state.police) {
      newData.push('police');
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
      ...ageFire,
      [type]: !ageFire[type],
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
      className="custom-rad custom-multi-all"
      id={`tab_${tabIndex}_field_${fieldItem.field_type}_${fieldItem.id}`}
      data-tab-id={tabIndex}
    >
      <div className="btn-group custom-rad" aria-label="Basic example">
        <button
          type="button"
          className={`btn btn-dim btn-outline-primary ${ageFire.police === true ? 'selected' : ''}`}
          onClick={changeState('police')}
        >
          Police
        </button>
        <button
          type="button"
          className={`btn btn-dim btn-outline-primary ${ageFire.ambulance === true ? 'selected' : ''}`}
          onClick={changeState('ambulance')}
        >
          Ambulance
        </button>
        <button
          type="button"
          className={`btn btn-dim btn-outline-primary ${ageFire.no === true ? 'selected' : ''}`}
          onClick={cancel}
        >
          No
        </button>
      </div>
    </div>
  );
};

ActionMultiAgency.propTypes = {
  tabIndex: PropTypes.number,
  value: PropTypes.array,
  fieldItem: PropTypes.object,
  onSetData: PropTypes.func.isRequired,
};

ActionMultiAgency.defaultProps = {
  tabIndex: 0,
  value: [],
  fieldItem: {},
};

export default ActionMultiAgency;
