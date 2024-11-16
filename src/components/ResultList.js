import React from 'react';

const ResultList = ({ results }) => {
  return (
    <div className="result-list">
      <h2>Results:</h2>
      {results.length === 0 ? (
        <p>No results found.</p>
      ) : (
        results.map((result, index) => (
          <div key={index} className="result-item">
            <pre>{JSON.stringify(result, null, 2)}</pre>
          </div>
        ))
      )}
    </div>
  );
};

export default ResultList;
