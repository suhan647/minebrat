import React, { useState, useEffect } from "react";
import CityComponent from "./CityComponent";

function ListComponent({ handleStateChange, handleCityChange, handleSubmit }) {
  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState("");

  useEffect(() => {
    fetch("https://api.minebrat.com/api/v1/states")
      .then((result) => result.json())
      .then((response) => {
        setStates(response);
      });
  }, []);

  const handleStateSelection = (event) => {
    const selectedStateID = event.target.value;
    const selectedStateName = event.target[event.target.selectedIndex].text;
    setSelectedState(selectedStateID);
    handleStateChange(selectedStateID, selectedStateName);
  };

  return (
    <div>
      <select value={selectedState} onChange={handleStateSelection}>
        <option value="">Select a state</option>
        {states.map((state) => (
          <option key={state.stateId} value={state.stateId}>
            {state.stateName}
          </option>
        ))}
      </select>
      <br />
      <CityComponent
        handleCityChange={handleCityChange}
        selectedState={selectedState}
      />
      <br />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default ListComponent;
