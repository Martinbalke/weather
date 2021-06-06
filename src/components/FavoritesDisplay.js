import React from 'react';

const FavoritesDisplay = ({ favorites, remove}) => {
  return (
		<div style={{ display: 'flex', flexDirection: 'column' }}>
			{favorites &&
				favorites.map((favorite, index) => (
					<div>
            <p key={favorite + 'he'}>{favorite}</p>
            <input type="button" defaultValue='-' onClick={ e => remove(index) }/>
					</div>
				))}
		</div>
	);
};

export default FavoritesDisplay;