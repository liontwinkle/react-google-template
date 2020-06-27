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
    {name: 'item1'},
    {name: 'item2'},
    {name: 'item3'},
    {name: 'item4'},
    {name: 'item5'},
    {name: 'item6'},
    {name: 'item7'},
    {name: 'item8'},
    {name: 'item9'}
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