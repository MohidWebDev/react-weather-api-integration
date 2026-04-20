import React, { useState } from "react";

function WeatherApp() {
  const [city, setCity] = useState("");
  const [result, setResult] = useState("");

  const checkWeather = async () => {
    if (!city) return;
    try {
      const response = await fetch(
        `https://p2pclouds.up.railway.app/v1/learn/weather?city=${city}`,
      );
      const data = await response.json();
      setResult(`${city} weather is ${data.current.temp_c} Celsius`);
    } catch (err) {
      setResult("Something went wrong!");
    }
  };

  return (
    <div className="weather-feature">
      <h2>Weather Updates</h2>
      <input
        type="text"
        placeholder="Enter city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={checkWeather}>Check Weather</button>

      <div id="weather" style={{ marginTop: "15px" }}>
        {result}
      </div>
    </div>
  );
}

export default WeatherApp;
