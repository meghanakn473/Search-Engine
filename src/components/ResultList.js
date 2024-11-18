import React from "react";

const ResultList = ({ results }) => {
  return (
    <div className="result-list">
      <h2>Results:</h2>
      {results.length === 0 ? (
        <p>No results to display.</p>
      ) : (
        <ul>
          {results.map((result, index) => (
            <li key={index} className="result-item">
              <pre>{JSON.stringify(result, null, 2)}</pre>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ResultList;
