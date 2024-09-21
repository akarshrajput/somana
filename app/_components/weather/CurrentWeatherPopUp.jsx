"use client";
import { useEffect, useState } from "react";
import { useLocationInfo } from "@/app/_context/LocationContext";
import LoaderSmall from "../main/LoaderSmall";
import axios from "axios";

const CurrentWeatherPopUp = () => {
  const { location, isLoading } = useLocationInfo();
  const [loading, setLoading] = useState(true);
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      if (!isLoading && location) {
        setLoading(false); // Set loading to false once data is ready

        const locParts = location.split(",");
        if (locParts.length === 2) {
          const lat = locParts[0];
          const lon = locParts[1];

          try {
            const res = await axios.get(
              `/api/v1/weather?lat=${lat}&lon=${lon}`,
              {
                headers: {
                  "Content-Type": "application/json",
                },
                cache: "no-store",
              }
            );
            setWeatherData(res.data.data);
          } catch (err) {
            console.log("Error fetching weather");
          }
        }
      }
    };

    fetchWeather();
  }, [isLoading, location]);

  if (loading) {
    return <LoaderSmall />;
  }

  // Extract data for easier access
  const { main, weather, wind } = weatherData || {};
  const temperature = main ? (main.temp - 273.15).toFixed(1) : ""; // Convert Kelvin to Celsius
  const feelsLike = main ? (main.feels_like - 273.15).toFixed(1) : "";
  const humidity = main ? main.humidity : "";
  const windSpeed = wind ? wind.speed : "";
  const weatherDescription = weather ? weather[0].description : "";
  const weatherIcon = weather ? weather[0].icon : "";

  return (
    <div className="flex flex-col items-center bg-gray-200 rounded-full px-2 pr-4">
      {/* <h2 className="text-xl font-bold mb-2">Current Weather</h2> */}
      <div className="flex items-center">
        {weatherIcon && (
          <img
            src={`http://openweathermap.org/img/wn/${weatherIcon}.png`}
            alt={weatherDescription}
            className="w-8 h-8"
          />
        )}
        <span className="">{temperature}°C</span>
      </div>
      {/* <p className="text-gray-600">{weatherDescription}</p>
      <div className="mt-2 text-sm">
        <p>Feels Like: {feelsLike}°C</p>
        <p>Humidity: {humidity}%</p>
        <p>Wind Speed: {windSpeed} m/s</p>
      </div> */}
    </div>
  );
};

export default CurrentWeatherPopUp;
