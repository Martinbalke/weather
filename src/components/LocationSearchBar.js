import React, { useRef, useEffect} from 'react';
import { Flex, Input, InputGroup, InputRightAddon } from '@chakra-ui/react'
import {searchIcon } from '@chakra-ui/icons'

const LocationSearchBar = ({ setLocation, weatherData }) => {
  const inputRef = useRef(false)

  useEffect(() => {
    function handleClickOutside(e) {
      if (e.target !== inputRef.current && weatherData.locationData.name) {
        inputRef.current.value = weatherData.locationData.name;
      }
    }
    window.addEventListener('click', handleClickOutside);

    return () => window.removeEventListener('click',handleClickOutside);
  });
  return (
		<Flex>
			<InputGroup>
				<Input
					placeholder='Search'
					onKeyUp={(e) => setLocation(() => e.target.value)}
					ref={inputRef}
        />
        <InputRightAddon children={ searchIcon }/>
			</InputGroup>
		</Flex>
	);
};

export default LocationSearchBar;