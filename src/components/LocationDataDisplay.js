import React from 'react';
import { Flex, Box, Text, Image } from '@chakra-ui/react'

const LocationDataDisplay = ({ location: {
  name,
  region,
  country,
  time,
  temp,
  icon,
  text,
}, highLow }) => {
	return (
		<Flex
			w='50rem'
			bg='purple'
			color='white'
			p='4'
			px='12'
			borderRadius='4'
			justifyContent='space-between'
		>
			<Box>
				<Text fontSize='xl' fontWeight='bold'>
					{name + ' ' + region}
				</Text>
				<Text
					fontSize='lg'
					fontWeight='bold'
					color='whiteAlpha.700'
				>{`As of ${new Date().toLocaleTimeString()}`}</Text>

				<Text fontSize='5xl' fontWeight='black'>
					{temp + '°'}
				</Text>
				<Text fontSize='xl' fontWeight='black'>
					{text}
				</Text>
			</Box>

			<Flex flexDirection='column' >
				<Image src={icon} alt='Weather description icon' />
				<Text
					fontSize='xl'
					fontWeight='medium'
				>{`${highLow.low} / ${highLow.high}`}</Text>
			</Flex>
		</Flex>
	);
};

export default LocationDataDisplay;