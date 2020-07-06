import React from 'react';
import PropTypes from 'prop-types'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Tooltip, Input } from "antd";
import { faEllipsisH } from "@fortawesome/pro-solid-svg-icons";
import { faUserCircle } from "@fortawesome/pro-regular-svg-icons";
import { Switch } from 'antd';
import DefaultAction from "./defaultAction";

import './style.scss';
import FieldAction from "./fieldAction";


const ActionPanel = ({actionTabs, activeTabIndex, setActiveIndex}) => {
    console.log('active tab index: ', activeTabIndex); // fixme
    const iconListB = [
        {key: 'agency_response', value: 'All Agency Response', icon: <Switch className='act-switch-icon action-icon-font' size="small" />},
        {key: 'name_email', value: 'Name or Email', icon: <FontAwesomeIcon icon={faUserCircle} className="action-icon-font" color='#8392a5'/>},
        {key: 'more', value: 'More Options', icon: <FontAwesomeIcon icon={faEllipsisH} className="action-icon-font" color='#8392a5'/>}
    ];

    return (
        <div className='action-panel'>
            <div className='action-panel__iconlist'>
                <div className='action_tab_a action_part'>
                    {
                        actionTabs.map((iconItem) => (
                            <Tooltip id={iconItem.key} onClick={() => setActiveIndex(iconItem.id)} key={iconItem.key} className="options-icon" placement="top" title={iconItem.value}>
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
            {
                activeTabIndex === 0 ? (
                    <DefaultAction />
                ) : (
                    <FieldAction tabIndex={activeTabIndex} />
                )
            }
        </div>
    )
};
ActionPanel.propTypes = {
    actionTabs: PropTypes.array.isRequired,
    activeTabIndex: PropTypes.number,
};
export default ActionPanel;