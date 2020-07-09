import React, { useState } from 'react';
import {Input} from "antd";
import GoogleMapComponent from "../../../../common/GoogleMap";
import PlacesAutocomplete from '../../../../common/PlaceAutoComplete';

import './style.scss';

const DefaultAction = () => {
    const {TextArea} = Input;
    const [lat, setLat] = useState(30);
    const [lon, setLon] = useState(-100);

    const changeLat = (e) => {
        setLat(parseFloat(e.target.value));
    };

    const changeLon = (e) => {
        setLon(parseFloat(e.target.value));
    }
    return (
        <>
            <TextArea rows={4} placeholder="Action Information"/>
            <Input placeholder="Title*" allowClear/>
            <PlacesAutocomplete/>
            {/*<Input placeholder="Area / Grid / Room*" allowClear/>*/}
            <br/>
            <GoogleMapComponent lat={lat} lon={lon}/>
            <Input type="number" id="lat" value={lat} onChange={changeLat}/>
            <Input type="number" id="lng" value={lon} onChange={changeLon}/>
        </>
    )
};

export default DefaultAction;