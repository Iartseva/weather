import React, { useState } from 'react';
import './WeatherByHourList.css';
/* import picbyhour from '../../image/picbyhour.png'; */
import WeatherByHourItem from '../WeatherByHourItem/WeatherByHourItem';


function WeatherByHourList (props) {
  const dateNow = new Date();
  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];

  return (
    <>  
      <div className='weather-by-hour'>
        <div className='weather-by-hour__title'>
          <p>Today</p>
          <p>{dateNow.getDate() + ' ' + monthNames[dateNow.getMonth()]}</p>
      </div>
      <ul className='weather-by-hour__list'>
        {props.list.map((item) => (
          <WeatherByHourItem
            key={item.dt}
            tempForTime={item.main.temp}
            time={item.dt_txt}
            сloudValue={props.сloudValue}
          />
        ))}
      </ul>
    </div>
    </>
  );
}

export default WeatherByHourList;