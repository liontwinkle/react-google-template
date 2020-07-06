import React, {useState} from 'react';
import PropTypes from 'prop-types'

const ActionMultiAgency = ({tabIndex, fieldItem, options}) => {
    const [newOptions, setNewOptions] = useState([]);
    const required = (fieldItem.field_required === "1");
    const customOptions = options.filter((optionItem) => (optionItem.id === fieldItem.id));
    if (customOptions.options) {
        setNewOptions(customOptions.options);
    }
    return (
        <div
            className="custom-rad custom-mult-all"
            id={`tab_${tabIndex}_field_${fieldItem.field_type}_${fieldItem.id}`}
            data-tab-id={tabIndex}
        >
            <div className="gp-radios">
                <input type="checkbox" name={`tab_${tabIndex}_field_${fieldItem.field_type}-police_${fieldItem.id}`}
                       value="Police"/>
                <span>Police</span>
            </div>
            <div className="gp-radios">
                <input type="checkbox" name={`tab_${tabIndex}_field_${fieldItem.field_type}-fire_${fieldItem.id}`}
                       value="Fire"/>
                <span>Fire</span>
            </div>
            <div class="gp-radios">
                <input type="checkbox" name={`tab_${tabIndex}_field_${fieldItem.field_type}-ambulance_${fieldItem.id}`}
                       value="Ambulance"/>
                <span>Ambulance</span>
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
