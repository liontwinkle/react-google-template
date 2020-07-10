import React, { useState } from 'react';
import {Input} from "antd";
import GoogleMapComponent from "../../../../common/GoogleMap";
import PlacesAutocomplete from '../../../../common/PlaceAutoComplete';
import Geocode from "react-geocode";

import './style.scss';

const DefaultAction = () => {
    const {TextArea} = Input;
    const [currentPos, setCurrentPos] = useState({
        name: "Current position",
        position: {
            lat: 37.77,
            lng: -122.42
        }
    });
    const [address, setAddress] = useState('');
    const [updateMapPos, setUpdateMapPos] = useState(false);

    const changePos = (value) => {
        setCurrentPos(value);
        Geocode.setApiKey("AIzaSyDwCk7q9AVI9DvQjsFUTN69jnYXqqX8HZs");
        Geocode.fromLatLng(value.position.lat, value.position.lng).then(
            response => {
                const address = response.results[0].formatted_address;
                setAddress(address);
                setUpdateMapPos(true);
            },
            error => {
                console.error(error);
            }
        );
    };

    return (
        <>
            <TextArea rows={4} placeholder="Action Information"/>
            <Input placeholder="Title*" allowClear/>
            <PlacesAutocomplete
                changePos={changePos}
                address={address}
                updateMapPos={updateMapPos}
                setUpdateMapPos={setUpdateMapPos}
            />
            <br/>
            <GoogleMapComponent changePos={changePos} markers={[currentPos]}/>
            <Input type="number" id="lat" value={currentPos.position.lat} />
            <Input type="number" id="lng" value={currentPos.position.lng} />
        </>
    )
};

export default DefaultAction;