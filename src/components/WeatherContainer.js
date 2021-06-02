import React, {useState, useEffect } from 'react';
import superagent from 'superagent';
import { formatWeatherData } from '../helpers/formatWeatherData';
import LocationDataDisplay from './LocationDataDisplay';

const WeatherContainer = () => {
  const [weatherData, setWeatherData] = useState('');
  const [location, setLocation] = useState('Seattle')
  useEffect(() => {
    async function getWeatherData(){
      let data = await superagent.get(`http://api.weatherapi.com/v1/forecast.json?key=763268107e8e427abe0160826210206&q=Seattle&days=5&aqi=no&alerts=no`)
      if (data.status === 200) {
        data = formatWeatherData(data.body);
        setWeatherData(data);
      };
    }

    getWeatherData();

  },[location])

  return (
    <div>
      { weatherData.locationData && <LocationDataDisplay location={weatherData.locationData }/>}
    </div>
  );
};

export default WeatherContainer;

