import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { EditorState } from 'draft-js';

import Editor from 'draft-js-plugins-editor';

import createMentionPlugin from 'draft-js-mention-plugin';

import './style.scss';

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
      this.props.setEditorState({
        [fieldId]: editorState,
      });
    };

    onSearchChange = ({ value }) => {
      const filterData = this.props.mentionsUser.filter((item) => (
        item.user_first_name.concat(' ', item.user_last_name).toLowerCase().includes(value.toLowerCase())
      ));

      this.setState({
        suggestions: filterData.map((filterItem) => ({
          id: filterItem.id,
          name: filterItem.user_first_name.concat(' ', filterItem.user_last_name),
          avatar: filterItem.avatar,
        })),
      });
    };

    focus = () => {
      this.editor.focus();
    };

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
            ref={(element) => { this.editor = element; }}
          />
          <MentionSuggestions
            onSearchChange={this.onSearchChange}
            suggestions={this.state.suggestions}
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
