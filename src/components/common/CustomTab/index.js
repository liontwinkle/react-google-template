import React from 'react';
import PropTypes from 'prop-types'
import { Tabs } from 'antd';
import './style.scss';

const CustomTab = ({tabList}) => {
    const { TabPane } = Tabs;

    const callback = (key) => {
        console.log(key);
    };

    return (
        <Tabs defaultActiveKey="1" onChange={callback}>
            {
                tabList.map((tabItem) => (
                    <TabPane tab={tabItem.value} key={tabItem.key}>
                        {tabItem.children}
                    </TabPane>
                ))
            }
        </Tabs>
    )
};

CustomTab.propTypes = {
    tabList: PropTypes.array,
};

CustomTab.defaultProps = {
    tabList: []
};

export default CustomTab;
