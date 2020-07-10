import React, {useState} from 'react';
import PropTypes from 'prop-types'

const ActionMultiAgencyAmbulance = ({tabIndex, fieldItem}) => {
    const [ageAmbulanceState, setAgeAmbulanceState] = useState({
        police: false,
        fire: false,
    });

    const changeState = (type) => () => {
        setAgeAmbulanceState(prevState => ({
            ...ageAmbulanceState,
            [type]: !ageAmbulanceState[type]
        }));
    };

    const cancel = () => {
        setAgeAmbulanceState({
            police: false,
            fire: false,
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
                    className={`btn btn-dim btn-outline-primary ${ageAmbulanceState.police === true ? 'selected' : ''}`}
                    onClick={changeState('police')}>
                    Police
                </button>
                <button
                    type="button"
                    className={`btn btn-dim btn-outline-primary ${ageAmbulanceState.fire === true ? 'selected' : ''}`}
                    onClick={changeState('fire')}>
                    Fire
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

ActionMultiAgencyAmbulance.propTypes = {
    tabIndex: PropTypes.number,
    fieldItem: PropTypes.object,
    options: PropTypes.array,
};

ActionMultiAgencyAmbulance.defaultProps = {
    tabIndex: 1,
    options: [],
    fieldItem: {},
};

export default ActionMultiAgencyAmbulance;
