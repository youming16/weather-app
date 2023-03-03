import React, { useState } from "react";
import axios from "axios";

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("");

  const getWeatherData = async () => {
    const apiKey = "0d12ae117ff685cda29153295641d917";
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`
    );
    setWeatherData(response.data);
  };

  return (
    <div>
      <input type="text" onChange={(e) => setCity(e.target.value)} />
      <button onClick={getWeatherData}>Get Weather</button>
      {weatherData && (
        <div>
          <h1>{weatherData.name}</h1>
          <p>{weatherData.main.temp}°F</p>
          <p>{weatherData.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
