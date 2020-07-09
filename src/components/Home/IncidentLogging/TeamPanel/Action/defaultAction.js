import React from 'react';
import {Input} from "antd";
import GoogleMapComponent from "../../../../common/GoogleMap";
import Marker from "../../../../common/GoogleMap/Marker";
import './style.scss';

const DefaultAction = () => {
    const { TextArea } = Input;
    return (
        <>
            <TextArea rows={4} placeholder="Action Information"/>
            <Input placeholder="Title*" allowClear/>
            <Input placeholder="Area / Grid / Room*" allowClear/>
            <br/>
            <GoogleMapComponent
                center={{ lat:-30, lng: 34 }}
                zoom={12}
                options={{
                    mapTypeControl: false,
                    streetViewControl: false,
                }}
            >
                <Marker
                    lat={10}
                    lng={100}
                />
            </GoogleMapComponent>
        </>
    )
};

export default DefaultAction;