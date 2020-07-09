import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {Select} from 'antd';

import './style.scss';

const {Option} = Select;

const ActionMultiSelect = ({tabIndex, fieldItem, options}) => {
    const [newOptions, setNewOptions] = useState([]);
    const required = (fieldItem.field_required === "1");

    useEffect(() => {
        const customOptions = options.filter((optionItem) => (optionItem.id === fieldItem.id));
        if (customOptions[0].options) {
            setNewOptions(customOptions[0].options);
        }
    }, [setNewOptions, newOptions, options]);

    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };

    return (
        <Select
            mode="tags"
            style={{
                width: '100%',
                minHeight: 'calc(1.5em + 0.9375rem + 3px)'
            }}
            placeholder="Tags Mode"
            onChange={handleChange}
            maxTagCount={3}
        >
            {
                newOptions.map(optionItem => (
                    <Option key={optionItem.id} value={optionItem.id}>{optionItem.option_text}</Option>
                ))
            }
        </Select>
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
