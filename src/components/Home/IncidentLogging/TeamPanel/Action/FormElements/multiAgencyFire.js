import React, {useState} from 'react';
import PropTypes from 'prop-types'

const ActionMultiAgencyFire = ({tabIndex, fieldItem}) => {
    const [ageFireState, setAgeFireState] = useState({
        police: false,
        ambulance: false,
    });

    const changeState = (type) => () => {
        setAgeFireState(prevState => ({
            ...ageFireState,
            [type]: !ageFireState[type]
        }));
    };

    const cancel = () => {
        setAgeFireState({
            police: false,
            ambulance: false,
        })
    };
    return (
        <div
            className="custom-rad custom-mult-fire"
            id={`tab_${tabIndex}_field_${fieldItem.field_type}_${fieldItem.id}`}
            data-tab-id={tabIndex}
        >
            <div className="btn-group custom-rad" aria-label="Basic example">
                <button
                    type="button"
                    className={`btn btn-dim btn-outline-primary ${ageFireState.police === true ? 'selected' : ''}`}
                    onClick={changeState('police')}>
                    Police
                </button>
                <button
                    type="button"
                    className={`btn btn-dim btn-outline-primary ${ageFireState.ambulance === true ? 'selected' : ''}`}
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

ActionMultiAgencyFire.propTypes = {
    tabIndex: PropTypes.number,
    fieldItem: PropTypes.object,
    options: PropTypes.array,
};

ActionMultiAgencyFire.defaultProps = {
    tabIndex: 1,
    options: [],
    fieldItem: {},
};

export default ActionMultiAgencyFire;
