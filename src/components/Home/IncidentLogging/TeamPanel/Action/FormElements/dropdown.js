import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const ActionDropDown = ({
  tabIndex, fieldItem, options, onSetData,
}) => {
  const [newOptions, setNewOptions] = useState([]);
  useEffect(() => {
    const customOptions = options.filter((optionItem) => (optionItem.id === fieldItem.id));
    if (customOptions[0].options) {
      setNewOptions(customOptions[0].options);
    }
  }, [setNewOptions, fieldItem, options]);

  const required = (fieldItem.field_required === '1');

  const handleChange = (value) => {
    console.log(`selected ${value}-${fieldItem.field_type}`);
    onSetData({ [`tab_${tabIndex}_field_${fieldItem.field_type}_${fieldItem.id}[]`]: value.target.value });
  };
  return (
    <select
      className="custom-select form-control"
      id={`tab_${tabIndex}_field_${fieldItem.field_type}_${fieldItem.id}`}
      name={`tab_${tabIndex}_field_${fieldItem.field_type}_${fieldItem.id}`}
      data-tab-id={tabIndex}
      required={required}
      onChange={handleChange}
      defaultValue={0}
    >
      <option value="0">Unknown</option>
      {
        newOptions.map((customOptionItem) => (
          <option key={customOptionItem.id} value={customOptionItem.id}>{customOptionItem.option_text}</option>
        ))
      }
    </select>
  );
};

ActionDropDown.propTypes = {
  tabIndex: PropTypes.number,
  fieldItem: PropTypes.object,
  options: PropTypes.array,
  onSetData: PropTypes.func.isRequired,
};

ActionDropDown.defaultProps = {
  tabIndex: 1,
  options: [],
  fieldItem: {},
};

export default ActionDropDown;
