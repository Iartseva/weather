import React from 'react';
import './Card.css';
import CityForm from '../CityForm/CityForm';
import Weather from '../Weather/Weather';
import WeatherMore from '../WeatherMore/WeatherMore';
import WeatherByHourList from '../WeatherByHourList/WeatherByHourList';

function Card(props) {

  return (
    <>  
      <div className="card">
        <CityForm 
          onSearchCity={props.onSearchCity} 
          city={props.city}
          isSearchError={props.isSearchError}/>
        <Weather 
          degrees={props.degrees} 
          degreesMax={props.degreesMax} 
          degreesMin={props.degreesMin}
          сloudValue={props.сloudValue}/>
        <WeatherMore 
          humidity={props.humidity} 
          windSpeed={props.windSpeed} 
          degreesFeelsLike={props.degreesFeelsLike}/>
        <WeatherByHourList 
          tempForTime={props.tempForTime} 
          time={props.time} 
          list={props.list}
          сloudValue={props.сloudValue}/>
      </div>
    </>
  );
}

export default Card;