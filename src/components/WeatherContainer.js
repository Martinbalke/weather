import React, { useState, useEffect} from 'react';
import superagent from 'superagent';
import { formatWeatherData } from '../helpers/formatWeatherData';
import LocationDataDisplay from './LocationDataDisplay';
import ForecastDataDisplay from './ForecastDataDisplay';
import FavoritesDisplay from './FavoritesDisplay'
import LocationSearchBar from './LocationSearchBar'

const WeatherContainer = () => {
	const [weatherData, setWeatherData] = useState('');
	const [location, setLocation] = useState('Seattle');


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

  // function handleFavorites(action, data) {
  //   if (action === 'add') setFavorites(favorites => [data, ...favorites]) ;
  //   if (action === 'remove') setFavorites(favorites => [...favorites].filter(favorite => favorite !== data))
  //   window.localStorage.setItem('weatherFavorites', favorites);
  // }

	return (
    <div style={{ width: '50%' }}>
      <LocationSearchBar setLocation={setLocation} weatherData={weatherData }/>
			{weatherData.locationData && (
				<div>
          <LocationDataDisplay location={weatherData.locationData} highLow={ weatherData.forecastData[0]}/>
				</div>
			)}
			<div className='' style={{ display: 'flex' }}>
				{weatherData.forecastData &&
					weatherData.forecastData.map((forecast) => (
						<ForecastDataDisplay forecast={forecast} />
					))}
			</div>
			<FavoritesDisplay location={location}/>
		</div>
	);
};

export default WeatherContainer;
