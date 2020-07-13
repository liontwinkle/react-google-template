import React from 'react';
import PropTypes from 'prop-types';
import { Select } from 'antd';

import './style.scss';

const CustomSelect = ({ optionData, placeholder }) => {
  const { Option } = Select;

  const onChange = (value) => {
    console.log(`selected ${value}`);
  };

  const onBlur = () => {
    console.log('blur');
  };

  const onFocus = () => {
    console.log('focus');
  };

  const onSearch = (val) => {
    console.log('search:', val);
  };

  return (
    <Select
      showSearch
      style={{ width: '100%' }}
      placeholder={placeholder}
      optionFilterProp="children"
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      onSearch={onSearch}
      filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
    >
      {
        optionData.map((optionItem) => (
          <Option value={optionItem.key} key={optionItem.key}>{optionItem.value}</Option>
        ))
      }
    </Select>
  );
};
CustomSelect.propTypes = {
  optionData: PropTypes.array,
  placeholder: PropTypes.string,
};

CustomSelect.defaultProps = {
  optionData: [],
  placeholder: '',
};

export default CustomSelect;
