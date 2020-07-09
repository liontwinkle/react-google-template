import React from 'react';
import PropTypes from 'prop-types'

const ActionMultiButton = ({tabIndex, fieldItem}) => {
    return (
        <div
            className="custom-rad"
            id={`tab_${tabIndex}_field_${fieldItem.field_type}_${fieldItem.id}`}
            data-tab-id={tabIndex}
        >
            <div className="btn-group custom-rad" aria-label="Basic example">
                <button type="button" className="btn btn-primary">Yes</button>
                <button type="button" className="btn btn-primary">No</button>
                <button type="button" className="btn btn-primary">Unknown</button>
            </div>
        </div>
    )
};

ActionMultiButton.propTypes = {
    dataList: PropTypes.array,
    fieldItem: PropTypes.object,
    options: PropTypes.array,
};

ActionMultiButton.defaultProps = {
    dataList: [],
    options: [],
    fieldItem: {},
};

export default ActionMultiButton;
