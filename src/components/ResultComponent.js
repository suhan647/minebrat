import React from "react";

function ResultComponent({ selectedCityName, selectedStateName }) {
  return (
    <h1>
      You have selected {selectedCityName}, {selectedStateName}
    </h1>
  );
}

export default ResultComponent;
