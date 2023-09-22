import React, { useState } from 'react';

const NewBoxForm = ({ addBox }) => {
  const [formData, setFormData] = useState({ width: '', height: '', backgroundColor: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addBox(formData);
    setFormData({ width: '', height: '', backgroundColor: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Width:
        <input type="number" name="width" value={formData.width} onChange={handleChange} />
      </label>
      <label>
        Height:
        <input type="number" name="height" value={formData.height} onChange={handleChange} />
      </label>
      <label>
        Background Color:
        <input type="text" name="backgroundColor" value={formData.backgroundColor} onChange={handleChange} />
      </label>
      <button type="submit">Add Box</button>
    </form>
  );
};

export default NewBoxForm;