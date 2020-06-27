import React from 'react';
import {Input} from "antd";

import './style.scss';

const Announcement = () => {
    const { TextArea } = Input;
    return (
        <div className='announcement-panel'>
            <label>Announcement</label>
            <TextArea rows={4} placeholder="Announcement"/>
        </div>
    );
};

export default Announcement;