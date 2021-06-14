
export interface WeatherData {
  current: object,
	location: object,
	forecast: object,
}

export interface LocationData {
  name: string,
  region: string,
  country: string,
  time: Date,
  temp: string,
  icon: string,
  text: string
}

export interface ForecastData {
  date: Date,
  high: string,
  low: string,
  text: string,
  icon: string
};

export interface FormattedWeatherData {
  locationData?: LocationData
  forecastData?: [ForecastData]
}

export const formatWeatherData = (weatherData: WeatherData) => {
  const formattedWeatherData = {} as FormattedWeatherData;
  formattedWeatherData.locationData = formatLocationData(weatherData) as LocationData
  formattedWeatherData.forecastData = formatForcastData(weatherData) as [ForecastData]
  return formattedWeatherData;
}

const formatLocationData = ({ location, current } : WeatherData) => {
  const { name, region, country, localTime: time } : any = location
  const { temp_f: temp, condition: { icon, text} } : any  = current
  return { name, region, country, time, temp, icon, text};
}

const formatForcastData = ({ forecast } : WeatherData) => {
  const formattedForcastData : any = [] ;
  const { forecastday } : any = forecast;
  forecastday.forEach((dayData: any )=> {
    formattedForcastData.push({
			date: dayData.date,
			high: dayData.day.maxtemp_f,
			low: dayData.day.mintemp_f,
			text: dayData.day.condition.text,
			icon: dayData.day.condition.icon,
		});
   })
	return formattedForcastData;
};