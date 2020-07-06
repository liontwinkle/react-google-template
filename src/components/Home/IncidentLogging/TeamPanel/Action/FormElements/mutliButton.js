import React, {useState} from 'react';
import PropTypes from 'prop-types'
import {Radio} from "antd";

const ActionMultiButton = ({tabIndex, fieldItem, options}) => {
    const [newOptions, setNewOptions] = useState([]);
    const required = (fieldItem.field_required === "1");
    const [value, setValue] = useState('Yes');
    const customOptions = options.filter((optionItem) => (optionItem.id === fieldItem.id));
    if (customOptions.options) {
        setNewOptions(customOptions.options);
    }
    const handleSizeChange = e => {
        setValue(e.target.value);
    };
    return (
        <div
            className="custom-rad"
            id={`tab_${tabIndex}_field_${fieldItem.field_type}_${fieldItem.id}`}
            data-tab-id={tabIndex}
        >
            <Radio.Group value={value} onChange={handleSizeChange}>
                <Radio.Button value="Yes">Yes</Radio.Button>
                <Radio.Button value="No">No</Radio.Button>
                <Radio.Button value="Unknown">Unknown</Radio.Button>
            </Radio.Group>
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
