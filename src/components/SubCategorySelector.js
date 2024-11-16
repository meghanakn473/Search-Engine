import React from 'react';

const SubCategorySelector = ({ category, subCategory, setSubCategory }) => {
  const subCategories = {
    Movie: ['Title', 'Director', 'Release Year'],
    'TV Series': ['Title', 'Director'],
    Episodes: ['Title', 'Season Number', 'Episode Number'],
  };

  return (
    <div className="dropdown">
      <label>Sub-Category: </label>
      <select
        value={subCategory}
        onChange={(e) => setSubCategory(e.target.value)}
        disabled={!category}
      >
        <option value="">Select</option>
        {(subCategories[category] || []).map((sub) => (
          <option key={sub} value={sub}>
            {sub}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SubCategorySelector;
