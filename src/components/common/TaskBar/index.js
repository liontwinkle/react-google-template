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
            <div className='chat-content-footer w-100 pr-5'>
                <a href="" data-toggle="tooltip" title="Add File" className="chat-plus">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                         className="feather feather-plus">
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                    </svg></a>
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
                    <a href="" data-toggle="tooltip" title="Add GIF">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                             className="feather feather-image">
                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                            <circle cx="8.5" cy="8.5" r="1.5" />
                            <polyline points="21 15 16 10 5 21" />
                        </svg></a>
                    <a href="" data-toggle="tooltip" title="Add Gift">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                             className="feather feather-gift">
                            <polyline points="20 12 20 22 4 22 4 12" />
                            <rect x="2" y="7" width="20" height="5" />
                            <line x1="12" y1="22" x2="12" y2="7" />
                            <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
                            <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
                        </svg></a>
                    <a href="" data-toggle="tooltip" title="Add Smiley">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                             className="feather feather-smile">
                            <circle cx="12" cy="12" r="10" />
                            <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                            <line x1="9" y1="9" x2="9.01" y2="9" />
                            <line x1="15" y1="9" x2="15.01" y2="9" />
                        </svg></a>
                </nav>
            </div>
        );
    }
}