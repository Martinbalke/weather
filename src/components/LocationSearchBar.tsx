import React, { useRef, useEffect } from 'react';
import { Flex, Input, InputGroup, InputRightAddon } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { FormattedWeatherData } from '../helpers/formatWeatherData';

interface Props {
	setLocation: Function;
	weatherData: FormattedWeatherData;
}

const LocationSearchBar = ({ setLocation, weatherData }: Props) => {
	const inputRef = useRef<HTMLInputElement>(null);

	function handleClickOutside(e: Event) {
		if (
			e.target !== inputRef.current &&
			weatherData.locationData?.name &&
			!(e.target as HTMLElement).id
		) {
			console.log((e.target as HTMLElement).id);
			inputRef.current!.value = weatherData.locationData?.name;
			setLocation(() => inputRef.current!.value);
		}
	}

	useEffect(() => {
		window.addEventListener('click', handleClickOutside);
		return () => window.removeEventListener('click', handleClickOutside);
	});

	return (
		<Flex>
			<InputGroup>
				<Input
					placeholder='Search'
					onKeyUp={(event: React.KeyboardEvent<HTMLInputElement>) =>
						setLocation(() => (event.target as HTMLInputElement).value)
					}
					ref={inputRef}
				/>
				<InputRightAddon children={<SearchIcon />} />
			</InputGroup>
		</Flex>
	);
};

export default LocationSearchBar;
