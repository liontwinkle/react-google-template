import React, {useState} from 'react';
import PropTypes from 'prop-types'

const ActionMultiButton = ({tabIndex, fieldItem, options}) => {
    const [newOptions, setNewOptions] = useState([]);
    const required = (fieldItem.field_required === "1");
    const customOptions = options.filter((optionItem) => (optionItem.id === fieldItem.id));
    if (customOptions.options) {
        setNewOptions(customOptions.options);
    }
    return (
        <div
            className="custom-rad"
            id={`tab_${tabIndex}_field_${fieldItem.field_type}_${fieldItem.id}`}
            data-tab-id={tabIndex}
        >
            <div className="gp-radios">
                <input type="radio" name={`tab_${tabIndex}_field_${fieldItem.field_type}_${fieldItem.id}`} value="Yes"/>
                <span>Yes</span>
            </div>
            <div className="gp-radios">
                <input type="radio" name={`tab_${tabIndex}_field_${fieldItem.field_type}_${fieldItem.id}`} value="No"/>
                <span>No</span>
            </div>
            <div className="gp-radios">
                <input type="radio" name={`tab_${tabIndex}_field_${fieldItem.field_type}_${fieldItem.id}`}
                       value="Unknown"/>
                <span>Unknown</span>
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
