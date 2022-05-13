import axios from "axios";
import React, { useEffect, useState } from "react";
import WeatherForecastDay from "./WeatherForecastDay";

function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }
  function load() {
    let apiKey = "d472df3cc457416a11c7918c00d8eaa1";
    let lat = props.coordinates.lat;
    let lon = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (loaded) {
    return (
      <div className="mt-10 gap-6 grid grid-cols-4">
        {forecast.map((dailyForecast, index) => {
          return index < 7 ? (
            <div className="w-full mb-4" key={index}>
              <WeatherForecastDay data={dailyForecast} />
            </div>
          ) : null;
        })}
      </div>
    );
  } else {
    load();
    return null;
  }
}

export default WeatherForecast;
