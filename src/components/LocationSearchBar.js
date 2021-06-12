import React, { useRef, useEffect} from 'react';
import {Flex, Input, Button, Icon } from '@chakra-ui/react'

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
      <input
        type='text'
        onKeyUp={(e) => setLocation(() => e.target.value)}
        ref={inputRef}
      />
    </Flex>
  );
};

export default LocationSearchBar;