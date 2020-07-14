import React from 'react';
import PropTypes from 'prop-types';

const ActionTextField = ({
  tabIndex,
  fieldItem,
  onSetData,
  value,
}) => {
  const required = (fieldItem.field_required === '1');

  const onChange = (e) => {
    onSetData(`tab_${tabIndex}_field_${fieldItem.field_type}_${fieldItem.id}`, e.target.value);
  };

  return (
    <>
      <input
        type="text"
        className="form-control"
        id={`tab_${tabIndex}_field_${fieldItem.field_type}_${fieldItem.id}`}
        name={`tab_${tabIndex}_field_${fieldItem.field_type}_${fieldItem.id}`}
        data-tab-id={tabIndex}
        placeholder={fieldItem.field_placeholder}
        required={required}
        value={value ? value[`tab_${tabIndex}_field_${fieldItem.field_type}_${fieldItem.id}`] : ''}
        onChange={onChange}
      />
    </>
  );
};

ActionTextField.propTypes = {
  tabIndex: PropTypes.number,
  fieldItem: PropTypes.object,
  onSetData: PropTypes.func.isRequired,
  value: PropTypes.object,
};

ActionTextField.defaultProps = {
  tabIndex: 1,
  fieldItem: {},
  value: {},
};

export default ActionTextField;
