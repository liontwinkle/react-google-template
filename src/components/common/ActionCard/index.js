import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Tooltip, Button, Dropdown, Menu,
} from 'antd';
import { CheckOutlined } from '@ant-design/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCommentAlt,
  faPaperclip,
  faEllipsisHAlt,
  faThumbsUp,
} from '@fortawesome/pro-light-svg-icons';

import {
  faLink,
} from '@fortawesome/pro-regular-svg-icons';

import './style.scss';

const ActionCard = ({ type, index, incidentData, CEIndex, handleClick }) => {
  const ellipseMenu = (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="#dropdown">
          More options
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="#dropdown">
          Export
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="#dropdown">
          Create task
        </a>
      </Menu.Item>
    </Menu>
  );

  const shareMenu = (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="#dropdown">
          Share Action
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="#dropdown">
          Share with instance...
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="#dropdown">
          Share with ground personnel
        </a>
      </Menu.Item>
    </Menu>
  );

  const attachMenu = (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="#dropdown">
          Attach a File
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="#dropdown">
          Your Computer
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="#dropdown">
          CommandPost Directory
        </a>
      </Menu.Item>
    </Menu>
  );
  const renderIncident = () => {
    const keys = incidentData ? Object.keys(incidentData) : [];
    return (
      <>
        <p>data:</p>
        {
          keys.map((keyitem) => (
            keyitem.includes('dispatch-location') ? (
              <span key={keyitem}>
                <label>{`${keyitem}=> `}</label>
                <label>{incidentData[keyitem].address}</label>
                {' '}
                <br />
                <label>{incidentData[keyitem].lat}</label>
                <br />
                <label>{incidentData[keyitem].lng}</label>
                <br />
                <br />
              </span>
            ) : (
              <span key={keyitem}>
                <label>{`${keyitem}=> `}</label>
                <label>{incidentData[keyitem]}</label>
                <br />
              </span>
            )

          ))
        }
      </>
    );
  };
  return (
    <div className="card card-event">
      <div className="card-body tx-13">
        <div className="action-card-title d-flex justify-content-between align-items-center" onClick={() => handleClick(index, CEIndex)}>
          <p>#210 Signage Hazard - Millstons Point</p>
          <span className="pt-0 pb-0 pl-2 pr-2 rounded d-flex align-items-center m-0">3m</span>
        </div>
        <span className="action-card-subheader pt-0 pb-0 pl-2 pr-2 rounded d-flex align-items-center bg-dark">
          Event
          Control Centre(ECC)
        </span>
        {
          incidentData ? renderIncident() : (
            <p className="action-card-content">
              Royalty-free(RF) material subject to copyright subject to copyright or other intellectual property
              rights may be used rights may be used without the need to pay royalities or liences fees for each
              use.
            </p>
          )
        }
      </div>
      <div className="card-footer tx-13 d-flex flex-column align-items-center">
        <div className="w-100 d-flex justify-content-between align-items-center p-2">
          <div className="avatar avatar-sm avatar-online">
            <span className="avatar-initial rounded-circle bg-pink-light">AR</span>
          </div>
          <Button
            className="bt-markcomp d-flex justify-content-around align-items-center"
            type="secondary"
            icon={<CheckOutlined />}
          >
            Mark Complete
          </Button>
          <nav className="w-50 d-flex align-items-center justify-content-around">
            <Tooltip placement="top" title="Comment">
              <a
                data-toggle="collapse"
                href={`#${type}-${index}`}
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                <FontAwesomeIcon icon={faCommentAlt} size="lg" color="#8392a5" />
                <span className="ml-1 text-blue msg-number">2</span>
              </a>
            </Tooltip>
            <Tooltip placement="top" title="Attachment">
              <Dropdown overlay={attachMenu} trigger={['click']}>
                <FontAwesomeIcon icon={faPaperclip} size="lg" color="#8392a5" />
              </Dropdown>
            </Tooltip>
            <Tooltip placement="top" title="Share">
              <Dropdown overlay={shareMenu} trigger={['click']}>
                <FontAwesomeIcon icon={faLink} size="lg" color="#8392a5" />
              </Dropdown>
            </Tooltip>
            <Tooltip placement="top" title="More Options">
              <Dropdown overlay={ellipseMenu} trigger={['click']}>
                <FontAwesomeIcon icon={faEllipsisHAlt} size="lg" color="#8392a5" />
              </Dropdown>
            </Tooltip>
          </nav>
        </div>
        <div className="collapse w-100" id={`${type}-${index}`}>
          <div className="chat-group w-100 d-flex flex-column align-items-between p-2">
            <label className="tx-14 font-weight-bold mt-2">
              Replying to
              <a href="#dropdown">@AustralianOpen</a>
              <a href="#dropdown">@nyhro</a>
            </label>
            <input type="text" className="form-control mb-4" placeholder="What's happening?" />
            <div className="media d-flex justify-content-between">
              <>
                <div className="avatar avatar-sm avatar-online">
                  <span className="avatar-initial rounded-circle  bg-pink-light">k</span>
                </div>
                <div className="media-body">
                  <h6>
                    katherine
                    <small>Today at 1:30am</small>
                  </h6>

                  <p className="tx-12 tx-color-03">Hello everyone, this is my first message to this channel</p>
                  <p className="tx-12 tx-color-03">anybody here?</p>
                </div>
              </>
              <FontAwesomeIcon icon={faThumbsUp} size="lg" color="#8392a5" />
            </div>
            <div className="media d-flex justify-content-between">
              <>
                <div className="avatar avatar-sm avatar-online">
                  <span className="avatar-initial rounded-circle  bg-pink-light">k</span>
                </div>
                <div className="media-body">
                  <h6>
                    katherine
                    <small>Today at 1:30am</small>
                  </h6>
                  <p className="tx-12 tx-color-03">Hello everyone, this is my first message to this channel</p>
                  <p className="tx-12 tx-color-03">Hello everyone, this is my first message to this channel</p>
                  <p className="tx-12 tx-color-03">Hello everyone, this is my first message to this channel</p>
                  <p className="tx-12 tx-color-03">Hello everyone, this is my first message to this channel</p>
                  <p className="tx-12 tx-color-03">Hello everyone, this is my first message to this channel</p>
                  <p className="tx-12 tx-color-03">Hello everyone, this is my first message to this channel</p>
                  <p className="tx-12 tx-color-03">anybody here?</p>
                </div>
              </>
              <FontAwesomeIcon icon={faThumbsUp} size="lg" color="#8392a5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ActionCard.propTypes = {
  type: PropTypes.string,
  index: PropTypes.number,
  incidentData: PropTypes.object, // todo remove
};

ActionCard.defaultProps = {
  type: 'Action',
  index: 0,
  incidentData: null, // todo remove
};

const mapStateToProps = (store) => ({
  incidentData: store.incidentData.incidentData,
});
export default connect(mapStateToProps)(ActionCard);
