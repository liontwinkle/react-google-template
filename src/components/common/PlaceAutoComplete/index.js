import React from 'react';
import PropTypes from 'prop-types';
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from 'use-places-autocomplete';
import useOnclickOutside from 'react-cool-onclickoutside';
import { Input } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/pro-light-svg-icons';

import './style.scss';

const PlacesAutocomplete = ({
  changePos, address, setUpdateMapPos, updateMapPos,
}) => {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      componentRestrictions: { country: ['au'] },
    },
    debounce: 300,
  });

  const ref = useOnclickOutside(() => {
    clearSuggestions();
  });

  const handleInput = (e) => {
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
          name: 'Current position',
          position: {
            lat,
            lng,
          },
        });
        setUpdateMapPos(false);
      })
      .catch((error) => {
        console.log('😱 Error: ', error);
      });
  };

  const renderSuggestions = () => data.map((suggestion) => {
    const {
      id,
      structured_formatting: { mainText, secondaryText },
    } = suggestion;

    return (
      <li key={id} onClick={handleSelect(suggestion)}>
        <FontAwesomeIcon icon={faMapMarkerAlt} />
        {' '}
        <strong>{mainText}</strong>
        {' '}
        <small>{secondaryText}</small>
      </li>
    );
  });

  return (
    <div className="place-container" ref={ref}>
      <Input
        value={updateMapPos ? address : value}
        onChange={handleInput}
        disabled={!ready}
        placeholder="Area / Grid / Room*"
      />
      {/* We can use the "status" to decide whether we should display the dropdown or not */}
      {status === 'OK' && (
        <ul className="place-location">
          {renderSuggestions()}
          <li className="logo">
            <img
              src="https://developers.google.com/maps/documentation/images/powered_by_google_on_white.png"
              alt="Powered by Google"
            />
          </li>
        </ul>
      )}
    </div>
  );
};

PlacesAutocomplete.propTypes = {
  address: PropTypes.string,
  updateMapPos: PropTypes.bool,
  changePos: PropTypes.func.isRequired,
  setUpdateMapPos: PropTypes.func.isRequired,
};

PlacesAutocomplete.defaultProps = {
  address: '',
  updateMapPos: false,
};

export default PlacesAutocomplete;
