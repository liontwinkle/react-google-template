import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
    Tooltip, Dropdown, Menu,
} from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEllipsisHAlt,
} from '@fortawesome/pro-light-svg-icons';
import CustomTab from '../../../common/CustomTab';
import InformationTab from './InformationTab';

import './style.scss';

const IncidentDetails = ({ type, index, incidentData, handleClick }) => {
    const ellipseMenu = (
        <Menu>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="#dropdown">
                    Option 1
                </a>
            </Menu.Item>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="#dropdown">
                    Option 2
                </a>
            </Menu.Item>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="#dropdown">
                    Option 3
                </a>
            </Menu.Item>
        </Menu>
    );

    const tabList = [
        {
          key: 'information',
          value: 'Information',
          children: <InformationTab/>,
        },
        {
          key: 'logs',
          value: 'Message logs',
          children: <div>Message logs</div>,
        },
      ];


    return (
        <div>
            <CustomTab tabList={tabList} />
            <Tooltip placement="top" title="More Options" className="close pos-absolute t-15 r-50">
              <Dropdown overlay={ellipseMenu} trigger={['click']}>
                <FontAwesomeIcon icon={faEllipsisHAlt} size="lg" color="#8392a5" />
              </Dropdown>
            </Tooltip>
            <button type="button" className="close pos-absolute t-15 r-20" onClick={() => handleClick(null, null)} >
              <span>×</span>
            </button>
        </div>
    );
};

IncidentDetails.propTypes = {
    type: PropTypes.string,
    index: PropTypes.number,
    incidentData: PropTypes.object, // todo remove
};

IncidentDetails.defaultProps = {
    type: 'Action',
    index: 0,
    incidentData: null, // todo remove
};

const mapStateToProps = (store) => ({
    incidentData: store.incidentData.incidentData,
});
export default connect(mapStateToProps)(IncidentDetails);
