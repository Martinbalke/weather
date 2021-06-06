import React from 'react';

const FavoritesDisplay = ({ favorites}) => {
  return (
    <div style={{ display: 'flex', flexDirection:'column'}}>
      {favorites && favorites.map(favorite => <p key={favorite + 'he'}>{favorite }</p>)}
    </div>
  );
};

export default FavoritesDisplay;