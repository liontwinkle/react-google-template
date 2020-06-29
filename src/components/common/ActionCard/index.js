import React from 'react';
import PropTypes from 'prop-types'
import {Tooltip, Button, Dropdown, Menu} from 'antd';
import {CheckOutlined} from '@ant-design/icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faCommentAlt,
    faPaperclip,
    faEllipsisHAlt,
    faThumbsUp
} from "@fortawesome/pro-light-svg-icons";

import {
    faLink
} from "@fortawesome/pro-regular-svg-icons";

import './style.scss';

const ActionCard = ({type, index}) => {
    const ellipseMenu = (
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

    const shareMenu = (
        <Menu>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
                    Share Action
                </a>
            </Menu.Item>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
                    Share with instance...
                </a>
            </Menu.Item>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
                    Share with ground personnel
                </a>
            </Menu.Item>
        </Menu>
    );

    const attachMenu = (
        <Menu>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
                    Attach a File
                </a>
            </Menu.Item>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
                    Your Computer
                </a>
            </Menu.Item>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
                    CommandPost Directory
                </a>
            </Menu.Item>
        </Menu>
    );
    return (
        <div className="card card-event">
            <div className="card-body tx-13">
                <div className="action-card-title d-flex justify-content-between align-items-center">
                    <p>#210 Signage Hazard - Millstons Point</p>
                    <label className="pt-0 pb-0 pl-2 pr-2 rounded d-flex align-items-center m-0">3m</label>
                </div>
                <p className="action-card-subheader pt-0 pb-0 pl-2 pr-2 rounded d-flex align-items-center m-0 bg-dark">Event
                    Control Centre(ECC)</p>

                <label className="action-card-content">
                    Royalty-free(RF) material subject to copyright subject to copyright or other intellectual property
                    rights may be used rights may be used without the need to pay royalities or liences fees for each
                    use.
                </label>
            </div>
            <div className="card-footer tx-13 d-flex flex-column align-items-center">
                <div className="w-100 d-flex justify-content-between align-items-center p-2">
                    <div className="avatar avatar-sm avatar-online">
                        <span className="avatar-initial rounded-circle bg-pink-light">AR</span>
                    </div>
                    <Button
                        className="bt-markcomp d-flex justify-content-around align-items-center"
                        type="secondary"
                        icon={<CheckOutlined/>}
                    >
                        Mark Complete
                    </Button>
                    <nav className="w-50 d-flex align-items-center justify-content-around">
                        <Tooltip placement="top" title="Comment">
                            <a data-toggle="collapse" href={`#${type}-${index}`} role="button" aria-expanded="false"
                               aria-controls="collapseExample">
                                <FontAwesomeIcon icon={faCommentAlt} size="lg" color="#8392a5"/>
                                <span className="ml-1 text-blue">2</span>
                            </a>
                        </Tooltip>
                        <Tooltip placement="top" title="Attachment">
                            <Dropdown overlay={attachMenu} trigger={['click']}>
                                <FontAwesomeIcon icon={faPaperclip} size="lg" color="#8392a5"/>
                            </Dropdown>
                        </Tooltip>
                        <Tooltip placement="top" title="Share">
                            <Dropdown overlay={shareMenu} trigger={['click']}>
                                <FontAwesomeIcon icon={faLink} size="lg" color="#8392a5"/>
                            </Dropdown>
                        </Tooltip>
                        <Tooltip placement="top" title="More Options">
                            <Dropdown overlay={ellipseMenu} trigger={['click']}>
                                <FontAwesomeIcon icon={faEllipsisHAlt} size="lg" color="#8392a5"/>
                            </Dropdown>
                        </Tooltip>
                    </nav>
                </div>
                <div className="collapse w-100" id={`${type}-${index}`}>
                    <div className="chat-group w-100 d-flex flex-column align-items-between p-2">
                        <label className="tx-14 font-weight-bold mt-2">Replying to
                            <a href="#">@AustralianOpen</a>
                            <a href="#">@nyhro</a>
                        </label>
                        <input type="text" className="form-control mb-4" placeholder="What's happening?" />
                        <div className="media d-flex justify-content-between">
                            <>
                                <div className="avatar avatar-sm avatar-online">
                                    <span className="avatar-initial rounded-circle  bg-pink-light">k</span>
                                </div>
                                <div className="media-body">
                                    <h6>katherine <small>Today at 1:30am</small></h6>

                                    <p>Hello everyone, this is my first message to this channel</p>
                                    <p>anybody here?</p>
                                </div>
                            </>
                            <FontAwesomeIcon icon={faThumbsUp} size="lg" color="#8392a5"/>
                        </div>
                        <div className="media d-flex justify-content-between">
                            <>
                                <div className="avatar avatar-sm avatar-online">
                                    <span className="avatar-initial rounded-circle  bg-pink-light">k</span>
                                </div>
                                <div className="media-body">
                                    <h6>katherine <small>Today at 1:30am</small></h6>
                                    <p>Hello everyone, this is my first message to this channel</p>
                                    <p>Hello everyone, this is my first message to this channel</p>
                                    <p>Hello everyone, this is my first message to this channel</p>
                                    <p>Hello everyone, this is my first message to this channel</p>
                                    <p>Hello everyone, this is my first message to this channel</p>
                                    <p>Hello everyone, this is my first message to this channel</p>
                                    <p>anybody here?</p>
                                </div>
                            </>
                            <FontAwesomeIcon icon={faThumbsUp} size="lg" color="#8392a5"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

ActionCard.propTypes = {
    type: PropTypes.string,
    index: PropTypes.number,
};

ActionCard.defaultProps = {
    type: 'Action',
    index: 0,
};

export default ActionCard;