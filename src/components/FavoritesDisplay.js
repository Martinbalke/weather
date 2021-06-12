import React from 'react';

const FavoritesDisplay = ({ favorites, handleFavorites }) => {
  return (
		<div style={{ display: 'flex', flexDirection: 'column' }}>
			{favorites &&
				favorites.map((favorite) => (
					<div>
            <p key={favorite + 'he'}>{favorite}</p>
            <input type="button" defaultValue='-' onClick={ e => handleFavorites('remove', favorite ) }/>
					</div>
				))}
		</div>
	);
};

export default FavoritesDisplay;