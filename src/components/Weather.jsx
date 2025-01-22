import React, { useState } from 'react';
import { motion } from 'framer-motion'; // For animations
import { FaCloudSun, FaCloudRain, FaSun, FaMapMarkerAlt } from 'react-icons/fa'; // Weather Icons
import { MdError } from 'react-icons/md'; // Error Icon

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const [locationRequested, setLocationRequested] = useState(false); // Track if location has been requested

  const getLocationAndFetchWeather = async () => {
    try {
      // Get user's location using the Geolocation API
      const position = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });

      const { latitude, longitude } = position.coords;

      // Construct the weather API URL with user's latitude and longitude
      const API_KEY = '0fb6b5b5ebb71eb6bd4232ff193f7b50';
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;

      // Fetch the weather data
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }
      const data = await response.json();
      setWeather(data);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleButtonClick = () => {
    setLocationRequested(true);
    getLocationAndFetchWeather();
  };

  if (error) {
    return (
      <div className="flex items-center justify-center bg-red-100 p-4 rounded-md shadow-lg">
        <MdError className="text-red-500 text-2xl mr-2" />
        <p className="text-red-500">{`Error fetching weather: ${error}`}</p>
      </div>
    );
  }

  if (!weather && locationRequested) {
    return (
      <div className="flex items-center justify-center p-4">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-8 h-8 border-4 border-t-4 border-purple-500 rounded-full"
        />
        <p className="text-lg text-purple-600 ml-4">Loading weather...</p>
      </div>
    );
  }

  if (!weather) {
    return (
      <div className="flex items-center justify-center p-4">
        <motion.button
          onClick={handleButtonClick}
          className="flex items-center px-6 py-2 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition duration-200 ease-in-out"
        >
          <FaMapMarkerAlt className="mr-2 text-lg" />
          Get Location
        </motion.button>
      </div>
    );
  }

  const { temp, humidity } = weather.main;
  const { description, icon } = weather.weather[0];
  const { name } = weather;

  const weatherIconUrl = `http://openweathermap.org/img/wn/${icon}.png`;

  // Apply color scheme based on temperature
  let bgColor = "bg-purple-500"; // Default purple for cool weather
  if (temp > 30) {
    bgColor = "bg-pink-500"; // Pink for warm weather
  } else if (temp < 10) {
    bgColor = "bg-purple-700"; // Dark purple for cold weather
  }

  return (
    <motion.div
      className={`h-[200px] p-4 rounded-lg shadow-lg ${bgColor} text-white max-w-sm mx-auto overflow-hidden`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-xl font-semibold truncate">{`Weather in ${name}`}</h2>
      <div className="flex items-center my-2">
        <img src={weatherIconUrl} alt={description} className="w-12 h-12" />
        <p className="ml-4 text-sm">{description}</p>
      </div>
      <p className="text-lg font-bold truncate">Temperature: {temp}°C</p>
      <p className="text-sm">Humidity: {humidity}%</p>
      <div className="mt-2">
        <p className="text-sm font-semibold">Current Conditions:</p>
        <div className="flex items-center justify-center space-x-4">
          <FaCloudSun className="text-pink-200 text-2xl" />
          <FaCloudRain className="text-purple-300 text-2xl" />
          <FaSun className="text-orange-400 text-2xl" />
        </div>
      </div>
    </motion.div>
  );
};

export default Weather;
