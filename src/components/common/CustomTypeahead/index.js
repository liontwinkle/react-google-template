import React, {useState, useEffect} from 'react';
import {AsyncTypeahead} from 'react-bootstrap-typeahead';
import {bindActionCreators} from "redux";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {getTypeAheadList} from "../../../redux/action/incident";
import ReactHtmlParser from 'react-html-parser';
import './style.scss';

const CustomTypeAhead = ({
                             typeList,
                             tabIndex,
                             getTypeAheadList
                         }) => {
    useEffect(() => {
        if (typeList === null) {
            getTypeAheadList(tabIndex);
        }
    }, [getTypeAheadList, tabIndex, typeList]);

    const [isLoading, setIsLoading] = useState(false);
    const [options, setOptions] = useState([]);
    const [query, setQuery] = useState(null);

    const getIndex = (str, query) => {
        return str.toLowerCase().indexOf(query.toLowerCase());
    };

    const handleSearch = (query) => {
        setIsLoading(true);
        if (typeList) {
            const filterResult = [];
            typeList.forEach((typeItem) => {
                if (getIndex(typeItem, query) > -1) {
                    setQuery(query);
                    filterResult.push(typeItem);
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
            id="async-example"
            isLoading={isLoading}
            labelKey="Type*"
            minLength={2}
            onSearch={handleSearch}
            options={options}
            order="asc"
            placeholder="Search for a Github user..."
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
    tabIndex: PropTypes.number,
    getTypeAheadList: PropTypes.func.isRequired,
};

CustomTypeAhead.defaultProps = {
    typeList: PropTypes.array,
    tabIndex: PropTypes.number,
};

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            getTypeAheadList
        },
        dispatch
    );

const mapStateToProps = store => ({
    typeList: store.incidentData.typeList,
});


export default connect(mapStateToProps, mapDispatchToProps)(CustomTypeAhead);