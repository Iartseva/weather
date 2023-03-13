/* function api() {
  return fetch(`http://api.openweathermap.org/data/2.5/weather?q=moscow&appid=db717016416b6c6836aa83eed33981b2`)
 .then((res) => {
    if (res.ok) {
      return res.json()
    }
    return console.log(`Ошибка: ${res.status}`);
  })
} */

class Api {
  constructor(city)  { 
    this._city = city; 
}

getTempInfo(city) {
  return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this._city}&appid=db717016416b6c6836aa83eed33981b2`)
 .then((res) => {
    if (res.ok) {
      return res.json()
    }
    return console.log(`Ошибка: ${res.status}`);
  })
}

getTempByHourInfo(city) {
  return fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${this._city}&appid=db717016416b6c6836aa83eed33981b2`)
 .then((res) => {
    if (res.ok) {
      return res.json()
    }
    return console.log(`Ошибка: ${res.status}`);
  })
}
}

export default Api;
