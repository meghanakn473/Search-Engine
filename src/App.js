import React, { useState } from "react";
import axios from "axios";
import CategorySelector from "./components/CategorySelector";
import SubCategorySelector from "./components/SubCategorySelector";
import InputField from "./components/InputField";
import ResultList from "./components/ResultList";
import "./App.css";
import logo from "./logo.svg"; // Adjust the path if needed

function App() {
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [results, setResults] = useState([]);

  const handleSubmit = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/search", {
        category,
        subCategory,
        inputValue,
      });
      setResults(response.data);
    } catch (error) {
      console.error("Error fetching results:", error);
    }
  };

  return (
    <div className="app">
      {/* Logo outside the form */}
      <img src={logo} alt="Xperi Logo" className="logo-top-left" />

      {/* Main Content */}
      <div className="form-container">
        <h1 className="form-title">Xperi Search Service</h1>

        <div className="form">
          <CategorySelector category={category} setCategory={setCategory} />
          <SubCategorySelector
            category={category}
            subCategory={subCategory}
            setSubCategory={setSubCategory}
          />
          <InputField
            category={category}
            subCategory={subCategory}
            inputValue={inputValue}
            setInputValue={setInputValue}
          />
          <button
            onClick={handleSubmit}
            disabled={!category || !subCategory || !inputValue}
          >
            Submit
          </button>
        </div>

        <ResultList results={results} />
      </div>
    </div>
  );
}

export default App;
