import React from 'react';
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


import './style.scss';

const TeamPanel = () => {
    const tabList = [
        {key: 'action', value: 'Action', children: <ActionPanel/>},
        {key: 'update', value: 'Update', children: <Update/>},
        {key: 'program', value: 'Program', children: <Program/>},
        {key: 'announcement', value: 'Announcement', children: <Announcement/>}
    ];

    return (
        <div className="chat-sidebar d-flex flex-column justify-content-between">
            <div className="chat-sidebar-body">
                <CustomDropDown/>
                <CustomTab tabList={tabList}/>
                <div className=" nav_action_link flex-fill pd-y-20 pd-x-10 bd-t">
                    <div id="chatDirectMsg" className="chat-msg-list">
                        <a href="#" className="media">
                            <FontAwesomeIcon icon={faHomeAlt} size="lg" />
                            <div className="media-body mg-l-10">
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

export default TeamPanel;