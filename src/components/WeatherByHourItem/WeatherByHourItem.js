import React, { useState, useEffect } from 'react';
import sunny from '../../image/sunny.png';
import cloudy from '../../image/cloudy.png';
import convertTemp from '../../utils/utils';

function WeatherByHourItem (props) {
  const [srcImage, setSrcImage] = useState({});

  useEffect(() => {
    if (props.сloudValue > 50) {
      setSrcImage(cloudy);
    }
    else {
      setSrcImage(sunny);
    }
   }, [props.сloudValue]);

  return (
    <>  
      <li className='weather-by-hour__item'>
        <p className='weather-by-hour__temp'>{convertTemp(props.tempForTime)}</p>
        <img className='weather-by-hour__image' src={srcImage} alt='пиктограмма погоды по часам'></img>
        <p className='weather-by-hour__time'>{props.time.slice(11, 16)}</p>  
      </li>
    </>
  );
}

export default WeatherByHourItem;