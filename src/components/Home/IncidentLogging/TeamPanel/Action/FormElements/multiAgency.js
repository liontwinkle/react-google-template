import React from 'react';
import PropTypes from 'prop-types'

const ActionMultiAgency = ({tabIndex, fieldItem}) => {
    return (
        <div
            className="custom-rad custom-multi-all"
            id={`tab_${tabIndex}_field_${fieldItem.field_type}_${fieldItem.id}`}
            data-tab-id={tabIndex}
        >
            <div className="btn-group custom-rad" aria-label="Basic example">
                <button type="button" className="btn btn-primary">Police</button>
                <button type="button" className="btn btn-primary">Ambulance</button>
                <button type="button" className="btn btn-primary">No</button>
            </div>
        </div>
    )
};

ActionMultiAgency.propTypes = {
    tabIndex: PropTypes.number,
    fieldItem: PropTypes.object,
    options: PropTypes.array,
};

ActionMultiAgency.defaultProps = {
    tabIndex: 0,
    options: [],
    fieldItem: {},
};

export default ActionMultiAgency;
