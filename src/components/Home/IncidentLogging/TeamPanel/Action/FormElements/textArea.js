import React from 'react';
import PropTypes from 'prop-types';
import SimpleMentionEditor from '../../../../../common/CustomMention';

const ActionTextArea = ({
  onSetData,
  fieldItem,
  tabIndex,
  value,
}) => (
  <>
    <SimpleMentionEditor
      setEditorState={onSetData}
      editorState={value ? value[`tab_${tabIndex}_field_${fieldItem.field_type}_${fieldItem.id}`] : null}
      fieldId={`tab_${tabIndex}_field_${fieldItem.field_type}_${fieldItem.id}`}
    />
  </>
);

ActionTextArea.propTypes = {
  value: PropTypes.object,
  fieldItem: PropTypes.object.isRequired,
  tabIndex: PropTypes.number.isRequired,
  onSetData: PropTypes.func.isRequired,
};

ActionTextArea.defaultProps = {
  value: null,
};

export default ActionTextArea;
