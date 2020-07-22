import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { EditorState } from 'draft-js';

import Editor from 'draft-js-plugins-editor';

import createMentionPlugin from 'draft-js-mention-plugin';
import editorStyles from './style.css';

class SimpleMentionEditor extends Component {
  constructor(props) {
    super(props);

    this.mentionPlugin = createMentionPlugin();
    this.state = {
      editorState: EditorState.createEmpty(),
      suggestions: [],
    };
  }

    onChange = (editorState) => {
      this.setState({
        editorState,
      });
    };

    onSearchChange = ({ value }) => {
      console.log('value: ', value);
      console.log('data: ', this.props.mentionsUser); // fixme
      const filterData = this.props.mentionsUser.filter((item) => (
        item.user_first_name.concat(' ', item.user_last_name).includes(value)
      ));
      console.log('filterData: ', filterData); // fixme

      this.setState({
        suggestions: filterData.map((filterItem) => ({
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
        <div className={editorStyles.editor} onClick={this.focus}>
          <Editor
            editorState={this.state.editorState}
            onChange={this.onChange}
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
};

SimpleMentionEditor.defaultProps = {
  mentionsUser: [],
};

const mapStateToProps = (store) => ({
  mentionsUser: store.incidentData.mentionUsers,
});

// const mapDispatchToProps = (dispatch) => bindActionCreators({
//   setSessionExpiryModalState,
//   setMainMenuState,
//   setLoadingFg,
//   resetSessionData,
//   getMentionUsers,
//   verifyToken,
// }, dispatch);

export default connect(mapStateToProps)(SimpleMentionEditor);
