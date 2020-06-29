import React, {Component} from 'react';
import Editor, {createEditorStateWithText} from 'draft-js-plugins-editor';
import createEmojiPlugin from 'draft-js-emoji-plugin';

import './styles.scss';

const emojiPlugin = createEmojiPlugin();
const {EmojiSuggestions} = emojiPlugin;
const plugins = [emojiPlugin];
const text = ``;


export default class SimpleEmojiEditor extends Component {

    state = {
        editorState: createEditorStateWithText(text),
    };


    onChange = (editorState) => {
        this.setState({
            editorState,
        });
    };

    focus = () => {
        this.editor.focus();
    };

    render() {
        return (
            <div className='chat-content-footer'>
                <a href="" data-toggle="tooltip" title="Add File" className="chat-plus"><i data-feather="plus"/></a>
                <div className='form-control align-self-center bd-0 editor' onClick={this.focus}>
                    <Editor
                        editorState={this.state.editorState}
                        onChange={this.onChange}
                        plugins={plugins}
                        placeholder="Create task... ie. @Bob can you complete incident report before today 8pm?"
                        ref={(element) => {
                            this.editor = element;
                        }}
                    />
                    <EmojiSuggestions/>
                </div>
                <nav>
                    <a href="" data-toggle="tooltip" title="Add GIF"><i data-feather="image" /></a>
                    <a href="" data-toggle="tooltip" title="Add Gift"><i data-feather="gift" /></a>
                    <a href="" data-toggle="tooltip" title="Add Smiley"><i data-feather="smile" /></a>
                </nav>
            </div>
        );
    }
}