import React, {useState, useEffect } from 'react';
import superagent from 'superagent';

const WeatherContainer = () => {
  const [weatherData, setWeatherData] = useState('');
  useEffect(() => {
    async function getWeatherData(){
      const data = await superagent.get(`http://api.weatherapi.com/v1/forecast.json?key=763268107e8e427abe0160826210206&q=Seattle&days=5&aqi=no&alerts=no`)
      setWeatherData(JSON.stringify(data))
    }

    getWeatherData();

  },[])

  return (
    <div>
      <p>{ weatherData }</p>
    </div>
  );
};

export default WeatherContainer;




