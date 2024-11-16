import React from 'react';

const InputField = ({ category, subCategory, inputValue, setInputValue }) => {
  return (
    <div className="input-field">
      <label>Input: </label>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        disabled={!subCategory}
        placeholder={`Enter ${subCategory}`}
      />
    </div>
  );
};

export default InputField;
