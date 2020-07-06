import React, {useState} from 'react';
import PropTypes from 'prop-types'

const ActionMultiAgencyAmbulance = ({tabIndex, fieldItem, options}) => {
    const [newOptions, setNewOptions] = useState([]);
    const required = (fieldItem.field_required === "1");
    const customOptions = options.filter((optionItem) => (optionItem.id === fieldItem.id));
    if (customOptions.options) {
        setNewOptions(customOptions.options);
    }
    return (
        <div
            className="custom-rad custom-mult-fire"
            id={`tab_${tabIndex}_field_${fieldItem.field_type}_${fieldItem.id}`}
            data-tab-id={tabIndex}
        >
            <div className="gp-radios">
                <input type="checkbox" className="MultAgencyOn" name={`tab_${tabIndex}_field_${fieldItem.field_type}-police_${fieldItem.id}`} value="Police" />
                <span>Police</span>
            </div>
            <div className="gp-radios">
                <input type="checkbox" className="MultAgencyOn" name={`tab_${tabIndex}_field_${fieldItem.field_type}-fire${fieldItem.id}`} value="Fire" />
                <span>Fire</span>
            </div>
            <div className="gp-radios">
                <input type="checkbox" className="MultAgencyCancel" name={`tab_${tabIndex}_field_${fieldItem.field_type}-no${fieldItem.id}`} value="No" />
                <span>No</span>
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
