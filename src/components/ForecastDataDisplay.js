import React from 'react';

const ForecastDataDisplay = ({ forecast: { date, high, low, text, icon } }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', margin:'1rem'} }>
      <p>{date }</p>
      <p>{high }</p>
      <p>{low }</p>
      <p>{text }</p>
      <img src={icon} style={{width:'50px'}} alt='icon display of the current weather'/>
    </div>
  );
};

export default ForecastDataDisplay;