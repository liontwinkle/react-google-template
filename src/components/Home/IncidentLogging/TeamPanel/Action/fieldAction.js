import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import PropTypes from 'prop-types'
import {getFieldList} from "../../../../../redux/action/incident";
import ActionAgeField from "./FormElements/ageField";
import ActionDropDown from "./FormElements/dropdown";
import ActionGenderFieldExtend from "./FormElements/genderFieldExtend";
import ActionMultiAgency from "./FormElements/multiAgency";
import ActionMultiAgencyAmbulance from "./FormElements/multiAgencyAmbulance";
import ActionMultiAgencyFire from "./FormElements/multiAgencyFire";
import ActionMultiAgencyPolice from "./FormElements/multiAgencyPolice";
import ActionMultiButton from "./FormElements/mutliButton";
import ActionTextArea from "./FormElements/textArea";
import ActionTextField from "./FormElements/textField";
import ActionMultiSelect from "./FormElements/multiSelect";

import './style.scss';


const FieldAction = ({actionFields, tabIndex}) => {
    const [fields, setFields] = useState([]);
    const [options, setOptions] = useState([]);
    useEffect(() => {
        const newFields = actionFields.filter((actionItem) => (actionItem.id === tabIndex));
        console.log('fields: ', newFields); // fixme
        if(newFields[0].field){
            setFields(newFields[0].field);
            console.log('fields: ', newFields[0].field); // fixme
            setOptions(newFields[0].options);
        }
    },[tabIndex, setFields]);

    const newActionBody = (fieldItem) => {
        switch (fieldItem.field_type) {
            case 'text-area':
                return <ActionTextArea tabIndex={tabIndex} fieldItem={fieldItem} options={options} />;
            case 'multi-select':
                return <ActionMultiSelect tabIndex={tabIndex} fieldItem={fieldItem} options={options} />;
            case 'multi-agency-police':
                return <ActionMultiAgencyPolice tabIndex={tabIndex} fieldItem={fieldItem} options={options} />;
            case 'text-field':
                return <ActionTextField tabIndex={tabIndex} fieldItem={fieldItem} options={options} />;
            case 'multi-button':
                return <ActionMultiButton tabIndex={tabIndex} fieldItem={fieldItem} options={options} />;
            case 'multi-agency':
                return <ActionMultiAgency tabIndex={tabIndex} fieldItem={fieldItem} options={options} />;
            case 'multi-agency-fire':
                return <ActionMultiAgencyFire tabIndex={tabIndex} fieldItem={fieldItem} options={options} />;
            case 'age-field':
                return <ActionAgeField tabIndex={tabIndex} fieldItem={fieldItem} options={options} />;
            case 'gender-field-extend':
                return <ActionGenderFieldExtend tabIndex={tabIndex} fieldItem={fieldItem} options={options} />;
            case 'multi-agency-ambulance':
                return <ActionMultiAgencyAmbulance tabIndex={tabIndex} fieldItem={fieldItem} options={options} />;
            case 'dropdown':
                return <ActionDropDown tabIndex={tabIndex} fieldItem={fieldItem} options={options} />;
            default:
                return <ActionTextArea tabIndex={tabIndex} fieldItem={fieldItem} options={options} />;
        }
    };

    return (
        <form method="post" className="action-form" onSubmit="return false;">
            <div className="form-group row">
                <label htmlFor={`tab_${tabIndex} _field_action-type_0`}
                       className="col-sm-4 col-form-label">Type*</label>
                <div className="col-sm-8">
                    <div className="typeahead__container">
                        <div className="typeahead__field">
                            <div className="typeahead__query">
                                <input
                                    data-tab-id={tabIndex}
                                    id={`tab_${tabIndex}_field_action-type_0`}
                                    name={`tab_${tabIndex}_field_action-type_0`}
                                    type="text"
                                    className="form-control action-type-input"
                                    autoComplete="off"
                                    placeholder="Type"
                                    spellCheck="false"
                                    dir="auto"
                                    required
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor={`tab_${tabIndex}_field_location_0`}
                       className="col-sm-4 col-form-label">Location*</label>
                <div className="col-sm-8">
                    <input
                        data-tab-id={tabIndex}
                        id={`tab_${tabIndex}_field_location_0`}
                        name={`tab_${tabIndex}_field_location_0`}
                        type="text"
                        className="form-control action-location-input"
                        placeholder="Area / Grid / Room"
                        required
                    />
                </div>
            </div>
            {
                fields.map((fieldItem) => (
                    <div className="form-group row" key={fieldItem.id}>
                        <label htmlFor={`tab_${tabIndex}_field_${fieldItem.field_type}_${fieldItem.id}`}
                               className="col-sm-4 col-form-label">
                            { `${fieldItem.field_text}${fieldItem.field_required === "1"? "*" : ""}`}
                        </label>
                        <div className="col-sm-8">
                            {newActionBody(fieldItem)}
                        </div>
                    </div>
                ))
            }
            <div className="form-group row">
                <label htmlFor={`tab_${tabIndex}_field_dispatch-location_0`}
                       className="col-sm-4 col-form-label condensed-lb">Dispatch Location</label>
                <div className="col-sm-8">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Dispatch Location"
                        data-tab-id={tabIndex}
                        id={`tab_${tabIndex}_field_dispatch-location_0`}
                        name={`tab_${tabIndex}_field_dispatch-location_0`}
                    />
                </div>
            </div>
            <div className="first-group mb-3">
                <iframe
                    className="mt-2"
                    width="100%" height="250px"
                    src="https://maps.google.com/maps?hl=en&amp;q=-33.8714672,151.2080955&amp;ie=UTF8&amp;t=&amp;z=17&amp;iwloc=B&amp;output=embed"
                    frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"
                />
            </div>
        </form>
    )
};

FieldAction.propTypes = {
    actionFields: PropTypes.array,
    tabIndex: PropTypes.number,
};

FieldAction.defaultProps = {
    actionFields:[],
    tabIndex: 1,
};

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            getFieldList
        },
        dispatch
    );

const mapStateToProps = store => ({
    actionFields: store.incidentData.actionFields,
});

export default connect(mapStateToProps, mapDispatchToProps)(FieldAction)