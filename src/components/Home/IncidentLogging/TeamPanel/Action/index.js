import React from 'react';
import PropTypes from 'prop-types'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Tooltip, Input } from "antd";
import { faEllipsisH } from "@fortawesome/pro-solid-svg-icons";
import { faUserCircle } from "@fortawesome/pro-regular-svg-icons";
import { Switch } from 'antd';
import DefaultAction from "./defaultAction";
import FieldAction from "./fieldAction";

import './style.scss';
import PlacesAutocomplete from "./FormElements/PlacesAutocomplete";


const ActionPanel = ({actionTabs, activeTabIndex, setActiveIndex}) => {
    const iconListB = [
        {key: 'agency_response', value: 'All Agency Response', icon: <Switch className='act-switch-icon action-icon-font' size="small" />},
        {key: 'name_email', value: 'Name or Email', icon: <FontAwesomeIcon icon={faUserCircle} className="action-icon-font" color='#8392a5'/>},
        {key: 'more', value: 'More Options', icon: <FontAwesomeIcon icon={faEllipsisH} className="action-icon-font" color='#8392a5'/>}
    ];

    const onSubmit = () => {
        console.log('submit');
    };

    return (
        <div className='action-panel'>
            <div className='action-panel__iconlist'>
                <div className='action_tab_a action_part'>
                    {
                        actionTabs.map((iconItem) => (
                            <Tooltip
                                id={iconItem.key}
                                onClick={() => setActiveIndex(iconItem.id)}
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
                    <div className="action-tab-content mg-t-20">
                        <form method="post" className="action-form" onSubmit={onSubmit}>
                            <FieldAction tabIndex={activeTabIndex} />
                            <div className="first-group mb-3">
                                <iframe
                                    className="mt-2"
                                    width="100%" height="250px"
                                    src="https://maps.google.com/maps?hl=en&amp;q=-33.8714672,151.2080955&amp;ie=UTF8&amp;t=&amp;z=17&amp;iwloc=B&amp;output=embed"
                                    frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"
                                />
                            </div>
                        </form>
                    </div>
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