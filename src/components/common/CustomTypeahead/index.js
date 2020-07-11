import React, {useState, useEffect} from 'react';
import {AsyncTypeahead} from 'react-bootstrap-typeahead';
import PropTypes from "prop-types";
import ReactHtmlParser from 'react-html-parser';

import './style.scss';

const CustomTypeAhead = ({
                             typeList,
    tabIndex,
                         }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [isFormating, setFormating] = useState(false);
    const [options, setOptions] = useState([]);
    const [query, setQuery] = useState('');

    useEffect(() => {
        if(typeList) {
            setOptions([]);
        }
    }, [typeList]);

    const getIndex = (str, query) => {
        return str.toLowerCase().indexOf(query.toLowerCase());
    };

    const handleSearch = (newQuery) => {
        setIsLoading(true);
        if (typeList) {
            const filterResult = [];
            typeList.forEach((typeItem) => {
                if (getIndex(typeItem, newQuery) > -1) {
                    filterResult.push(typeItem);
                    setQuery(newQuery);
                }
            });
            setOptions(filterResult);
        }
        setIsLoading(false);
    };

    const covertHint = (string) => {
        const val = string.slice(0, getIndex(string, query)) + "<b>" +
            string.slice(getIndex(string, query), getIndex(string, query)+query.length) + "</b>" +
            string.slice(
                getIndex(string, query) + query.length,
                string.length
            );
        return val;
    };

    return (
        <AsyncTypeahead
            id={`async-${tabIndex}`}
            isLoading={isLoading}
            labelKey="Type*"
            minLength={2}
            onSearch={handleSearch}
            options={options}
            defaultSelected=''
            placeholder="Search for a Github user..."
            useCache={false}
            renderMenuItemChildren={(option) => (
                <>
                    <span>{ReactHtmlParser(covertHint(option))}</span>
                </>
            )}
        />
    );
};

CustomTypeAhead.propTypes = {
    typeList: PropTypes.array,
};

CustomTypeAhead.defaultProps = {
    typeList: PropTypes.array,
};


export default CustomTypeAhead;