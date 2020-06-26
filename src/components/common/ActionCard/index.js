import React from 'react';
import { Card, Badge, Avatar, Button, Dropdown, Menu } from 'antd';
import {
    UserOutlined,
    CheckOutlined,
    MessageOutlined,
    PaperClipOutlined,
    LinkOutlined,
    EllipsisOutlined
} from '@ant-design/icons';

import './style.scss';

const ActionCard = () => {
    const menu = (
        <Menu>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
                    More options
                </a>
            </Menu.Item>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
                    Export
                </a>
            </Menu.Item>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
                    Create task
                </a>
            </Menu.Item>
        </Menu>
    );
    return (
        <Card className="action-card-container">
            <div  className="action-card-body">
                <div className="action-card-title">
                    <p>#210 Signage Hazard - Millstons Point</p>
                    <label>3m</label>
                </div>
                <h5 className="action-card-subheader">Event Control Centre(ECC)</h5>
                <label className="action-card-content">
                    Royalty-free(RF) material subject to copyright subject to copyright or other intellectual property rights may be used rights may be used without the need to pay royalities or liences fees for each  use.
                </label>
            </div>
            <div className="action-card-footer">
                <Badge dot>
                    <Avatar shape="circle" icon={<UserOutlined />} />
                </Badge>
                <Button
                    type="secondary"
                    icon={<CheckOutlined />}
                >
                    Mark Complete
                </Button>
                <span className="action-card-msg">
                    <MessageOutlined /> <label>2</label>
                </span>
                <PaperClipOutlined />
                <LinkOutlined />
                <Dropdown overlay={menu}>
                    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                        <EllipsisOutlined />
                    </a>
                </Dropdown>
            </div>
        </Card>
    )
};

export default ActionCard;