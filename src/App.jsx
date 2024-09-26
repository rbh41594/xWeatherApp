import React, { useState } from "react";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [cityData, setCityData] = useState(null); // Initially no data
  const [error, setError] = useState("");

  const fetchWeatherData = async () => {
    try {
      const response = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=f7181304ab6040b1be7115913242509&q=${city}&aqi=no`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch weather data");
      }
      const data = await response.json();
      setCityData(data);
      setError("");
    } catch (error) {
      alert(error);
      setCityData(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city) {
      fetchWeatherData();
    } else {
      setError("Please enter a city name.");
    }
  };

  return (
    <div className="weather-app">
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
        />
        <button type="submit">Search</button>
      </form>

      {error && <p className="error-message">{error}</p>}

      {cityData && (
        <div className="weather-cards">
          <div className="card">
            <h3>Temperature</h3>
            <p>{cityData.current.temp_c}°C</p>
          </div>
          <div className="card">
            <h3>Humidity</h3>
            <p>{cityData.current.humidity}%</p>
          </div>
          <div className="card">
            <h3>Condition</h3>
            <p>{cityData.current.condition.text}</p>
          </div>
          <div className="card">
            <h3>Wind Speed</h3>
            <p>{cityData.current.wind_kph} kph</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
