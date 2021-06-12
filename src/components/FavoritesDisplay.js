import React, { useState } from 'react';
import { Flex, Text, IconButton } from '@chakra-ui/react';
import { AddIcon, DeleteIcon, Box } from '@chakra-ui/icons';


const FavoritesDisplay = ({ location }) => {
	  const [favorites, setFavorites] = useState(
			window.localStorage.getItem('weatherFavorites') || []
		);


	function handleFavorites(action, data) {
			if (action === 'add') setFavorites(favorites => [data, ...favorites]) ;
			if (action === 'remove') setFavorites(favorites => [...favorites].filter(favorite => favorite !== data))
			window.localStorage.setItem('weatherFavorites', favorites);
	}

	return (
		<Flex>
			<Box>
				<Text fontSize='l' fontWeight='semibold'>{ location}</Text>
				<IconButton
					aria-label='Add location to favorites'
					icon={<AddIcon />}
					onClick={() => handleFavorites('add', location)}
				/>
			</Box>
			<Flex flexDirection='column'>
				{favorites &&
					favorites.map((favorite) => (
						<Box>
							<Text fontSize='l' fontWeight='semibold' key={favorite + 'he'}>
								{favorite}
							</Text>
							<IconButton
								icon={<DeleteIcon />}
								aria-label='Remove a location from fravorites'
								onClick={(e) => handleFavorites('remove', favorite)}
							/>
						</Box>
					))}
			</Flex>
		</Flex>
	);
};

export default FavoritesDisplay;