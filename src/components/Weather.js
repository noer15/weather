import React, { useEffect, useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import WeatherLoading from "./WeatherLoading";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState("");

  function searchCity(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      country: response.data.sys.country,
      temperature: response.data.main.temp,
      maxTemp: response.data.main.temp_max,
      minTemp: response.data.main.temp_min,
      feelsLike: response.data.main.feels_like,
      pressure: response.data.main.pressure,
      visibility: response.data.visibility,
      clouds: response.data.clouds.all,
      humidity: response.data.main.humidity,
      weatherMain: response.data.weather[0].main,
      description: response.data.weather[0].description,
      windSpeed: response.data.wind.speed,
      coordinates: response.data.coord,
      icon: response.data.weather[0].icon,
      date: new Date(response.data.dt * 1000),
    });
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async function (position) {
      const location = await axios.get(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${position.coords.latitude}&lon=${position.coords.longitude}`
      );
      setCity(location.data.address.state);
    });
  }, []);

  async function search() {
    const apiKey = "d472df3cc457416a11c7918c00d8eaa1";
    await axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      )
      .then(searchCity);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  if (weatherData.ready) {
    return (
      <div className="max-w-6xl mx-auto mt-20">
        <form onSubmit={handleSubmit}>
          <div className="flex justify-center gap-3">
            <div className="w-1/2">
              <input
                type="search"
                placeholder="Enter a City..."
                className="border w-full p-2 rounded-lg"
                value={city}
                onChange={(event) => setCity(event.target.value)}
              />
            </div>
            <div className="w-auto">
              <button
                type="submit"
                className="bg-blue-500 text-white font-semibold tracking-normal p-2 px-6 rounded-lg border"
              >
                Cari
              </button>
            </div>
          </div>
        </form>
        <div className="mt-20 border-b w-full">
          <div className="w-auto">
            <WeatherInfo data={weatherData} />
          </div>
          <div className="mt-14">
            <h2 className="text-white text-xl font-bold">DAILY FORECAST</h2>
            <div className="h-1 bg-white w-60 mt-2"></div>
            <WeatherForecast coordinates={weatherData.coordinates} />
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return (
      <div className="my-6">
        <WeatherLoading />
      </div>
    );
  }
}
