import React from 'react';

const Dropdown = ({ label, value, options, onChange }) => {
  return (
    <label>
      {label}
      <select value={value} className="custom-select" onChange={onChange}>
        {options.map((option) => (
        <option value={option.value}>{option.label}</option>
      ))}
      </select>
    </label>
  );
};

export default Dropdown;