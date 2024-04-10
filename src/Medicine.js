import React, { useState } from 'react';
import './components/medi.css';
function Medicine({ onAddMedicine }) {
  const [name, setName] = useState('');
  const [unit, setUnit] = useState('');
  const [type, setType] = useState('');
  const [quantity, setQuantity] = useState(1); // Initial quantity set to 1

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddMedicine({ id: Date.now(), name, unit, type, quantity }); // Include quantity in data
    setName('');
    setUnit('');
    setType('');
    setQuantity(1); // Reset quantity after submission
  };

  return (
    <div>
      <h1>Medicine Info</h1>
      <form onSubmit={handleSubmit} className="medicine-form">
        <label htmlFor="name">Medicine Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="medicine-input"
        />

        <label htmlFor="unit">Unit:</label>
        <input
          type="text"
          id="unit"
          value={unit}
          onChange={(e) => setUnit(e.target.value)}
          required
          className="medicine-input"
        />

        <label htmlFor="type">Medicine Type:</label>
        <input
          type="text"
          id="type"
          value={type}
          onChange={(e) => setType(e.target.value)}
          required
          className="medicine-input"
        />

        <label htmlFor="quantity">Quantity:</label>
        <input
          type="number"
          id="quantity"
          placeholder="7"
          value={quantity}  // Bind quantity state
          onChange={(e) => setQuantity(e.target.value)}
          required
          className="medicine-input"
        />

        <button type="submit" className="add-medicine-button">
          Add Medicine
        </button>
      </form>
    </div>
  );
}

export default Medicine;
