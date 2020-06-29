import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Tooltip, Input } from "antd";
import {
    faSirenOn,
    faUserCircle,
    faEllipsisH
} from "@fortawesome/pro-solid-svg-icons";

import {
    faAmbulance,
    faChild,
    faCctv
} from "@fortawesome/pro-regular-svg-icons"
import {
    faFireAlt
} from "@fortawesome/pro-duotone-svg-icons"

import { Switch } from 'antd';
import GoogleMapComponent from '../../../../common/GoogleMap';

import './style.scss';

const ActionPanel = () => {
    const iconListA = [
        {key: 'police', value: 'Police', icon: <FontAwesomeIcon icon={faSirenOn} className="action-icon-font" color='#8392a5' />},
        {key: 'fire_rescue', value: 'Fire / Rescue', icon: <FontAwesomeIcon icon={faFireAlt} className="action-icon-font" color='#8392a5' />},
        {key: 'ambulance', value: 'Ambulance / First-Aid', icon: <FontAwesomeIcon icon={faAmbulance} className="action-icon-font" color='#8392a5'/>},
        {key: 'missing', value: 'Missing Lost Child or Vunerable', icon:<FontAwesomeIcon icon={faChild} className="action-icon-font" color='#8392a5'/>},
        {key: 'security', value: 'Security', icon:<FontAwesomeIcon icon={faCctv} size={"2x"} className="action-icon-font" color='#8392a5'/>},
    ];
    const iconListB = [
        {key: 'agency_response', value: 'All Agency Response', icon: <Switch className='act-switch-icon action-icon-font' size="small" />},
        {key: 'name_email', value: 'Name or Email', icon: <FontAwesomeIcon icon={faUserCircle} className="action-icon-font" color='#8392a5'/>},
        {key: 'more', value: 'More Options', icon: <FontAwesomeIcon icon={faEllipsisH} className="action-icon-font" color='#8392a5'/>}
    ];
    const { TextArea } = Input;
    return (
        <div className='action-panel'>
            <div className='action-panel__iconlist'>
                <div className='action_tab_a action_part'>
                    {
                        iconListA.map((iconItem) => (
                            <Tooltip id={iconItem.key} key={iconItem.key} className="options-icon" placement="top" title={iconItem.value}>
                                {iconItem.icon}
                            </Tooltip>
                        ))
                    }
                </div>
                <span className="vertical_line" />
                <div className="action_tab_b action_part">
                    {
                        iconListB.map((iconItem) => (
                            <Tooltip id={iconItem.key} key={iconItem.key} className="options-icon" placement="top" title={iconItem.value}>
                                {iconItem.icon}
                            </Tooltip>
                        ))
                    }
                </div>
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