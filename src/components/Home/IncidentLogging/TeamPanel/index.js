import React, { useEffect, useState } from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import PropTypes from 'prop-types'
import CustomDropDown from "../../../common/CustomDropDown";
import ActionPanel from './Action';
import Announcement from "./Announcement";
import Program from "./Program";
import Update from "./Update";

import CustomTab from "../../../common/CustomTab";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faHomeAlt,
} from '@fortawesome/pro-regular-svg-icons';

import {getActionTabs, setActiveIndex} from "../../../../redux/action/incident";

import './style.scss';

const TeamPanel = ({
                       getActionTabs,
                       setActiveIndex,
                       sessionData,
                       isFetchingFlag,
                       actionTabs,
                       activeTabIndex,
                   }) => {
    useEffect(() => {
        if(sessionData) {
            getActionTabs(sessionData.id_event, sessionData.id_instance);
        }
    }, [getActionTabs]);

    const tabList = [
        {key: 'action', value: 'Action', children: <ActionPanel actionTabs={actionTabs} activeTabIndex={activeTabIndex} setActiveIndex={setActiveIndex}/>},
        {key: 'update', value: 'Update', children: <Update/>},
        {key: 'program', value: 'Program', children: <Program/>},
        {key: 'announcement', value: 'Announcement', children: <Announcement/>}
    ];
    /**
     * we are using chat page of template here.
     */
    return (
        <div className="incident-sidebar d-flex flex-column justify-content-between">
            <div className="incident-sidebar-body">
                <CustomDropDown/>
                <CustomTab tabList={tabList}/>
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
                <button type="button" className="btn btn-secondary btn-block">Submit</button>
            </div>
        </div>
    )
};

TeamPanel.propTypes = {
    isFetchingFlag: PropTypes.bool,
    getActionTabs: PropTypes.func,
    setActiveIndex: PropTypes.func,
    sessionData: PropTypes.object,
    actionTabs: PropTypes.array,
    activeTabIndex: PropTypes.number,
};

TeamPanel.defaultProps = {
    getActionTabs: () => {},
    setActiveIndex: () => {},
    isFetchingFlag: false,
    sessionData: {},
    actionTabs:[],
    activeTabIndex: 0,
};

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            getActionTabs,
            setActiveIndex
        },
        dispatch
    );

const mapStateToProps = store => ({
    isFetchingFlag: store.incidentData.isFetchingFlag,
    sessionData: store.sessionData.sessionData,
    actionTabs: store.incidentData.actionTabs,
    activeTabIndex: store.incidentData.activeTabIndex,
});

export default connect(mapStateToProps, mapDispatchToProps)(TeamPanel)
