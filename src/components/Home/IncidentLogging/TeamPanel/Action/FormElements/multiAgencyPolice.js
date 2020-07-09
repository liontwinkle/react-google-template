import React from 'react';
import PropTypes from 'prop-types'

import './style.scss';

const ActionMultiAgencyPolice = ({tabIndex, fieldItem}) => {
    return (
        <div
            className="custom-rad custom-mult-all"
            id={`tab_${tabIndex}_field_${fieldItem.file_type}_${fieldItem.id}`}
            data-tab-id={tabIndex}
        >
            <div className="btn-group custom-rad" aria-label="Basic example">
                <button type="button" className="btn btn-primary">Fire</button>
                <button type="button" className="btn btn-primary">Ambulance</button>
                <button type="button" className="btn btn-primary">No</button>
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
