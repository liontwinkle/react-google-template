import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types'

const ActionDropDown = ({tabIndex, fieldItem, options}) => {
    const [newOptions, setNewOptions] = useState([]);
    useEffect(() => {
        const customOptions = options.filter((optionItem) => (optionItem.id === fieldItem.id));
        if (customOptions[0].options) {
            setNewOptions(customOptions[0].options);
        }
    },[setNewOptions, fieldItem, options]);

    const required = (fieldItem.field_required === "1");

    return (
        <select
            className="custom-select form-control"
            id={`tab_${tabIndex}_field_${fieldItem.field_type}_${fieldItem.id}`}
            name={`tab_${tabIndex}_field_${fieldItem.field_type}_${fieldItem.id}`}
            data-tab-id={tabIndex}
            required={required}
        >
            {
                fieldItem.field_placeholder && (
                    <option value="" disabled selected hidden>{fieldItem.field_placeholder}</option>
                )
            }
            <option value="0" selected>Unknown</option>
            {
                newOptions.map((customOptionItem) => (
                    <option key={customOptionItem.id} value={customOptionItem.id}>{customOptionItem.option_text}</option>
                ))
            }
        </select>
    )
};

ActionDropDown.propTypes = {
    tabIndex: PropTypes.number,
    fieldItem: PropTypes.object,
    options: PropTypes.array,
};

ActionDropDown.defaultProps = {
    tabIndex: 1,
    options: [],
    fieldItem: {},
};

export default ActionDropDown;
