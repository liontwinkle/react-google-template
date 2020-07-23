import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { convertToRaw, EditorState } from 'draft-js';
import Editor from 'draft-js-plugins-editor';
import createMentionPlugin from 'draft-js-mention-plugin';

import './mentionsStyles.css';
import './style.scss';

// const Entry = ({
//   mention,
//   // eslint-disable-next-line react/prop-types
//   searchValue, // eslint-disable-line no-unused-vars
//   // eslint-disable-next-line react/prop-types
//   isFocused, // eslint-disable-line no-unused-vars
//   parentProps,
// }) => (
//   <div {...parentProps}>
//     <div className="mentionSuggestionsEntryContainer">
//       <div className="mentionSuggestionsEntryContainerLeft">
//         <img
//           src={mention.avatar}
//           className="mentionSuggestionsEntryAvatar"
//           role="presentation"
//           alt="presentation"
//         />
//       </div>
//
//       <div className="mentionSuggestionsEntryContainerRight">
//         <div className="mentionSuggestionsEntryText">
//           {mention.name}
//         </div>
//
//         <div className="mentionSuggestionsEntryTitle">
//           {mention.title}
//         </div>
//       </div>
//     </div>
//   </div>
// );

// Entry.propTypes = {
//   mention: PropTypes.object.isRequired,
//   parentProps: PropTypes.object.isRequired,
// };

class SimpleMentionEditor extends Component {
  constructor(props) {
    super(props);
    this.mentionPlugin = createMentionPlugin();
    this.state = {
      suggestions: [],
    };
  }

    onChange = (editorState) => {
      const { fieldId } = this.props;
      const contentState = editorState.getCurrentContent();
      const note = convertToRaw(contentState);
      console.log(note); // fixme
      this.props.setEditorState({
        [fieldId]: editorState,
      });
    };

    onSearchChange = ({ value }) => {
      const filterData = this.props.mentionsUser.filter((item) => (
        item.name.toLowerCase().includes(value.toLowerCase())
      ));
      this.setState({
        suggestions: filterData,
      });
    };

    focus = () => {
      this.editor.focus();
    };

    updateState(data) {
      this.setState({
        ...data,
      });
    }

    render() {
      const { MentionSuggestions } = this.mentionPlugin;
      const plugins = [this.mentionPlugin];

      return (
        <div className="custom-mention_text-area" onClick={this.focus}>
          <Editor
            editorState={this.props.editorState}
            onChange={(editState) => this.onChange(editState)}
            placeholder="Action Information"
            plugins={plugins}
            ref={(element) => {
              this.editor = element;
            }}
          />
          <MentionSuggestions
            onSearchChange={this.onSearchChange}
            suggestions={this.state.suggestions}
            // entryComponent={Entry}
          />
        </div>
      );
    }
}

SimpleMentionEditor.propTypes = {
  mentionsUser: PropTypes.array,
  editorState: PropTypes.object,
  fieldId: PropTypes.string.isRequired,
  setEditorState: PropTypes.func.isRequired,
};

SimpleMentionEditor.defaultProps = {
  mentionsUser: [],
  editorState: EditorState.createEmpty(),
};

const mapStateToProps = (store) => ({
  mentionsUser: store.incidentData.mentionUsers,
});

export default connect(mapStateToProps)(SimpleMentionEditor);
