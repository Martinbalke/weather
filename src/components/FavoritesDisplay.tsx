import React, { useState, useEffect } from 'react';
import { Flex, Text, IconButton } from '@chakra-ui/react';
import { AddIcon, DeleteIcon } from '@chakra-ui/icons';

interface Props {
	location: string
	setLocation: Function,
 }

const FavoritesDisplay = (({ location, setLocation }: Props) => {
	const [favorites, setFavorites] = useState(
		JSON.parse(window.localStorage.getItem('weatherFavorites') || '[]')
	);

	
	useEffect(() => {
		window.localStorage.setItem(
			'weatherFavorites',
			JSON.stringify(favorites)
		);

	}, [favorites])
	function handleFavorites(action: string, data: string) {
		if (action === 'add') {
			if (favorites.includes(data)) return;
			setFavorites((favorites: Array<string>) => [data, ...favorites]);
		}
		if (action === 'remove')
			setFavorites((favorites: Array<string>) =>
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
					favorites.map((favorite: string) => (
						<Flex alignItems='center' key={favorite}>
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
								m='2'
								aria-label='Remove a location from fravorites'
								onClick={(e) => handleFavorites('remove', favorite)}
							/>
							<IconButton
								icon={<AddIcon />}
								m='2'
								id={`${favorite}`}
								aria-label='Remove a location from fravorites'
								onClick={() => setLocation(favorite)}
							/>
						</Flex>
					))}
			</Flex>
		</Flex>
	);
});

export default FavoritesDisplay;
