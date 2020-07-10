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
    const [currentPos, setCurrentPos] = useState({
        name: "Current position",
        position: {
            lat: -33.86566064617498,
            lng: 151.20870681376962
        }
    });
    const [address, setAddress] = useState('');
    const [updateMapPos, setUpdateMapPos] = useState(false);

    const changePos = (value) => {
        setCurrentPos(value);
        getGeocode({
            location: {
                lat: value.position.lat,
                lng: value.position.lng,
            }
        }).then(
            response => {
                console.log(response)
                let address = 'Cannot determine address at this location.';
                if (response && response.length > 0) {
                    address = response[0].formatted_address;
                }
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
                setAddress={setAddress}
                setUpdateMapPos={setUpdateMapPos}
            />
            <br/>
            <GoogleMapComponent changePos={changePos} markers={[currentPos]}/>
        </>
    )
};

export default DefaultAction;