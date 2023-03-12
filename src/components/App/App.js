import "./App.css";
import React, { useEffect, useState } from "react";
import Api from "../../utils/api";
import Card from "../Card/Card";

function App() {
  const [degrees, setDegrees] = useState("");
  const [degreesMax, setDegreesMax] = useState("");
  const [degreesMin, setDegreesMin] = useState("");
  const [degreesFeelsLike, setDegreesFeelsLike] = useState("");
  const [humidity, setHumidity] = useState("");
  const [windSpeed, setWindSpeed] = useState("");
  const [city, setCity] = useState('Москва');
  const [date, setDate] = useState('');
  const [tempByHour, setTempByHour] = useState([]);
  const [сloudValue, setCloudValue] = useState();
  const [isSearchError, setIsSearchError] = useState(false);
  
  useEffect(() => {
    const api = new Api(city);
    api.getTempInfo()
    .then((res) => {
      if (res) {  
        setIsSearchError(false);
        setDegrees(res.main.temp);
        setDegreesMax(res.main.temp_max);
        setDegreesMin(res.main.temp_min);
        setDegreesFeelsLike(res.main.feels_like);
        setHumidity(res.main.humidity);
        setWindSpeed(res.wind.speed);
        setCloudValue(res.clouds.all);
      }
      else {
        setIsSearchError(true);
      }})
      .catch((res) => console.log(res.status))
    api.getTempByHourInfo()
      .then((res) => {
        setTempByHour(res.list);
      })
      .catch((res) => console.log(res.status));
  }, [city]);

  function handleChangeCity(town) {
    setCity(town);
  }

  return (
    <Card 
      degrees={degrees} 
      degreesMax={degreesMax} 
      degreesMin={degreesMin}
      degreesFeelsLike={degreesFeelsLike}
      humidity={humidity}
      windSpeed={windSpeed}
      date={date}
      list={tempByHour}
      onSearchCity={handleChangeCity}
      city={city}
      сloudValue={сloudValue}
      isSearchError={isSearchError}
    />
  );
}

export default App;
