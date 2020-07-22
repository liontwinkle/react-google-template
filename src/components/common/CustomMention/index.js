import React, { Component } from 'react';
import { EditorState } from 'draft-js';

import Editor from 'draft-js-plugins-editor';

import createMentionPlugin from 'draft-js-mention-plugin';
import editorStyles from './style.css';

export default class SimpleMentionEditor extends Component {
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
      console.log('searching...', value); // fixme
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
