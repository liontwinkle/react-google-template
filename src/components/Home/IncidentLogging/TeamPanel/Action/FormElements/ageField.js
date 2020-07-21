import React from 'react';
import PropTypes from 'prop-types';

const ActionAgeField = ({
  tabIndex,
  fieldItem,
  onSetData,
  value,
}) => {
  const required = (fieldItem.field_required === '1');
  const handleChange = (value) => {
    onSetData({ [`tab_${tabIndex}_field_${fieldItem.field_type}_${fieldItem.id}[]`]: value });
  };

  const handleAge = (e) => {
    onSetData({ [`tab_${tabIndex}_field_age-field1_${fieldItem.id}`]: e.target.value });
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
          value={value ? value[`tab_${tabIndex}_field_${fieldItem.field_type}_${fieldItem.id}[]`] : []}
          onChange={handleChange}
          defaultValue="Exact"
        >
          <option value="Exact" className="age-exact">Exact</option>
          <option value="Estimate">Estimate</option>
          <option value="Range">Range</option>
          <option value="Infant">Infant (Months)</option>
        </select>
      </div>
      <input
        type="number"
        className="form-control range-hide age-input"
        aria-label="Age Info"
        name={`tab_${tabIndex}_field_age-field1_${fieldItem.id}`}
        placeholder="Age Info"
        value={value ? value[`tab_${tabIndex}_field_age-field1_${fieldItem.id}`] : []}
        onChange={handleAge}
      />
    </div>
  );
};

ActionAgeField.propTypes = {
  tabIndex: PropTypes.number,
  fieldItem: PropTypes.object,
  value: PropTypes.object,
  onSetData: PropTypes.func.isRequired,
};

ActionAgeField.defaultProps = {
  tabIndex: 1,
  value: null,
  fieldItem: {},
};

export default ActionAgeField;
