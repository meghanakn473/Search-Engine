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
      // Map category to API paths
      const categoryMap = {
        Movie: "Movies",
        "TV Series": "TVSeries",
        Episodes: "episodes",
      };

      // Format subcategory to match API keys
      const formattedSubCategory = subCategory.toLowerCase().replace(" ", "");

      // Construct the API endpoint
      const apiEndpoint = `http://localhost:7204/api/v1/${categoryMap[category]}?subcategory=${formattedSubCategory}&searchkey=${inputValue}`;

      console.log("Constructed API Endpoint:", apiEndpoint); // Debugging log

      // Fetch data using axios
      const response = await axios.get(apiEndpoint);

      // Handle empty response
      if (response.data.length === 0) {
        setResults([{ error: "No results found." }]);
      } else {
        setResults(response.data); // Update results with API response
      }
    } catch (error) {
      console.error("Error fetching results:", error);
      setResults([{ error: "Failed to fetch results. Please check your input or try again later." }]);
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
          {/* Category Selector */}
          <CategorySelector category={category} setCategory={setCategory} />

          {/* SubCategory Selector */}
          <SubCategorySelector
            category={category}
            subCategory={subCategory}
            setSubCategory={setSubCategory}
          />

          {/* Input Field */}
          <InputField
            category={category}
            subCategory={subCategory}
            inputValue={inputValue}
            setInputValue={setInputValue}
          />

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            disabled={!category || !subCategory || !inputValue}
            title={!category || !subCategory || !inputValue ? "Please fill out all fields" : ""}
          >
            Submit
          </button>
        </div>

        {/* Result List */}
        <ResultList results={results} />
      </div>
    </div>
  );
}

export default App;
