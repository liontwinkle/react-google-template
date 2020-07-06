import React, {useState} from 'react';
import PropTypes from 'prop-types'
import { Radio } from 'antd';

const ActionMultiAgency = ({tabIndex, fieldItem, options}) => {
    const [newOptions, setNewOptions] = useState([]);
    const required = (fieldItem.field_required === "1");
    const [value, setValue] = useState('Police');
    const customOptions = options.filter((optionItem) => (optionItem.id === fieldItem.id));
    if (customOptions.options) {
        setNewOptions(customOptions.options);
    }

    const handleSizeChange = e => {
        setValue(e.target.value);
    };
    return (
        <div
            className="custom-rad custom-multi-all"
            id={`tab_${tabIndex}_field_${fieldItem.field_type}_${fieldItem.id}`}
            data-tab-id={tabIndex}
        >
            <Radio.Group value={value} onChange={handleSizeChange}>
                <Radio.Button value="Police">Police</Radio.Button>
                <Radio.Button value="Fire">Fire</Radio.Button>
                <Radio.Button value="Ambulance">Ambulance</Radio.Button>
            </Radio.Group>
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
