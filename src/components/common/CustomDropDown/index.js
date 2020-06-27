import React from 'react';
import PropTypes from 'prop-types'
import { DownOutlined } from '@ant-design/icons';
import { Menu, Dropdown } from 'antd';

import './style.scss';

const CustomDropDown = ({dataList, title, Icon}) => {
    const menu = (
        <Menu>
            {
                dataList.map((dataItem) => (
                    <>
                        {
                            dataItem.list.map((item) => (
                                <Menu.Item key={item.key}>
                                    <a href="#" className="option-item">
                                        {item.icon}
                                        <span className="option-item__label">{item.value}</span>
                                    </a>
                                </Menu.Item>
                            ))
                        }
                        <Menu.Divider />
                    </>
                ))
            }
        </Menu>
    );

    return (
        <Dropdown overlay={menu} trigger={['click']}>
            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                <span className="ant-dropdown-title">
                    {Icon}
                    {title}
                </span>
                <DownOutlined />
            </a>
        </Dropdown>
    )
};

CustomDropDown.propTypes = {
    dataList: PropTypes.array,
};

CustomDropDown.defaultProps = {
    dataList: []
};

export default CustomDropDown;
