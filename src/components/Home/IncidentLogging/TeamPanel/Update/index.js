import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Tooltip, Switch, Input } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisHAlt } from '@fortawesome/pro-solid-svg-icons';
import { faUserCircle } from '@fortawesome/pro-regular-svg-icons';

import './style.scss';

const Update = ({
  actionTabs,
  activeTabIndex,
  setActiveIndex,
  setErrors,
  resetValue,
}) => {
  const { TextArea } = Input;

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

  const onChangeIndex = (id) => () => {
    setActiveIndex(id);
    resetValue();
    setErrors({
      tabIndex: null,
      type: null,
      location: null,
    });
  };

  return (
    <div className="action-panel update-panel">
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
      <label>Update</label>
      <TextArea rows={4} placeholder="Update" />
    </div>
  );
};

Update.propTypes = {
  actionTabs: PropTypes.array.isRequired,
  activeTabIndex: PropTypes.number.isRequired,
  setActiveIndex: PropTypes.func.isRequired,
  value: PropTypes.object,
  onSetData: PropTypes.func.isRequired,
  resetValue: PropTypes.func.isRequired,
  setErrors: PropTypes.func.isRequired,
  errors: PropTypes.object,
};

Update.defaultProps = {
  value: null,
  errors: {},
};

const mapStateToProps = (store) => ({
  typeList: store.incidentData.typeList,
});

export default connect(mapStateToProps)(Update);
