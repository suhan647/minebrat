import React, { useState } from "react";
import ListComponent from "./components/ListComponent";
import ResultComponent from "./components/ResultComponent";

function App() {
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedCityName, setSelectedCityName] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedStateName, setSelectedStateName] = useState("");
  const [showResult, setShowResult] = useState(false);

  const handleStateChange = (stateID, stateName) => {
    setSelectedState(stateID);
    setSelectedStateName(stateName);
  };

  const handleCityChange = (cityID, cityName) => {
    setSelectedCity(cityID);
    setSelectedCityName(cityName);
  };

  const handleSubmit = () => {
    setShowResult(true);
  };

  return (
    <div className="App">
      {!showResult && (
        <ListComponent
          handleStateChange={handleStateChange}
          handleCityChange={handleCityChange}
          handleSubmit={handleSubmit}
        />
      )}
      {showResult && (
        <ResultComponent
          selectedCityName={selectedCityName}
          selectedStateName={selectedStateName}
        />
      )}
    </div>
  );
}

export default App;
