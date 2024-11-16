import React from 'react';

const CategorySelector = ({ category, setCategory }) => {
  const categories = ['Movie', 'TV Series', 'Episodes'];

  return (
    <div className="dropdown">
      <label>Category: </label>
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">Select</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategorySelector;
