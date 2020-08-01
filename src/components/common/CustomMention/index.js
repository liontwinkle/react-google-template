import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { EditorState } from 'draft-js';
import Editor from 'draft-js-plugins-editor';
import createMentionPlugin from 'draft-js-mention-plugin';

import './mentionsStyles.css';
import './style.scss';

// const positionSuggestions = ({ state, props }) => {
//   let transform;
//   let transition;
//   let left;
//   let top;
//
//   if (state.isActive && props.suggestions.length > 0) {
//     transform = 'scale(1) translateY(-100%)';
//     transition = 'all 0.25s cubic-bezier(.3,1.2,.2,1)';
//     left = props.decoratorRect.left + 'px';
//     top = props.decoratorRect.top - 40 + 'px';
//   } else if (state.isActive) {
//     transform = 'scaleY(0)';
//     transition = 'all 0.25s cubic-bezier(.3,1,.2,1)';
//   }
//
//   return {
//     transform,
//     transition,
//   };
// };

const Entry = (props) => {
  const {
    // eslint-disable-next-line react/prop-types
    mention,
    // eslint-disable-next-line react/prop-types
    searchValue, // eslint-disable-line no-unused-vars
    // eslint-disable-next-line react/prop-types
    isFocused, // eslint-disable-line no-unused-vars
    ...parentProps
  } = props;

  return (
    <div {...parentProps}>
      <div className="mentionSuggestionsEntryContainer">
        <div className="mentionSuggestionsEntryContainerLeft">
          <img
            /* eslint-disable-next-line react/prop-types */
            // src={mention.avatar}
            src="ftp://cp_admin:97&1Ayoe@74.208.102.130"
            className="mentionSuggestionsEntryAvatar"
            role="presentation"
            alt="presentation"
          />
        </div>

        <div className="mentionSuggestionsEntryContainerRight">
          <div className="mentionSuggestionsEntryText">
            {/* eslint-disable-next-line react/prop-types */}
            {mention.name}
          </div>

          <div className="mentionSuggestionsEntryTitle">
            {/* eslint-disable-next-line react/prop-types */}
            {mention.title}
          </div>
        </div>
      </div>
    </div>
  );
};

class CustomMention extends Component {
  constructor(props) {
    super(props);
    this.mentionPlugin = props.topFetch ? createMentionPlugin({
      positionSuggestions: (settings) => ({
        left: `${settings.decoratorRect.left}px`,
        top: `${settings.decoratorRect.top - 54}px`, // change this value (40) for manage the distance between cursor and bottom edge of popover
        position: 'fixed',
        transform: 'scale(1) translateY(-100%)', // transition popover on the value of its height
        transformOrigin: '1em 0% 0px',
        transition: 'all 0.25s cubic-bezier(0.3, 1.2, 0.2, 1)',
      }),
    }) : createMentionPlugin();
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
            placeholder={
              this.props.topFetch
                ? 'Create task…. ie. @Bob can you complete incident report before today 8pm?'
                : 'Action Information'
            }
            plugins={plugins}
            ref={(element) => {
              this.editor = element;
            }}
          />
          <MentionSuggestions
            onSearchChange={this.onSearchChange}
            suggestions={this.state.suggestions}
            entryComponent={Entry}
          />
        </div>
      );
    }
}

CustomMention.propTypes = {
  mentionsUser: PropTypes.array,
  editorState: PropTypes.object,
  fieldId: PropTypes.string.isRequired,
  setEditorState: PropTypes.func.isRequired,
  topFetch: PropTypes.bool,
};

CustomMention.defaultProps = {
  mentionsUser: [],
  topFetch: false,
  editorState: EditorState.createEmpty(),
};

const mapStateToProps = (store) => ({
  mentionsUser: store.incidentData.mentionUsers,
});

export default connect(mapStateToProps)(CustomMention);
