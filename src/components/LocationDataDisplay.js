import React from 'react';

const LocationDataDisplay = ({ location: {
  name,
  region,
  country,
  time,
  temp,
  icon,
  text,
} }) => {
	return (
		<div key='location'>
			<h3>{name}</h3>
      <h3>{region}</h3>
      <p>{ country}</p>
      <p>{ time}</p>
      <p>{temp}</p>
      <p>{text}</p>
      
      <img src={icon} alt='Weather description icon'/>
		</div>
	);
};

export default LocationDataDisplay;