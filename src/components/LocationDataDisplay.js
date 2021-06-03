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
		<div className='' style={{ display: 'flex' }}>
			<div className='' style={{ margin: '1rem' }}>
				<h3 style={{ margin: '1rem' }}>{name}</h3>
				<h3 style={{ margin: '1rem' }}>{region}</h3>
			</div>

			<div className='' style={{ display: 'flex', flexDirection: 'column' }}>
				<p>{time}</p>
				<p>{temp}</p>
				<p>{text}</p>

				<img src={icon} alt='Weather description icon' />
			</div>
		</div>
	);
};

export default LocationDataDisplay;