import React, { useState, useEffect, useRef } from 'react';
import superagent from 'superagent';
import { formatWeatherData } from '../helpers/formatWeatherData';
import LocationDataDisplay from './LocationDataDisplay';
import ForecastDataDisplay from './ForecastDataDisplay';

const WeatherContainer = () => {
	const [weatherData, setWeatherData] = useState('');
	const [location, setLocation] = useState('Seattle');
  const inputRef = useRef(false);
  
  useEffect(() => {
    window.addEventListener('click', e => {
      if (e.target !== inputRef.current) {inputRef.current.value = weatherData.locationData.name}
     })

  })

	useEffect(() => {
		async function getWeatherData() {
			try {
				let data = await superagent
					.get(
						`http://api.weatherapi.com/v1/forecast.json?key=763268107e8e427abe0160826210206&q=${location}&days=7&aqi=no&alerts=no`
					)
				if (data.status === 200) {
					data = formatWeatherData(data.body);
					setWeatherData(data);
				}
			} catch (error) {}
		}

		getWeatherData();
	}, [location]);

	return (
		<div style={{ width: '50%' }}>
			<input
				type='text'
				onKeyUp={(e) => setLocation(() => e.target.value)}
				ref={inputRef}
			/>
			{weatherData.locationData && (
				<LocationDataDisplay location={weatherData.locationData} />
			)}
			<div className='' style={{ display: 'flex' }}>
				{weatherData.forecastData &&
					weatherData.forecastData.map((forecast) => (
						<ForecastDataDisplay forecast={forecast} />
					))}
			</div>
		</div>
	);
};

export default WeatherContainer;
