import React, { useState } from 'react';
import './WeatherMore.css';
import humidity from '../../image/humidity.png';
import wind from '../../image/wind.png';
import convertTemp from '../../utils/utils';

function WeatherMore (props) {

  return (
    <>  
      <ul className="weather__more">
        <li className='weather__more-info'>
          <p className='weather__more-text'>Feels like {convertTemp(props.degreesFeelsLike)}</p>
        </li>
        <li className='weather__more-info'>
          <img className='weather__more-img' src={humidity} alt='пиктограмма влажности'></img>
          <p className='weather__more-text'>{props.humidity} %</p>
        </li>
        <li className='weather__more-info'>
          <img className='weather__more-img' src={wind} alt='пиктограмма ветра'></img>
          <p className='weather__more-text'>{props.windSpeed} km/h</p>
        </li>
      </ul>
    </>
  );
}

export default WeatherMore;