import React from "react";
import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
} from "use-places-autocomplete";
import useOnclickOutside from "react-cool-onclickoutside";
import {Input} from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/pro-light-svg-icons";

import './style.scss';
import PropTypes from "prop-types";

const PlacesAutocomplete = ({changePos, address, setUpdateMapPos, updateMapPos,}) => {
    const {
        ready,
        value,
        suggestions: { status, data },
        setValue,
        clearSuggestions,
    } = usePlacesAutocomplete({
        requestOptions: {
            /* Define search scope here */
        },
        debounce: 300,
    });

    const ref = useOnclickOutside(() => {
        clearSuggestions();
    });

    const handleInput = (e) => {
        setUpdateMapPos(false);
        setValue(e.target.value);
    };

    const handleSelect = ({ description }) => () => {
        setValue(description, false);
        clearSuggestions();

        // Get latitude and longitude via utility functions
        getGeocode({ address: description })
            .then((results) => getLatLng(results[0]))
            .then(({ lat, lng }) => {
                changePos({
                    name: "Current position",
                    position: {
                        lat,
                        lng,
                    }
                });
                console.log("📍 Coordinates: ", { lat, lng });
            })
            .catch((error) => {
                console.log("😱 Error: ", error);
            });
    };

    const renderSuggestions = () =>
        data.map((suggestion) => {
            const {
                id,
                structured_formatting: { main_text, secondary_text },
            } = suggestion;

            return (
                <li key={id} onClick={handleSelect(suggestion)}>
                    <FontAwesomeIcon icon={faMapMarkerAlt} /> <strong>{main_text}</strong> <small>{secondary_text}</small>
                </li>
            );
        });

    return (
        <div className="place-container" ref={ref}>
            <Input
                value={updateMapPos? address: value}
                onChange={handleInput}
                disabled={!ready}
                placeholder="Area / Grid / Room*"
            />
            {/* We can use the "status" to decide whether we should display the dropdown or not */}
            {status === "OK" && <ul className="place-location">
                {renderSuggestions()}
                <li className="logo">
                    <img
                        src="https://developers.google.com/maps/documentation/images/powered_by_google_on_white.png"
                        alt="Powered by Google"
                    />
                </li>
            </ul>
            }
        </div>
    );
};

PlacesAutocomplete.propTypes = {
    changePos: PropTypes.func,
    address: PropTypes.string,
    updateMapPos: PropTypes.bool,
    setUpdateMapPos: PropTypes.func,
};

PlacesAutocomplete.defaultProps = {
    address: '',
    updateMapPos: false,
};

export default PlacesAutocomplete;