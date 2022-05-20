// React
import React from "react";

function FilterFormInput({
  className,
  labelText,
  formData,
  setFormData,
  name,
}) {
  const handleChange = (e) => {
    setFormData({ ...formData, [name]: e.target.value.toLowerCase() });
  };

  return (
    <div className={className}>
      <label>{labelText}</label>
      <input value={formData.name} onChange={handleChange} placeholder="Any" />
    </div>
  );
}

export default FilterFormInput;
