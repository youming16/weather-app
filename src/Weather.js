import React, { useState } from "react";
import axios from "axios";



const Weather = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [city, setCity] = useState("");
    

    const getWeatherData = async () => {
        const apiKey = "0d12ae117ff685cda29153295641d917";
        const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );
        setWeatherData(response.data);
    };

    const cities = [
        { id: 1, name: 'Sydney' },
        { id: 2, name: 'Melbourne' },
        { id: 3, name: 'Brisbane' },
        { id: 4, name: 'Perth' },
        { id: 5, name: 'Adelaide' },
        { id: 6, name: 'Gold Coast' },
        // Add more cities as needed
    ];

  
    // Render the selection
    return (
        <div>
            <label htmlFor="city">Choose a city:</label>
            <select id="city" name="city" onChange={(event) => setCity(event.target.value)}>
                {cities.map(city => (
                    <option key={city.id} value={city.name}>{city.name}</option>
                ))}
            </select>
            <button onClick={getWeatherData}>Get Weather</button>
            {weatherData && (
                <div>
                <h1>{weatherData.name}</h1>
                <p>{weatherData.main.temp}°C</p>
                <p>{weatherData.weather[0].description}</p>
                </div>
            )}
        
        </div>
    );
};

export default Weather;
