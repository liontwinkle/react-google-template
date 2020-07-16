import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHomeAlt,
} from '@fortawesome/pro-regular-svg-icons';
import CustomDropDown from '../../../common/CustomDropDown';
import ActionPanel from './Action';
import Announcement from './Announcement';
import Program from './Program';
import Update from './Update';

import CustomTab from '../../../common/CustomTab';

import { getActionTabs, setActiveIndex, saveActionData } from '../../../../redux/action/incident';

import './style.scss';

const TeamPanel = ({
  getActionTabs,
  setActiveIndex,
  saveActionData,
  sessionData,
  actionTabs,
  activeTabIndex,
  isCreating,
}) => {
  const [value, setValue] = useState({});
  const [errors, setErrors] = useState({
    tabIndex: null,
    type: null,
  });
  useEffect(() => {
    if (sessionData) {
      getActionTabs(sessionData.id_event, sessionData.id_instance);
    }
  }, [getActionTabs, sessionData]);

  const onSetData = (data) => {
    setValue({
      ...value,
      ...data,
    });
  };

  const resetValue = () => {
    setValue({});
  };

  const onValidation = (data) => {
    const keys = Object.keys(data);
    let result = true;
    const errorCase = {
      tabIndex: activeTabIndex,
      type: null,
    };
    if (keys.filter((keyItem) => (keyItem.includes('field_action-type'))).length === 0) {
      errorCase.type = true;
      result = false;
    }
    setErrors(errorCase);
    return result;
  };

  const onSubmit = () => {
    const saveData = {
      ...value,
      id_tab: activeTabIndex,
      id_event: sessionData.id_event,
      id_instance: sessionData.id_instance,
    };

    if (!isCreating && onValidation(saveData)) {
      saveActionData(saveData)
        .then(() => {
          console.log('success');
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };

  const tabList = [
    {
      key: 'action',
      value: 'Action',
      children: <ActionPanel
        actionTabs={actionTabs}
        activeTabIndex={activeTabIndex}
        setActiveIndex={setActiveIndex}
        errors={errors}
        setErrors={setErrors}
        onSetData={onSetData}
        value={value}
        resetValue={resetValue}
      />,
    },
    { key: 'update', value: 'Update', children: <Update /> },
    { key: 'program', value: 'Program', children: <Program /> },
    { key: 'announcement', value: 'Announcement', children: <Announcement /> },
  ];
  /**
   * we are using chat page of template here.
   */
  return (
    <div className="incident-sidebar d-flex flex-column justify-content-between">
      <div className="incident-sidebar-body">
        <CustomDropDown />
        <CustomTab tabList={tabList} />
        <div className=" nav_action_link flex-fill pd-y-20 pd-x-10 bd-t">
          <div id="chatDirectMsg" className="chat-msg-list">
            <a href="#" className="media">
              <FontAwesomeIcon icon={faHomeAlt} size="lg" />
              <div className="media-body p-2 ps">
                <h6 className="mg-b-0">Actions</h6>
                <small className="d-block tx-color-04">Team Actions</small>
              </div>
            </a>
            <a href="#" className="media">
              <FontAwesomeIcon icon={faHomeAlt} size="lg" />
              <div className="media-body mg-l-10">
                <h6 className="mg-b-0">Updates</h6>
                <small className="d-block tx-color-04">Last Updates</small>
              </div>
            </a>
            <a href="#" className="media">
              <FontAwesomeIcon icon={faHomeAlt} size="lg" />
              <div className="media-body mg-l-10">
                <h6 className="mg-b-0">Announcement</h6>
                <small className="d-block tx-color-04">Team Announcement</small>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="chat-sidebar-footer w-100 p-2">
        <button type="submit" className="btn btn-secondary btn-block" onClick={onSubmit}>Submit</button>
      </div>
    </div>
  );
};

TeamPanel.propTypes = {
  getActionTabs: PropTypes.func,
  setActiveIndex: PropTypes.func,
  saveActionData: PropTypes.func.isRequired,
  sessionData: PropTypes.object,
  actionTabs: PropTypes.array,
  activeTabIndex: PropTypes.number,
  isCreating: PropTypes.bool,
};

TeamPanel.defaultProps = {
  getActionTabs: () => {},
  setActiveIndex: () => {},
  sessionData: {},
  actionTabs: [],
  activeTabIndex: 0,
  isCreating: false,
};

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    getActionTabs,
    setActiveIndex,
    saveActionData,
  },
  dispatch,
);

const mapStateToProps = (store) => ({
  sessionData: store.sessionData.sessionData,
  actionTabs: store.incidentData.actionTabs,
  activeTabIndex: store.incidentData.activeTabIndex,
  isCreating: store.incidentData.isCreating,
});

export default connect(mapStateToProps, mapDispatchToProps)(TeamPanel);
