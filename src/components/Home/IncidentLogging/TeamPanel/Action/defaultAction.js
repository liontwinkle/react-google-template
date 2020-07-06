import React from 'react';
import {Input} from "antd";
import GoogleMapComponent from "../../../../common/GoogleMap";

import './style.scss';

const DefaultAction = () => {
    const { TextArea } = Input;
    return (
        <>
            <TextArea rows={4} placeholder="Action Information"/>
            <Input placeholder="Title*" allowClear/>
            <Input placeholder="Area / Grid / Room*" allowClear/>
            <br/>
            <GoogleMapComponent isMarkerShown/>
        </>
    )
};

export default DefaultAction;