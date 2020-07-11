import React, {useState} from 'react';
import {Input} from "antd";
import GoogleMapComponent from "../../../../common/GoogleMap";
import PlacesAutocomplete from '../../../../common/PlaceAutoComplete';

import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
} from "use-places-autocomplete";

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