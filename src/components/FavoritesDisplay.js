import React, { useState, useEffect } from 'react';
import { Flex, Text, IconButton } from '@chakra-ui/react';
import { AddIcon, DeleteIcon } from '@chakra-ui/icons';

const FavoritesDisplay = ({ location }) => {
	const [favorites, setFavorites] = useState(
		JSON.parse(window.localStorage.getItem('weatherFavorites')) || []
	);
	
	useEffect(() => {
				window.localStorage.setItem(
					'weatherFavorites',
					JSON.stringify(favorites)
				);

	 }, [favorites])
	function handleFavorites(action, data) {
		if (action === 'add') {
			if (favorites.includes(data)) return;
			setFavorites((favorites) => [data, ...favorites]);
		}
		if (action === 'remove')
			setFavorites((favorites) =>
				[...favorites].filter((favorite) => favorite !== data)
			);
	}

	return (
		<Flex flexDirection='column'>
			<Text fontSize='xl' fontWeight='black'>
				Add location to favorites
			</Text>
			<Flex alignItems='center'>
				<Text fontSize='l' fontWeight='semibold' m='2'>
					{location}
				</Text>
				<IconButton
					aria-label='Add location to favorites'
					icon={<AddIcon />}
					onClick={() => handleFavorites('add', location)}
				/>
			</Flex>
			<Flex flexDirection='column'>
				<Text fontSize='xl' fontWeight='black'>
					Favorites
				</Text>
				{favorites &&
					favorites.map((favorite) => (
						<Flex alignItems='center'>
							<Text
								fontSize='l'
								fontWeight='semibold'
								m='2'
								key={favorite + 'he'}
							>
								{favorite}
							</Text>
							<IconButton
								icon={<DeleteIcon />}
								aria-label='Remove a location from fravorites'
								onClick={(e) => handleFavorites('remove', favorite)}
							/>
						</Flex>
					))}
			</Flex>
		</Flex>
	);
};

export default FavoritesDisplay;
