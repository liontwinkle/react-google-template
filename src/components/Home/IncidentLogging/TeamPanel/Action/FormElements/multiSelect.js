import React, {useState} from 'react';
import PropTypes from 'prop-types'

const ActionMultiSelect = ({tabIndex, fieldItem, options}) => {
    const [newOptions, setNewOptions] = useState([]);
    const required = (fieldItem.field_required === "1");
    const customOptions = options.filter((optionItem) => (optionItem.id === fieldItem.id));
    if (customOptions.options) {
        setNewOptions(customOptions.options);
    }
    return (
        <select
            className="custom-select form-control select2-limit custom-multiselect"
            multiple="multiple"
            id={`tab_${tabIndex}_field_${fieldItem.field_type}_${fieldItem.id}`}
            name={`tab_${tabIndex}_field_${fieldItem.field_type}_${fieldItem.id}`}
            data-tab-id={tabIndex}
            placeholder={fieldItem.field_placeholder ? fieldItem.field_placeholder : ''}
            required={required}
        >
            {
                newOptions.map(optionItem => (
                    <option value={optionItem.id}>{optionItem.option_text}</option>
                ))
            }
        </select>
    )
};

ActionMultiSelect.propTypes = {
    tabIndex: PropTypes.number,
    fieldItem: PropTypes.object,
    options: PropTypes.array,
};

ActionMultiSelect.defaultProps = {
    tabIndex: 1,
    options: [],
    fieldItem: {},
};

export default ActionMultiSelect;
