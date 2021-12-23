import React, { useState } from "react";
import axios from "axios";

export default function WeatherSearch() {
  let [message, setMessage] = useState(false);
  let [city, setCity] = useState("");

  function displayWeather(response) {
    let icon = `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`;

    setMessage(
      <ul>
        <li>
          The current temperature in {city} is{" "}
          {Math.round(response.data.main.temp)}˚C
        </li>
        <li>Humidity is {Math.round(response.data.main.humidity)} %</li>
        <li>Wind speed of {Math.round(response.data.wind.speed)}km/h </li>
        <li>{response.data.weather[0].description}</li>
        <img src={icon} alt="weatherDescription" />
      </ul>
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = `c3704d557b195c9549dbf7f2691c5783`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  function updateCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Type a city name"
          onChange={updateCity}
        />
        <input type="submit" value="Search" />
      </form>
      <div>{message}</div>
    </div>
  );
}
