import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Tooltip, Input } from "antd";
import {
    faAmbulance,
    faChild,
    faVideo,
    faUserCircle,
    faEllipsisH
} from "@fortawesome/free-solid-svg-icons";
import {
    AlertOutlined,
    FireOutlined
} from "@ant-design/icons";
import { Switch } from 'antd';
import GoogleMapComponent from '../../../../common/GoogleMap';

import './style.scss';

const ActionPanel = () => {
    const iconList = [
        {key: 'police', value: 'Police', icon: <AlertOutlined />},
        {key: 'fire_rescue', value: 'Fire / Rescue', icon: <FireOutlined />},
        {key: 'ambulance', value: 'Ambulance / First-Aid', icon: <FontAwesomeIcon icon={faAmbulance}/>},
        {key: 'missing', value: 'Missing Lost Child or Vunerable', icon:<FontAwesomeIcon icon={faChild}/>},
        {key: 'security', value: 'Security', icon:<FontAwesomeIcon icon={faVideo}/>},
        {key: 'agency_response', value: 'All Agency Response', icon: <Switch className='act-switch-icon' />},
        {key: 'name_email', value: 'Name or Email', icon: <FontAwesomeIcon icon={faUserCircle}/>},
        {key: 'more', value: 'More Options', icon: <FontAwesomeIcon icon={faEllipsisH}/>}
    ];
    const { TextArea } = Input;
    return (
        <div className='action-panel'>
            <div className='action-panel__iconlist'>
                {
                    iconList.map((iconItem) => (
                        <Tooltip id={iconItem.key} className="options-icon" placement="top" title={iconItem.value}>
                            {iconItem.icon}
                        </Tooltip>
                    ))
                }
            </div>
            <TextArea rows={4} placeholder="Action Information"/>
            <Input placeholder="Title*" allowClear />
            <Input placeholder="Area / Grid / Room*" allowClear />
            <br/>
            <GoogleMapComponent isMarkerShown />
        </div>
    )
};
export default ActionPanel;