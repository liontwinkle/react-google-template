import React from 'react';
import CustomDropDown from "../../../common/CustomDropDown";
import ActionPanel from './Action';
import Announcement from "./Announcement";
import Program from "./Program";
import Update from "./Update";

import { TeamSettingData } from '../../../../constants/static';
import {CopyrightCircleFilled} from '@ant-design/icons';
import CustomTab from "../../../common/CustomTab";

import './style.scss';

const TeamPanel = () => {
    const tabList = [
        {key: 'action', value: 'Action', children: <ActionPanel />},
        {key: 'update', value: 'Update', children: <Update />},
        {key: 'program', value: 'Program', children: <Program />},
        {key: 'announcement', value: 'Announcement', children: <Announcement />}
    ];

    return (
        <div className="team-panel">
            <CustomDropDown dataList={TeamSettingData} Icon={<CopyrightCircleFilled />} title="TeamName"/>
            <CustomTab tabList={tabList} />
        </div>
    )
};

export default TeamPanel;