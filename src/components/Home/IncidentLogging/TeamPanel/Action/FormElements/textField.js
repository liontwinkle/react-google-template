import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ActionTextField = ({
  tabIndex, fieldItem, options, register, errors,
}) => {
  const [setNewOptions] = useState([]);
  const required = (fieldItem.field_required === '1');
  const customOptions = options.filter((optionItem) => (optionItem.id === fieldItem.id));
  if (customOptions.options) {
    setNewOptions(customOptions.options);
  }
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
        ref={required ? register({ required: 'Title is required' }) : null}
      />
      <div className="error-msg">
        {errors[`tab_${tabIndex}_field_${fieldItem.field_type}_${fieldItem.id}`]
      && errors[`tab_${tabIndex}_field_${fieldItem.field_type}_${fieldItem.id}`].message}
      </div>
    </>
  );
};

ActionTextField.propTypes = {
  tabIndex: PropTypes.number,
  fieldItem: PropTypes.object,
  options: PropTypes.array,
  register: PropTypes.func.isRequired,
  errors: PropTypes.object,
};

ActionTextField.defaultProps = {
  tabIndex: 1,
  options: [],
  fieldItem: {},
  errors: {},
};

export default ActionTextField;
