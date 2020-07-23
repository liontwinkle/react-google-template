import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Tooltip, Switch, Input } from 'antd';
import { getGeocode } from 'use-places-autocomplete';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisHAlt } from '@fortawesome/pro-solid-svg-icons';
import { faUserCircle } from '@fortawesome/pro-regular-svg-icons';

import FieldAction from './fieldAction';

import PlacesAutocomplete from '../../../../common/PlaceAutoComplete';
import GoogleMapComponent from '../../../../common/GoogleMap';

import { getTypeAheadList } from '../../../../../redux/action/incident';

import './style.scss';
import SimpleMentionEditor from '../../../../common/CustomMention';

const ActionPanel = ({
  actionTabs,
  activeTabIndex,
  setActiveIndex,
  errors,
  value,
  onSetData,
  setErrors,
  resetValue,
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
      icon: <FontAwesomeIcon icon={faEllipsisHAlt} className="action-icon-font" color="#8392a5" />,
    },
  ];
  const [currentPos, setCurrentPos] = useState({
    name: 'Current position',
    address: '',
    position: {
      lat: -33.86566064617498,
      lng: 151.20870681376962,
    },
  });
  const [updateMapPos, setUpdateMapPos] = useState(false);

  const onChangeIndex = (id) => () => {
    setActiveIndex(id);
    resetValue();
    setErrors({
      tabIndex: null,
      type: null,
      location: null,
    });
    setCurrentPos({
      name: 'Current position',
      address: '',
      position: {
        lat: -33.86566064617498,
        lng: 151.20870681376962,
      },
    });
  };

  const changePos = (value) => {
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
        onSetData({
          [`tab_${activeTabIndex}_field_dispatch-location_${activeTabIndex}`]: {
            address,
            lat: value.position.lat,
            lng: value.position.lng,
          },
        });
        setCurrentPos({
          ...value,
          address,
        });
      },
      (error) => {
        console.error(error);
      },
    );
  };

  const onTitleChange = (e) => {
    onSetData({ 'tab_0_field_action-type_0': e.target.value });
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
        {
          activeTabIndex === 0 ? (
            <>
              <SimpleMentionEditor
                setEditorState={onSetData}
                editorState={value ? value['tab_0_field_action-info_0'] : null}
                fieldId="tab_0_field_action-info_0"
              />
              <Input
                name="title"
                placeholder="Title*"
                value={(value && value['tab_0_field_action-type_0']) || ''}
                onChange={onTitleChange}
                allowClear
              />
              {errors.type && (
                <div className="validation-error">
                  This field is required.
                </div>
              )}
              <PlacesAutocomplete
                changePos={changePos}
                currentPos={currentPos}
                updateMapPos={updateMapPos}
                setCurrentPos={setCurrentPos}
                setUpdateMapPos={setUpdateMapPos}
                tabIndex={activeTabIndex}
                onSetData={onSetData}
              />
              <GoogleMapComponent
                changePos={changePos}
                markers={[currentPos]}
                setUpdateMapPos={setUpdateMapPos}
                errors={errors}
              />
            </>
          ) : (
            <>
              <FieldAction
                tabIndex={activeTabIndex}
                errors={errors}
                value={value}
                onSetData={onSetData}
                setErrors={setErrors}
              />
              <div className="form-group row">
                <label
                  htmlFor={`tab_${activeTabIndex}_field_dispatch-location_0`}
                  className="col-sm-4 col-form-label condensed-lb"
                >
                  Dispatch Location
                </label>
                <div className="col-sm-8">
                  <PlacesAutocomplete
                    changePos={changePos}
                    currentPos={currentPos}
                    updateMapPos={updateMapPos}
                    setCurrentPos={setCurrentPos}
                    setUpdateMapPos={setUpdateMapPos}
                    tabIndex={activeTabIndex}
                    onSetData={onSetData}
                  />
                </div>
              </div>
              <GoogleMapComponent
                changePos={changePos}
                markers={[currentPos]}
                setUpdateMapPos={setUpdateMapPos}
                errors={errors}
              />
            </>
          )
        }
      </div>
    </div>
  );
};

ActionPanel.propTypes = {
  actionTabs: PropTypes.array.isRequired,
  activeTabIndex: PropTypes.number.isRequired,
  setActiveIndex: PropTypes.func.isRequired,
  value: PropTypes.object,
  onSetData: PropTypes.func.isRequired,
  resetValue: PropTypes.func.isRequired,
  setErrors: PropTypes.func.isRequired,
  errors: PropTypes.object,
};

ActionPanel.defaultProps = {
  value: null,
  errors: {},
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
