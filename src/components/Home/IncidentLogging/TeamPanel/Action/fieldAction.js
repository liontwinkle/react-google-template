import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import ActionAgeField from './FormElements/ageField';
import ActionDropDown from './FormElements/dropdown';
import ActionGenderFieldExtend from './FormElements/genderFieldExtend';
import ActionMultiAgency from './FormElements/multiAgency';
import ActionMultiAgencyAmbulance from './FormElements/multiAgencyAmbulance';
import ActionMultiAgencyFire from './FormElements/multiAgencyFire';
import ActionMultiAgencyPolice from './FormElements/multiAgencyPolice';
import ActionMultiButton from './FormElements/mutliButton';
import ActionTextArea from './FormElements/textArea';
import ActionTextField from './FormElements/textField';
import ActionMultiSelect from './FormElements/multiSelect';
import CustomTypeAhead from '../../../../common/CustomTypeahead';
import { getFieldList } from '../../../../../redux/action/incident';

import './style.scss';

const FieldAction = ({
  actionFields,
  tabIndex,
  typeList,
  errors,
  setErrors,
  onSetData,
  value,
}) => {
  const [fields, setFields] = useState([]);
  const [options, setOptions] = useState([]);
  const [isReady, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
    const newFields = actionFields.filter((actionItem) => (actionItem.id === tabIndex));
    const getRequiredFields = actionFields.filter((actionItem) => (actionItem.field_required === '1'));
    const requiredValidation = getRequiredFields.map((item) => ({
      [`${item.field_type}_${item.id}`]: false,
    }));
    if (Object.keys(errors).length < 3) {
      setErrors({
        ...errors,
        ...requiredValidation,
      });
    }

    if (newFields[0].field) {
      setFields(newFields[0].field);
      setOptions(newFields[0].options);
    }
    setReady(false);
  }, [tabIndex, setFields, setReady, setErrors, actionFields, errors]);

  const newActionBody = (fieldItem) => {
    const filterValue = value ? (value[`tab_${tabIndex}_field_${fieldItem.field_type}_${fieldItem.id}`] || []) : [];
    switch (fieldItem.field_type) {
      case 'text-area':
        return (
          <ActionTextArea
            value={value}
            fieldItem={fieldItem}
            tabIndex={tabIndex}
            onSetData={onSetData}
          />
        );
      case 'multi-select':
        return (
          <ActionMultiSelect
            tabIndex={tabIndex}
            fieldItem={fieldItem}
            options={options}
            errors={errors}
            onSetData={onSetData}
            value={value}
          />
        );
      case 'multi-agency-police':
        return (
          <ActionMultiAgencyPolice
            tabIndex={tabIndex}
            fieldItem={fieldItem}
            options={options}
            errors={errors}
            onSetData={onSetData}
            value={filterValue}
          />
        );
      case 'text-field':
        return (
          <ActionTextField
            tabIndex={tabIndex}
            fieldItem={fieldItem}
            options={options}
            errors={errors}
            onSetData={onSetData}
            value={value}
          />
        );
      case 'multi-button':
        return (
          <ActionMultiButton
            tabIndex={tabIndex}
            fieldItem={fieldItem}
            options={options}
            errors={errors}
            onSetData={onSetData}
            value={value}
          />
        );
      case 'multi-agency':
        return (
          <ActionMultiAgency
            tabIndex={tabIndex}
            fieldItem={fieldItem}
            options={options}
            errors={errors}
            onSetData={onSetData}
            value={filterValue}
          />
        );
      case 'multi-agency-fire':
        return (
          <ActionMultiAgencyFire
            tabIndex={tabIndex}
            fieldItem={fieldItem}
            options={options}
            errors={errors}
            onSetData={onSetData}
            value={filterValue}
          />
        );
      case 'age-field':
        return (
          <ActionAgeField
            tabIndex={tabIndex}
            fieldItem={fieldItem}
            options={options}
            errors={errors}
            onSetData={onSetData}
            value={value}
          />
        );
      case 'gender-field-extend':
        return (
          <ActionGenderFieldExtend
            tabIndex={tabIndex}
            fieldItem={fieldItem}
            options={options}
            errors={errors}
            onSetData={onSetData}
            value={value}
          />
        );
      case 'multi-agency-ambulance':
        return (
          <ActionMultiAgencyAmbulance
            tabIndex={tabIndex}
            fieldItem={fieldItem}
            options={options}
            errors={errors}
            onSetData={onSetData}
            value={filterValue}
          />
        );
      case 'dropdown':
        return (
          <ActionDropDown
            tabIndex={tabIndex}
            fieldItem={fieldItem}
            options={options}
            errors={errors}
            onSetData={onSetData}
            value={value}
          />
        );
      default:
        return null;
    }
  };

  const onChangeAddress = (e) => {
    onSetData({ [`tab_${tabIndex}_field_location_0`]: e.target.value });
  };

  return (
    !isReady
        && (
          <>
            <div className="form-group row">
              <label
                htmlFor={`tab_${tabIndex} _field_action-type_0`}
                className="col-sm-4 col-form-label"
              >
                Type*
              </label>
              <div className="col-sm-8">
                <div className="typeahead__container">
                  <div className="typeahead__field">
                    <div className="typeahead__query">
                      <CustomTypeAhead
                        typeList={typeList}
                        tabIndex={tabIndex}
                        errors={errors}
                        onSetData={onSetData}
                        value={value}
                      />
                    </div>
                  </div>
                </div>
                {errors.type && (
                  <div className="validation-error">
                    This field is required.
                  </div>
                )}
              </div>
            </div>
            <div className="form-group row">
              <label
                htmlFor={`tab_${tabIndex}_field_location_0`}
                className="col-sm-4 col-form-label"
              >
                Location*
              </label>
              <div className="col-sm-8">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Area / Grid / Room"
                  onChange={onChangeAddress}
                  value={value ? (value[`tab_${tabIndex}_field_location_0`] ?? undefined) : undefined}
                  data-tab-id={tabIndex}
                  id={`tab_${tabIndex}_field_location_0`}
                  name={`tab_${tabIndex}_field_location_0`}
                />
                {errors.location && (
                  <div className="validation-error">
                    This field is required.
                  </div>
                )}
              </div>
            </div>
            {
              fields.map((fieldItem) => (
                <div className="form-group row" key={fieldItem.id}>
                  <label
                    htmlFor={`tab_${tabIndex}_field_${fieldItem.field_type}_${fieldItem.id}`}
                    className="col-sm-4 col-form-label"
                  >
                    {`${fieldItem.fied_text}${fieldItem.field_required === '1' ? '*' : ''}`}
                  </label>
                  <div className="col-sm-8">
                    {newActionBody(fieldItem)}
                  </div>
                </div>
              ))
            }
          </>
        )
  );
};

FieldAction.propTypes = {
  actionFields: PropTypes.array,
  tabIndex: PropTypes.number,
  typeList: PropTypes.array,
  errors: PropTypes.object,
  value: PropTypes.object,
  onSetData: PropTypes.func.isRequired,
  setErrors: PropTypes.func.isRequired,
};

FieldAction.defaultProps = {
  actionFields: [],
  tabIndex: 1,
  typeList: [],
  errors: null,
  value: null,
};

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    getFieldList,
  },
  dispatch,
);

const mapStateToProps = (store) => ({
  actionFields: store.incidentData.actionFields,
});

export default connect(mapStateToProps, mapDispatchToProps)(FieldAction);
