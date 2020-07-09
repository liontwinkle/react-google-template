import React from 'react';
import PropTypes from 'prop-types'

const ActionMultiAgencyAmbulance = ({tabIndex, fieldItem}) => {
    return (
        <div
            className="custom-rad custom-mult-fire"
            id={`tab_${tabIndex}_field_${fieldItem.field_type}_${fieldItem.id}`}
            data-tab-id={tabIndex}
        >
            <div className="btn-group custom-rad" aria-label="Basic example">
                <button type="button" className="btn btn-primary">Police</button>
                <button type="button" className="btn btn-primary">Fire</button>
                <button type="button" className="btn btn-primary">No</button>
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
