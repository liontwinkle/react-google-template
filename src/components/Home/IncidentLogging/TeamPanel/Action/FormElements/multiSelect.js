import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Select } from 'antd';

import './style.scss';

const { Option } = Select;

const ActionMultiSelect = ({
  tabIndex,
  fieldItem,
  options,
  onSetData,
  value,
}) => {
  const [newOptions, setNewOptions] = useState([]);

  useEffect(() => {
    const customOptions = options.filter((optionItem) => (optionItem.id === fieldItem.id));
    if (customOptions[0].options) {
      setNewOptions(customOptions[0].options);
    }
  }, [setNewOptions, newOptions, options, fieldItem.id]);

  const handleChange = (value) => {
    console.log(`selected ${value}`);
    onSetData(`tab_${tabIndex}_field_${fieldItem.field_type}_${fieldItem.id}[]`, value);
  };

  return (
    <Select
      mode="tags"
      style={{
        width: '100%',
        minHeight: 'calc(1.5em + 0.9375rem + 3px)',
      }}
      placeholder="Tags Mode"
      onChange={handleChange}
      value={value ? value[`tab_${tabIndex}_field_${fieldItem.field_type}_${fieldItem.id}[]`] : []}
      maxTagCount={3}
      filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
    >
      {
        newOptions.map((optionItem) => (
          <Option key={optionItem.id} value={optionItem.id}>{optionItem.option_text}</Option>
        ))
      }
    </Select>
  );
};

ActionMultiSelect.propTypes = {
  tabIndex: PropTypes.number,
  fieldItem: PropTypes.object,
  options: PropTypes.array,
  value: PropTypes.object,
  onSetData: PropTypes.func.isRequired,
};

ActionMultiSelect.defaultProps = {
  tabIndex: 1,
  options: [],
  fieldItem: {},
  value: null,
};

export default ActionMultiSelect;
