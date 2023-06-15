import React, { useState, useEffect } from "react";

function CityComponent({ handleCityChange, selectedState }) {
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");

  useEffect(() => {
    if (selectedState) {
      fetch(`https://api.minebrat.com/api/v1/states/cities/${selectedState}`)
        .then((response) => response.json())
        .then((data) => setCities(data));
    }
  }, [selectedState]);

  const handleCitySelection = (event) => {
    const selectedCityID = event.target.value;
    const selectedCityName = event.target[event.target.selectedIndex].text;
    setSelectedCity(selectedCityID);
    handleCityChange(selectedCityID, selectedCityName);
  };

  return (
    <select value={selectedCity} onChange={handleCitySelection}>
      <option value="">Select a city</option>
      {cities.map((city) => (
        <option key={city.cityId} value={city.cityId}>
          {city.cityName}
        </option>
      ))}
    </select>
  );
}

export default CityComponent;
