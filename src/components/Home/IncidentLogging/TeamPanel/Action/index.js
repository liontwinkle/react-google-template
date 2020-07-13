import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Tooltip, Switch } from 'antd';
import { getGeocode } from 'use-places-autocomplete';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/pro-solid-svg-icons';
import { faUserCircle } from '@fortawesome/pro-regular-svg-icons';

import DefaultAction from './defaultAction';
import FieldAction from './fieldAction';

import PlacesAutocomplete from '../../../../common/PlaceAutoComplete';
import GoogleMapComponent from '../../../../common/GoogleMap';

import { getTypeAheadList } from '../../../../../redux/action/incident';

import './style.scss';

const ActionPanel = ({
  actionTabs, activeTabIndex, setActiveIndex,
}) => {
  const iconListB = [
    {
      key: 'agency_response',
      value: 'All Agency Response',
      icon: <Switch className="act-switch-icon action-icon-font" size="small" />,
    },
    {
      key: 'name_email',
      value: 'Name or Email',
      icon: <FontAwesomeIcon icon={faUserCircle} className="action-icon-font" color="#8392a5" />,
    },
    {
      key: 'more',
      value: 'More Options',
      icon: <FontAwesomeIcon icon={faEllipsisH} className="action-icon-font" color="#8392a5" />,
    },
  ];
  const [currentPos, setCurrentPos] = useState({
    name: 'Current position',
    position: {
      lat: -33.86566064617498,
      lng: 151.20870681376962,
    },
  });
  const [address, setAddress] = useState('');
  const [updateMapPos, setUpdateMapPos] = useState(false);

  const onSubmit = () => {
    console.log('submit');
  };

  const onChangeIndex = (id) => () => {
    setActiveIndex(id);
    setCurrentPos({
      name: 'Current position',
      position: {
        lat: -33.86566064617498,
        lng: 151.20870681376962,
      },
    });
    setAddress('');
  };

  const changePos = (value) => {
    setCurrentPos(value);
    getGeocode({
      location: {
        lat: value.position.lat,
        lng: value.position.lng,
      },
    }).then(
      (response) => {
        let address = 'Cannot determine address at this location.';
        if (response && response.length > 0) {
          address = response[0].formatted_address;
        }
        setAddress(address);
      },
      (error) => {
        console.error(error);
      },
    );
  };

  return (
    <div className="action-panel">
      <div className="action-panel__iconlist">
        <div className="action_tab_a action_part">
          {
            actionTabs.map((iconItem) => (
              <Tooltip
                id={iconItem.key}
                onClick={onChangeIndex(iconItem.id)}
                key={iconItem.key}
                className={`options-icon ${iconItem.id === activeTabIndex ? 'selected' : ''}`}
                placement="top"
                title={iconItem.value}
              >
                {iconItem.icon}
              </Tooltip>
            ))
          }
        </div>
        <span className="vertical_line" />
        <div className="action_tab_b action_part">
          {
            iconListB.map((iconItem) => (
              <Tooltip
                id={iconItem.key}
                key={iconItem.key}
                className="options-icon"
                placement="top"
                title={iconItem.value}
              >
                {iconItem.icon}
              </Tooltip>
            ))
          }
        </div>
      </div>
      <div className="action-tab-content mg-t-20">
        <form method="post" className="action-form" onSubmit={onSubmit}>
          {
            activeTabIndex === 0 ? (
              <>
                <DefaultAction />
                <PlacesAutocomplete
                  changePos={changePos}
                  address={address}
                  updateMapPos={updateMapPos}
                  setAddress={setAddress}
                  setUpdateMapPos={setUpdateMapPos}
                />
                <GoogleMapComponent
                  changePos={changePos}
                  markers={[currentPos]}
                  setUpdateMapPos={setUpdateMapPos}
                />
              </>
            ) : (
              <>
                <FieldAction tabIndex={activeTabIndex} />
                <div className="form-group row">
                  <label
                    htmlFor={`tab_${activeTabIndex}_field_dispatch-location_0`}
                    className="col-sm-4 col-form-label condensed-lb"
                  >
                    Dispatch
                    Location
                  </label>
                  <div className="col-sm-8">
                    <PlacesAutocomplete
                      changePos={changePos}
                      address={address}
                      updateMapPos={updateMapPos}
                      setAddress={setAddress}
                      setUpdateMapPos={setUpdateMapPos}
                    />
                  </div>
                </div>
                <GoogleMapComponent
                  changePos={changePos}
                  markers={[currentPos]}
                  setUpdateMapPos={setUpdateMapPos}
                />
              </>

            )
          }
        </form>
      </div>
    </div>
  );
};
ActionPanel.propTypes = {
  actionTabs: PropTypes.array.isRequired,
  activeTabIndex: PropTypes.number.isRequired,
  setActiveIndex: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    getTypeAheadList,
  },
  dispatch,
);

const mapStateToProps = (store) => ({
  typeList: store.incidentData.typeList,
});

export default connect(mapStateToProps, mapDispatchToProps)(ActionPanel);
