import React from 'react';
import PropTypes from 'prop-types'

const ActionMultiAgencyFire = ({tabIndex, fieldItem}) => {
    return (
        <div
            className="custom-rad custom-mult-fire"
            id={`tab_${tabIndex}_field_${fieldItem.field_type}_${fieldItem.id}`}
            data-tab-id={tabIndex}
        >
            <div className="btn-group custom-rad" aria-label="Basic example">
                <button type="button" className="btn btn-dim btn-outline-primary">Police</button>
                <button type="button" className="btn btn-dim btn-outline-primary">Fire</button>
                <button type="button" className="btn btn-dim btn-outline-primary">Ambulance</button>
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
