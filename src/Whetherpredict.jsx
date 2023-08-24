import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Whetherpredict.css"

const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('');
  const [apiKey] = useState('b510b479fea86e3244f5e48b80136a31');

  const CallAPI=() => {
    setWeatherData("")
    if (city !== '') {
      axios
        .get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then((response) => {
          setWeatherData(response.data);
        })
        .catch((error) => {
          console.error('Error fetching weather data:', error);
        });
    }
  }

  return (
       <div className='backgroundimagewrapdiv'>
            <img className='bgimage' src="https://www.hdwallpapers.in/download/white_flowers_tree_in_fog_covered_forest_background_hd_nature-2560x1440.jpg" alt="backgroundimage"></img>
    <div className='whetherwrap'>
      <h2>Welcome To Whether Predictor WebApp</h2>
      <input type="text"
        className='input'
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <br></br>
      <button  onClick={CallAPI} className='viewbutton'>View Wheather</button>
      {weatherData ?(
        <div className='datawarpdiv'>
          {console.log(weatherData)}
          <h3>Weather in {weatherData.name}, {weatherData.sys.country}</h3>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Feels Like {weatherData.main.feels_like}°C</p>
          <p>Weather: {weatherData.weather[0].description}</p>
        </div>
      ):
      <h3>Enter the correct place to view</h3>}
    </div>
    </div>
  );
};

export default WeatherApp;
