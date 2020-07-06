import React, {useState} from 'react';
import PropTypes from 'prop-types'

const ActionGenderFieldExtend = ({tabIndex, fieldItem, options}) => {
    const [newOptions, setNewOptions] = useState([]);
    const required = (fieldItem.field_required === "1");
    const customOptions = options.filter((optionItem) => (optionItem.id === fieldItem.id));
    if (customOptions.options) {
        setNewOptions(customOptions.options);
    }
    return (
        <select
            className="custom-select form-control"
            id={`tab_${tabIndex}_field_${fieldItem.field_type}_${fieldItem.id}`}
            name={`tab_${tabIndex}_field_${fieldItem.field_type}_${fieldItem.id}`}
            data-tab-id={tabIndex}
            required={required}
        >
            <option value="0" selected>Unknown</option>
            <option value="Female">Female</option>
            <option value="Male">Male</option>
            <option value="Non-Binary">Non-Binary</option>
            <option value="Transgender male to female">Transgender male to female</option>
            <option value="Transgender female to male">Transgender female to male</option>
        </select>
    )
};

ActionGenderFieldExtend.propTypes = {
    tabIndex: PropTypes.number,
    fieldItem: PropTypes.object,
    options: PropTypes.array,
};

ActionGenderFieldExtend.defaultProps = {
    tabIndex: 1,
    options: [],
    fieldItem: {},
};

export default ActionGenderFieldExtend;
