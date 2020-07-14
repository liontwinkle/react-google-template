import React from 'react';
import PropTypes from 'prop-types';

const ActionMultiAgency = ({
  tabIndex, fieldItem, onSetData, value,
}) => {
  const onSelect = (value) => {
    onSetData({ [`tab_${tabIndex}_field_${fieldItem.field_type}_${fieldItem.id}`]: value });
  };

  const selectedValue = value ? value[`tab_${tabIndex}_field_${fieldItem.field_type}_${fieldItem.id}`] : '';

  return (
    <div
      className="custom-rad custom-multi-all"
      id={`tab_${tabIndex}_field_${fieldItem.field_type}_${fieldItem.id}`}
      data-tab-id={tabIndex}
    >
      <div className="btn-group custom-rad" aria-label="Basic example">
        <button
          type="button"
          className={`btn btn-dim btn-outline-primary ${selectedValue === 'police' ? 'selected' : ''}`}
          onClick={() => onSelect('police')}
        >
          Police
        </button>
        <button
          type="button"
          className={`btn btn-dim btn-outline-primary ${selectedValue === 'ambulance' ? 'selected' : ''}`}
          onClick={() => onSelect('ambulance')}
        >
          Ambulance
        </button>
        <button
          type="button"
          className={`btn btn-dim btn-outline-primary ${selectedValue === 'no' ? 'selected' : ''}`}
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
  value: PropTypes.object,
  fieldItem: PropTypes.object,
  onSetData: PropTypes.func.isRequired,
};

ActionMultiAgency.defaultProps = {
  tabIndex: 0,
  value: null,
  fieldItem: {},
};

export default ActionMultiAgency;
