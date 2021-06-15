import React from 'react';
import { Flex, Text, Image } from '@chakra-ui/react'
import { ForecastData } from '../helpers/formatWeatherData';

interface Props {
	forecast: ForecastData
}

const ForecastDataDisplay = ({ forecast: { date, high, low, text, icon } }: Props) => {
  return (
		<Flex key={`${high + low}`} flexDirection='column' m='4'>
			<Text fontSize='m' fontWeight='medium'>
				{date}
			</Text>
			<Text fontSize='m' fontWeight='medium'>
				{`High: ` + high}
			</Text>
			<Text fontSize='m' fontWeight='medium'>
				{`Low: ` + low}
			</Text>
			<Text fontSize='m' fontWeight='medium'>
				{text}
			</Text>
			<Image
				src={icon}
				style={{ width: '50px' }}
				alt='icon display of the current weather'
			/>
		</Flex>
	);
};

export default ForecastDataDisplay;