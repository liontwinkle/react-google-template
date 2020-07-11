import React, {useState} from 'react';
import {Input} from "antd";

import './style.scss';

const DefaultAction = () => {
    const {TextArea} = Input;

    return (
        <>
            <TextArea rows={4} placeholder="Action Information"/>
            <Input placeholder="Title*" allowClear/>
        </>
    )
};

export default DefaultAction;