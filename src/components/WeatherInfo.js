import React from "react";
import { formatDate } from "../helpers/formatDate";

export default function WeatherInfo(props) {
  return (
    <div className="my-4">
      <div className="flex justify-between text-white my-3">
        <div>
          <span className="text-2xl font-bold">{props.data.city},</span>{" "}
          <span className="text-2xl pl-3">{props.data.country}</span>
        </div>
        <div className="font-normal">
          <strong>Today</strong> : <span>{formatDate(new Date())}</span>
        </div>
      </div>
      <div className="bg-blue-600 shadow-md text-white flex justify-between rounded-lg p-4">
        <div className="w-1/2">
          <div className="w-auto">
            <span className="text-xl font-bold text-white">
              {Math.round(props.data.temperature)}°{" "}
              <span className="mainDescription">{props.data.weatherMain}</span>
            </span>
            <img
              src={`http://openweathermap.org/img/wn/${props.data.icon}.png`}
              alt="Icon"
              className="h-40 w-40"
            />
            <span className="celsius"></span>
          </div>
          <ul className="flex gap-4 text-white">
            <li>max {Math.round(props.data.maxTemp)}°</li>
            <li>min {Math.round(props.data.minTemp)}°</li>
            <li>feels like {Math.round(props.data.feelsLike)}°</li>
          </ul>
        </div>
        <div className="w-1/2">
          <table className="text-md">
            <tr>
              <td>Weather</td>
              <td className="px-6 py-1.5">:</td>
              <td>{props.data.description}</td>
            </tr>
            <tr>
              <td>Wind</td>
              <td className="px-6 py-1.5">:</td>
              <td>{Math.round(props.data.windSpeed)} m/s</td>
            </tr>
            <tr>
              <td>Clouds</td>
              <td className="px-6 py-1.5">:</td>
              <td>{props.data.clouds}%</td>
            </tr>
            <tr>
              <td>Pressure</td>
              <td className="px-6 py-1.5">:</td>
              <td>{props.data.pressure} hPa</td>
            </tr>
            <tr>
              <td>Humidity</td>
              <td className="px-6 py-1.5">:</td>
              <td>{props.data.humidity}%</td>
            </tr>
            <tr>
              <td>Visibility</td>
              <td className="px-6 py-1.5">:</td>
              <td>{props.data.visibility / 1000} km</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}
