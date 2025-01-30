import React, { useState } from "react";

const Weather = () => {
  const [city, setCity] = useState("");
  const [result, setResult] = useState("");

  const apiKey = "6bac73bcd3a38b320e50734247adfb90";

  const fetchWeather = async (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("City not found");
      }
      const data = await response.json();
      const { temp: temperature, pressure, humidity } = data.main;
      const description = data.weather[0].description;
      setResult(
        `The Temperature in ${city} is ${temperature}°C, Pressure: ${pressure} hPa, Humidity: ${humidity}%, with ${description}.`
      );
    } catch (error) {
      setResult(error.message);
    }
  };

  const handleFetchWeather = () => {
    if (city) {
      fetchWeather(city);
    } else {
      setResult("Please enter a city name.");
    }
  };

  return (
    <div id="cont">
      <h1>Weather Condition</h1>
      <div id="item">
        <input
          type="text"
          id="city"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button id="fetchWeather" onClick={handleFetchWeather}>
          GET
        </button>
      </div>
      <p id="result">{result}</p>
    </div>
  );
};

export default Weather;
