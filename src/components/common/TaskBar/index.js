import React, {Component} from 'react';
import Editor, {createEditorStateWithText} from 'draft-js-plugins-editor';
import createEmojiPlugin from 'draft-js-emoji-plugin';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus, faSmile, faImage, faGift} from "@fortawesome/free-solid-svg-icons";
import { Tooltip } from 'antd';

import './styles.scss';

const emojiPlugin = createEmojiPlugin();
const {EmojiSuggestions, EmojiSelect} = emojiPlugin;
const plugins = [emojiPlugin];
const text = ``;

const toneSelectStyles = `.emojiSelectPopoverToneSelect {
  position: absolute;
  left: 0;
  right: 0;
  top: -700px;
  bottom: 0;
  z-index: 2;
}`;

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
            <div className='task-bar-container'>
                <div className='task-bar-edit-container'>
                    <span className='plus_box'>
                        <FontAwesomeIcon icon={faPlus}/>
                    </span>
                    <div className='editor' onClick={this.focus}>
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
                </div>
                <div className='options'>
                    <Tooltip id="image" placement="top" title="Add Image">
                        <FontAwesomeIcon className="options-icon" icon={faImage}/>
                    </Tooltip>
                    <Tooltip id="gift" className="options-icon" placement="top" title="Add Gift">
                        <FontAwesomeIcon icon={faGift}/>
                    </Tooltip>
                    <Tooltip id="smiley" className="options-icon" placement="top" title="Add Smiley">
                        <FontAwesomeIcon icon={faSmile}/>
                        {/*<EmojiSelect theme={toneSelectStyles}/>*/}
                    </Tooltip>
                </div>
            </div>
        );
    }
}