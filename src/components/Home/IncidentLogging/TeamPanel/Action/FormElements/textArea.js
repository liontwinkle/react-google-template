import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SimpleMentionEditor from '../../../../../common/CustomMention';

const ActionTextArea = ({
  tabIndex,
  fieldItem,
  options,
  onSetData,
  value,
}) => {
  const [setNewOptions] = useState([]);
  const required = (fieldItem.field_required === '1');
  const customOptions = options.filter((optionItem) => (optionItem.id === fieldItem.id));
  if (customOptions.options) {
    setNewOptions(customOptions.options);
  }
  const onTextArea = (e) => {
    onSetData({ [`tab_${tabIndex}_field_${fieldItem.field_type}_${fieldItem.id}`]: e.target.value });
  };

  return (
    <>
      {/* <textarea */}
      {/*  className="form-control" */}
      {/*  rows="5" */}
      {/*  id={`tab_${tabIndex}_field_${fieldItem.field_type}_${fieldItem.id}`} */}
      {/*  name={`tab_${tabIndex}_field_${fieldItem.field_type}_${fieldItem.id}`} */}
      {/*  data-tab-id={tabIndex} */}
      {/*  placeholder={`${fieldItem.field_placeholder ? fieldItem.field_placeholder : ''}`} */}
      {/*  required={required} */}
      {/*  onChange={onTextArea} */}
      {/*  value={value ? value[`tab_${tabIndex}_field_${fieldItem.field_type}_${fieldItem.id}`] : ''} */}
      {/* /> */}
      <SimpleMentionEditor />
    </>
  );
};

ActionTextArea.propTypes = {
  tabIndex: PropTypes.number,
  fieldItem: PropTypes.object,
  options: PropTypes.array,
  onSetData: PropTypes.func.isRequired,
  value: PropTypes.object,
};

ActionTextArea.defaultProps = {
  tabIndex: 1,
  options: [],
  fieldItem: {},
  value: null,
};

export default ActionTextArea;
