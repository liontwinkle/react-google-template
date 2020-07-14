import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ActionMultiAgency = ({ tabIndex, fieldItem, onSetData }) => {
  const [value, setValue] = useState('');

  const onSelect = (value) => {
    setValue(value);
    onSetData(`tab_${tabIndex}_field_${fieldItem.field_type}_${fieldItem.id}`, value);
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
          className={`btn btn-dim btn-outline-primary ${value === 'police' ? 'selected' : ''}`}
          onClick={() => onSelect('police')}
        >
          Police
        </button>
        <button
          type="button"
          className={`btn btn-dim btn-outline-primary ${value === 'ambulance' ? 'selected' : ''}`}
          onClick={() => onSelect('ambulance')}
        >
          Ambulance
        </button>
        <button
          type="button"
          className={`btn btn-dim btn-outline-primary ${value === 'no' ? 'selected' : ''}`}
          onClick={() => onSelect('no')}
        >
          No
        </button>
      </div>
    </div>
  );
};

ActionMultiAgency.propTypes = {
  tabIndex: PropTypes.number,
  fieldItem: PropTypes.object,
  onSetData: PropTypes.func.isRequired,
};

ActionMultiAgency.defaultProps = {
  tabIndex: 0,
  fieldItem: {},
};

export default ActionMultiAgency;
