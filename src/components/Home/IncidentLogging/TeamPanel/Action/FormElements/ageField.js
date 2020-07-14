import React from 'react';
import PropTypes from 'prop-types';

const ActionAgeField = ({ tabIndex, fieldItem, onSetData }) => {
  const required = (fieldItem.field_required === '1');
  const handleChange = (value) => {
    console.log(`selected ${value}`);
    onSetData(`tab_${tabIndex}_field_${fieldItem.field_type}_${fieldItem.id}[]`, value);
  };

  return (
    <div className="input-group onlyflex-s age-row">
      <div className="input-group-prepend">
        <select
          className="custom-select form-control tx-13 age-type"
          id={`tab_${tabIndex}_field_${fieldItem.field_type}_${fieldItem.id}`}
          name={`tab_${tabIndex}_field_${fieldItem.field_type}_${fieldItem.id}`}
          data-tab-id={tabIndex}
          data-age-holder=""
          required={required}
          onChange={handleChange}
        >
          <option value="Exact" className="age-exact" selected>Exact</option>
          <option value="Estimate">Estimate</option>
          <option value="Range">Range</option>
          <option value="Infant">Infant (Months)</option>
        </select>
      </div>
      <input
        type="number"
        className="form-control range-hide age-input"
        aria-label="Age Info"
        data-name={`tab_${tabIndex}_field_age-field1_${fieldItem.id}`}
        placeholder="Age Info"
      />

    </div>
  );
};

ActionAgeField.propTypes = {
  tabIndex: PropTypes.number,
  fieldItem: PropTypes.object,
  onSetData: PropTypes.func.isRequired,
};

ActionAgeField.defaultProps = {
  tabIndex: 1,
  fieldItem: {},
};

export default ActionAgeField;
