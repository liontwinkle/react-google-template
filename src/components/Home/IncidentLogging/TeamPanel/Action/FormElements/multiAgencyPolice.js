import React, { useState } from 'react';
import PropTypes from 'prop-types'

import './style.scss';

const ActionMultiAgencyPolice = ({tabIndex, fieldItem}) => {
    const [agePoliceState, setAgePoliceState] = useState({
        fire: false,
        ambulance: false,
    });

    const changeState = (type) => () => {
      setAgePoliceState(prevState => ({
          ...agePoliceState,
          [type]: !agePoliceState[type]
      }));
    };

    const cancel = () => {
        setAgePoliceState({
            fire: false,
            ambulance: false,
        })
    };

    return (
        <div
            className="custom-rad custom-mult-all"
            id={`tab_${tabIndex}_field_${fieldItem.file_type}_${fieldItem.id}`}
            data-tab-id={tabIndex}
        >
            <div className="btn-group custom-rad" aria-label="Basic example">
                <button
                    type="button"
                    className={`btn btn-dim btn-outline-primary ${agePoliceState.fire === true ? 'selected' : ''}`}
                    onClick={changeState('fire')}>
                    Fire
                </button>
                <button
                    type="button"
                    className={`btn btn-dim btn-outline-primary ${agePoliceState.ambulance === true ? 'selected' : ''}`}
                    onClick={changeState('ambulance')}>
                    Ambulance
                </button>
                <button
                    type="button"
                    className="btn btn-dim btn-outline-primary"
                    onClick={cancel}>
                    No
                </button>
            </div>
        </div>
    )
};

ActionMultiAgencyPolice.propTypes = {
    tabIndex: PropTypes.number,
    fieldItem: PropTypes.object,
    options: PropTypes.array,
};

ActionMultiAgencyPolice.defaultProps = {
    tabIndex: 1,
    options: [],
    fieldItem: {},
};

export default ActionMultiAgencyPolice;
