 export const formatWeatherData = (weatherData) => {
  const formattedWeatherData = {};
  formattedWeatherData.locationData = formatLocationData(weatherData)
  formattedWeatherData.forcastData = formatForcastData(weatherData)
  return formatForcastData
}

const formatLocationData = ({location, current}) => {
  const { name, region, country, localTime: time } = location
  const { temp_f: temp, condition: { icon, text} } = current
  return { name, region, country, time, temp, icon, text};
}

const formatForcastData = ({ forecast}) => {
  const formattedForcastData = [];
  const { forecastday } = forecast;
  forecastday.forEach(dayData => {
    formatForcastData.push({
			date: dayData.date,
			high: dayData.day.maxtemp_f,
			low: dayData.day.mintemp_f,
			text: dayData.day.condition.text,
			icon: dayData.day.condition.icon,
		});
   })
	return formattedForcastData;
};