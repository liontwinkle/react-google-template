import React from 'react';
import PropTypes from 'prop-types'
import { Tabs } from 'antd';
import './style.scss';
import ActionPanel from "../../Home/IncidentLogging/TeamPanel/Action";
import Update from "../../Home/IncidentLogging/TeamPanel/Update";
import Program from "../../Home/IncidentLogging/TeamPanel/Program";
import Announcement from "../../Home/IncidentLogging/TeamPanel/Announcement";

const CustomTab = ({tabList}) => {
    const { TabPane } = Tabs;

    const callback = (key) => {
        console.log(key);
    };

    return (
        // <Tabs defaultActiveKey="1" onChange={callback}>
        //     {
        //         tabList.map((tabItem) => (
        //             <TabPane tab={tabItem.value} key={tabItem.key}>
        //                 {tabItem.children}
        //             </TabPane>
        //         ))
        //     }
        // </Tabs>
        <div>
            <ul className="nav nav-line" id="command_tabs" role="tablist">
                <li className="nav-item">
                    <a className="nav-link active" id="home-tab4" data-toggle="tab" href="#action-tab" role="tab" aria-controls="home" aria-selected="true">Action</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" id="profile-tab4" data-toggle="tab" href="#update-tab" role="tab" aria-controls="profile" aria-selected="false">Update</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" id="contact-tab4" data-toggle="tab" href="#program-tab" role="tab" aria-controls="contact" aria-selected="false">Program</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" id="contact-tab4" data-toggle="tab" href="#annonce-tab" role="tab" aria-controls="contact" aria-selected="false">Announcement</a>
                </li>
            </ul>
            <div className="media-body p-2 ps">
                <div className="tab-pane fade show active" id="action-tab" role="tabpanel" aria-labelledby="home-tab4">
                    <ActionPanel />
                </div>
                <div className="tab-pane fade" id="update-tab" role="tabpanel" aria-labelledby="profile-tab4">
                    <Update />
                </div>
                <div className="tab-pane fade" id="program-tab" role="tabpanel" aria-labelledby="contact-tab4">
                    <Program />
                </div>
                <div className="tab-pane fade" id="annonce-tab" role="tabpanel" aria-labelledby="contact-tab4">
                    <Announcement />
                </div>
            </div>
        </div>
    )
};

CustomTab.propTypes = {
    tabList: PropTypes.array,
};

CustomTab.defaultProps = {
    tabList: []
};

export default CustomTab;
