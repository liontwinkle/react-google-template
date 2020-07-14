import React from 'react';
import PropTypes from 'prop-types';

const ActionGenderFieldExtend = ({ tabIndex, fieldItem, onSetData }) => {
  const required = (fieldItem.field_required === '1');
  const handleChange = (value) => {
    console.log(`selected ${value}`);
    onSetData(`tab_${tabIndex}_field_${fieldItem.field_type}_${fieldItem.id}[]`, value);
  };

  return (
    <select
      className="custom-select form-control"
      id={`tab_${tabIndex}_field_${fieldItem.field_type}_${fieldItem.id}`}
      name={`tab_${tabIndex}_field_${fieldItem.field_type}_${fieldItem.id}`}
      data-tab-id={tabIndex}
      required={required}
      onChange={handleChange}
    >
      <option value="0" selected>Unknown</option>
      <option value="Female">Female</option>
      <option value="Male">Male</option>
      <option value="Non-Binary">Non-Binary</option>
      <option value="Transgender male to female">Transgender male to female</option>
      <option value="Transgender female to male">Transgender female to male</option>
    </select>
  );
};

ActionGenderFieldExtend.propTypes = {
  tabIndex: PropTypes.number,
  fieldItem: PropTypes.object,
  onSetData: PropTypes.func.isRequired,
};

ActionGenderFieldExtend.defaultProps = {
  tabIndex: 1,
  fieldItem: {},
};

export default ActionGenderFieldExtend;
