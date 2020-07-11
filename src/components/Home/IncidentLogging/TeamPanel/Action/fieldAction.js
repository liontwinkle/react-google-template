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
import CustomTypeAhead from "../../../../common/CustomTypeahead";
import './style.scss';


const FieldAction = ({actionFields, tabIndex, typeList}) => {
    const [fields, setFields] = useState([]);
    const [options, setOptions] = useState([]);
    const [isReady, setReady] = useState(false);
    
    useEffect(() => {
        setReady(true);
        const newFields = actionFields.filter((actionItem) => (actionItem.id === tabIndex));
        if (newFields[0].field) {
            setFields(newFields[0].field);
            setOptions(newFields[0].options);
        }
        setReady(false);
    }, [tabIndex, setFields, setReady, actionFields]);

    const newActionBody = (fieldItem) => {
        switch (fieldItem.field_type) {
            case 'text-area':
                return <ActionTextArea tabIndex={tabIndex} fieldItem={fieldItem} options={options}/>;
            case 'multi-select':
                return <ActionMultiSelect tabIndex={tabIndex} fieldItem={fieldItem} options={options}/>;
            case 'multi-agency-police':
                return <ActionMultiAgencyPolice tabIndex={tabIndex} fieldItem={fieldItem} options={options}/>;
            case 'text-field':
                return <ActionTextField tabIndex={tabIndex} fieldItem={fieldItem} options={options}/>;
            case 'multi-button':
                return <ActionMultiButton tabIndex={tabIndex} fieldItem={fieldItem} options={options}/>;
            case 'multi-agency':
                return <ActionMultiAgency tabIndex={tabIndex} fieldItem={fieldItem} options={options}/>;
            case 'multi-agency-fire':
                return <ActionMultiAgencyFire tabIndex={tabIndex} fieldItem={fieldItem} options={options}/>;
            case 'age-field':
                return <ActionAgeField tabIndex={tabIndex} fieldItem={fieldItem} options={options}/>;
            case 'gender-field-extend':
                return <ActionGenderFieldExtend tabIndex={tabIndex} fieldItem={fieldItem} options={options}/>;
            case 'multi-agency-ambulance':
                return <ActionMultiAgencyAmbulance tabIndex={tabIndex} fieldItem={fieldItem} options={options}/>;
            case 'dropdown':
                return <ActionDropDown tabIndex={tabIndex} fieldItem={fieldItem} options={options}/>;
            default:
                return <ActionTextArea tabIndex={tabIndex} fieldItem={fieldItem} options={options}/>;
        }
    };

    return (
        !isReady&&
        <>
            <div className="form-group row">
                <label htmlFor={`tab_${tabIndex} _field_action-type_0`}
                       className="col-sm-4 col-form-label">Type*</label>
                <div className="col-sm-8">
                    <div className="typeahead__container">
                        <div className="typeahead__field">
                            <div className="typeahead__query">
                                <CustomTypeAhead typeList={typeList} tabIndex={tabIndex}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor={`tab_${tabIndex}_field_location_0`}
                       className="col-sm-4 col-form-label text-dark">Location*</label>
                <div className="col-sm-8">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Area / Grid / Room"
                        data-tab-id={tabIndex}
                        id={`tab_${tabIndex}_field_location_0`}
                        name={`tab_${tabIndex}_field_location_0`}
                    />
                </div>
            </div>
            {
                fields.map((fieldItem) => (
                    <div className="form-group row" key={fieldItem.id}>
                        <label htmlFor={`tab_${tabIndex}_field_${fieldItem.field_type}_${fieldItem.id}`}
                               className="col-sm-4 col-form-label text-dark">
                            {`${fieldItem.fied_text}${fieldItem.field_required === "1" ? "*" : ""}`}
                        </label>
                        <div className="col-sm-8">
                            {newActionBody(fieldItem)}
                        </div>
                    </div>
                ))
            }
        </>
    )
};

FieldAction.propTypes = {
    actionFields: PropTypes.array,
    tabIndex: PropTypes.number,
};

FieldAction.defaultProps = {
    actionFields: [],
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