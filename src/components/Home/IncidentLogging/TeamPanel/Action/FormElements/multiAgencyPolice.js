import React, {useState} from 'react';
import PropTypes from 'prop-types'
import {Radio} from "antd";

const ActionMultiAgencyPolice = ({tabIndex, fieldItem, options}) => {
    const [newOptions, setNewOptions] = useState([]);
    const required = (fieldItem.field_required === "1");
    const [value, setValue] = useState('Fire');
    const customOptions = options.filter((optionItem) => (optionItem.id === fieldItem.id));
    if (customOptions.options) {
        setNewOptions(customOptions.options);
    }
    const handleSizeChange = e => {
        setValue(e.target.value);
    };
    return (
        <div
            className="custom-rad custom-mult-all"
            id={`tab_${tabIndex}_field_${fieldItem.file_type}_${fieldItem.id}`}
            data-tab-id={tabIndex}
        >
            <Radio.Group value={value} onChange={handleSizeChange}>
                <Radio.Button value="Fire">Fire</Radio.Button>
                <Radio.Button value="Ambulance">Ambulance</Radio.Button>
                <Radio.Button value="No">No</Radio.Button>
            </Radio.Group>
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
