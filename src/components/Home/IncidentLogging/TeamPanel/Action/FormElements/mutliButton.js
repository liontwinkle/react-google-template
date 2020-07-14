import React from 'react';
import PropTypes from 'prop-types';

const ActionMultiButton = ({
  tabIndex,
  fieldItem,
  onSetData,
  value,
}) => {
  const onSelect = (value) => {
    onSetData({ [`tab_${tabIndex}_field_${fieldItem.field_type}_${fieldItem.id}`]: value });
  };

  const selectedValue = value ? value[`tab_${tabIndex}_field_${fieldItem.field_type}_${fieldItem.id}`] : '';

  return (
    <div
      className="custom-rad"
      id={`tab_${tabIndex}_field_${fieldItem.field_type}_${fieldItem.id}`}
      data-tab-id={tabIndex}
    >
      <div className="btn-group custom-rad" aria-label="Basic example">
        <button
          type="button"
          className={`btn btn-dim btn-outline-primary ${selectedValue === 'yes' ? 'selected' : ''}`}
          onClick={() => onSelect('yes')}
        >
          Yes
        </button>
        <button
          type="button"
          className={`btn btn-dim btn-outline-primary ${selectedValue === 'no' ? 'selected' : ''}`}
          onClick={() => onSelect('no')}
        >
          No
        </button>
        <button
          type="button"
          className={`btn btn-dim btn-outline-primary ${selectedValue === 'unknown' ? 'selected' : ''}`}
          onClick={() => onSelect('unknown')}
        >
          Unknown
        </button>
      </div>
    </div>
  );
};

ActionMultiButton.propTypes = {
  tabIndex: PropTypes.array,
  fieldItem: PropTypes.object,
  value: PropTypes.object,
  onSetData: PropTypes.func.isRequired,
};

ActionMultiButton.defaultProps = {
  tabIndex: 1,
  fieldItem: {},
  value: null,
};

export default ActionMultiButton;
