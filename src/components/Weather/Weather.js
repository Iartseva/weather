import React, { useState, useEffect } from 'react';
import './Weather.css';
import sunny from '../../image/sunny.png';
import cloudy from '../../image/cloudy.png';
import convertTemp from '../../utils/utils';

function Weather (props) {
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
      <img className='card__picture' src={srcImage} alt='инфографика погоды'/>
      <div className="weather">
        <p className="weather__temp">{convertTemp(props.degrees)}</p>
        <p className="weather__temp-more">{'Max ' + convertTemp(props.degreesMax) + ' Min ' + convertTemp(props.degreesMin)}</p>
      </div>
    </>
  );
}

export default Weather;