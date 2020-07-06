import React, {useState} from 'react';
import PropTypes from 'prop-types'

const ActionAgeField = ({tabIndex, fieldItem, options}) => {
    const [newOptions, setNewOptions] = useState([]);
    const required = (fieldItem.field_required === "1");
    const customOptions = options.filter((optionItem) => (optionItem.id === fieldItem.id));
    if (customOptions.options) {
        setNewOptions(customOptions.options);
    }
    return (
        <div className="input-group onlyflex-s age-row">
            <div className="input-group-prepend">
                <select
                    className="custom-select form-control tx-13 age-type"
                    id={`tab_${tabIndex}_field_${fieldItem.field_type}_${fieldItem.id}`}
                    name={`tab_${tabIndex}_field_${fieldItem.field_type}_${fieldItem.id}`}
                    data-tab-id={tabIndex}
                    data-age-holder=""
                    required={required}
                >
                    <option value="Exact" className="age-exact" selected>Exact</option>
                    <option value="Estimate">Estimate</option>
                    <option value="Range">Range</option>
                    <option value="Infant">Infant (Months)</option>
                </select>
            </div>
            <input
                type="number"
                className="form-control range-hide age-input"
                aria-label="Age Info"
                data-name={`tab_${tabIndex}_field_age-field1_${fieldItem.id}`}
                placeholder="Age Info"
            />
            <div className="range-b">
                <div className="range-b-block">
                    <input
                        className="age-input age-range-input-1"
                        type="number"
                        data-name={`tab_${tabIndex}_field_age-field2_${fieldItem.id}`}
                        placeholder="0"
                        min="0"/>
                    <span>To</span>
                    <input className="age-input age-range-input-2" type="number"
                           data-name={`tab_${tabIndex}_field_age-field3_${fieldItem.id}`} placeholder="1" min="1"/>
                </div>
            </div>
        </div>
    )
};

ActionAgeField.propTypes = {
    tabIndex: PropTypes.number,
    fieldItem: PropTypes.object,
    options: PropTypes.array,
};

ActionAgeField.defaultProps = {
    tabIndex: 1,
    options: [],
    fieldItem: {},
};

export default ActionAgeField;
