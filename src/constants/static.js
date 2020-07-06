import React from 'react';
import {
    UserAddOutlined,
    PlusSquareOutlined,
    BellOutlined,
    ThunderboltOutlined,
    EditOutlined,
    EyeInvisibleOutlined
} from "@ant-design/icons";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faServer
} from "@fortawesome/free-solid-svg-icons";

import _clone from 'lodash/clone'
import _escapeRegExp from 'lodash/escapeRegExp'
import _uniqBy from 'lodash/uniqBy'


const TeamName = [
    {key: 'invite_people', value: 'Invite People', icon: <UserAddOutlined />},
    {key: 'create_channel', value: 'Create Channel', icon: <PlusSquareOutlined />},
    {key: 'server_settings', value: 'Server Settings', icon: <FontAwesomeIcon icon={faServer}/>},
    {key: 'notification_settings', value: 'Notification Settings', icon: <BellOutlined />},
    {key: 'privacy_settings', value: 'Privacy Settings', icon: <ThunderboltOutlined />}
];

const TeamAction = [
    {key: 'edit_team_details, ', value: 'Edit Team Details', icon: <EditOutlined />},
    {key: 'hide_muted_channels, ', value: 'Hide Muted Channels', icon: <EyeInvisibleOutlined />},
];

export const Datalist = [
    {name: 'Actions'},
    {name: 'Updates'},
    {name: 'Announcement'},
    {name: 'Location'},
    {name: 'Geo'},
    {name: 'Upload'},
    {name: 'Video'},
];
export const TeamSettingData = [
    {list: TeamName},
    {list: TeamAction}
];

export const ProgramStatus = [
    {key: 'program_status', value: 'Program Status'},
    {key: 'one', value: 'One'},
    {key: 'two', value: 'Two'},
    {key: 'three', value: 'Three'}
];

export const ProgramStatusType = [
    {key: 'program_status_type', value: 'Program Status Type'},
    {key: 'one', value: 'One'},
    {key: 'two', value: 'Two'},
    {key: 'three', value: 'Three'}
];

export const users =[
    {
        id: 'aaa',
        display: 'aaa'
    }
];


export function swapTags(text){
    let displayText = _clone(text)
    const tags = text.match(/@\{\{[^\}]+\}\}/gi) || []
    tags.map(myTag => {
        const tagData = myTag.slice(3, -2)
        const tagDataArray = tagData.split('||')
        const tagDisplayValue = tagDataArray[2]
        displayText = displayText.replace(new RegExp(_escapeRegExp(myTag), 'gi'), tagDisplayValue)
    });
    return displayText
}

export function getUsersFromTags(text){
    let displayText = _clone(text)
    const tags = text.match(/@\{\{[^\}]+\}\}/gi) || []
    const allUserIds = tags.map(myTag => {
        const tagData = myTag.slice(3, -2)
        const tagDataArray = tagData.split('||')
        return {_id: tagDataArray[1], name: tagDataArray[2]}
    })
    return _uniqBy(allUserIds, myUser => myUser._id)
}