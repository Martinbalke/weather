import React, { useState, useEffect} from 'react';
import superagent from 'superagent';
import { FormattedWeatherData, formatWeatherData } from '../helpers/formatWeatherData';
import LocationDataDisplay from './LocationDataDisplay';
import ForecastDataDisplay from './ForecastDataDisplay';
import FavoritesDisplay from './FavoritesDisplay'
import LocationSearchBar from './LocationSearchBar'

const WeatherContainer = () => {
	const [weatherData, setWeatherData] = useState<FormattedWeatherData>({}) ;
	const [location, setLocation] = useState<string>('Seattle');


	useEffect(() => {
		async function getWeatherData() {
			try {
				let data = await superagent
					.get(
						`http://api.weatherapi.com/v1/forecast.json?key=763268107e8e427abe0160826210206&q=${location}&days=7&aqi=no&alerts=no`
					)
				if (data.status === 200) {
					const formattedData : FormattedWeatherData = formatWeatherData(data.body);
					setWeatherData(formattedData);
				}
			} catch (error) {}
		}

		getWeatherData();
	}, [location]);


	return (
		<div style={{ width: '50%' }}>
		
			<LocationSearchBar setLocation={(data : string) => setLocation(data)} weatherData={weatherData }/>
			{weatherData.locationData &&
				(
				<div>
          <LocationDataDisplay location={weatherData.locationData} highLow={ weatherData.forecastData}/>
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
