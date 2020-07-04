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

export const mentions = [
    {
        name: 'Matthew Russell',
        title: 'Senior Software Engineer',
        avatar: 'https://pbs.twimg.com/profile_images/517863945/mattsailing_400x400.jpg',
    },
    {
        name: 'Julian Krispel-Samsel',
        title: 'United Kingdom',
        avatar: 'https://avatars2.githubusercontent.com/u/1188186?v=3&s=400',
    },
    {
        name: 'Jyoti Puri',
        title: 'New Delhi, India',
        avatar: 'https://avatars0.githubusercontent.com/u/2182307?v=3&s=400',
    },
    {
        name: 'Max Stoiber',
        title: 'Travels around the world, brews coffee, skis mountains and makes stuff on the web.',
        avatar: 'https://pbs.twimg.com/profile_images/763033229993574400/6frGyDyA_400x400.jpg',
    },
    {
        name: 'Nik Graf',
        title: 'Passionate about Software Architecture, UX, Skiing & Triathlons',
        avatar: 'https://avatars0.githubusercontent.com/u/223045?v=3&s=400',
    },
    {
        name: 'Pascal Brandt',
        title: 'HeathIT hacker and researcher',
        avatar: 'https://pbs.twimg.com/profile_images/688487813025640448/E6O6I011_400x400.png',
    },
    {
        name: 'Łukasz Bąk',
        title: 'Randomly Generated User',
        avatar: 'https://randomuser.me/api/portraits/men/36.jpg',
    },
];
