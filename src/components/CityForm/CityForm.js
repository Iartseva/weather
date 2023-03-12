import React, { useState } from 'react';
import './CityForm.css';
import location from '../../image/location.png';
import opt from '../../image/opt.png';

function CityForm(props) {
  const [isOpenedForm, setIsOpenedForm] = useState(false);
  const [queryText, setQueryText] = useState('');

  function changeVisibility() {
    setIsOpenedForm(!isOpenedForm);
  }

  function handleChange(e) {
    setQueryText(e.target.value);
  }

  function changeCity(e) {
    e.preventDefault();
    props.onSearchCity(queryText);
    setIsOpenedForm(false);
  }

  return (
    <>  
      <div className="city-form">
        <button className='city-form__button' type='button' onClick={changeVisibility}>
          <img className='city-form__picture' src={location} alt='пиктограмма геопозиции'></img>
          <p className='city-form__city'>{props.city}</p>
          <img className='city-form__picture' src={opt} alt='галочка для раскрытия списка'></img>
        </button>
        {isOpenedForm ? (
          <form className='city-form__form'>
            <input 
            className='city-form__input'
            id="query"
            name="query"
            type="query"
            placeholder="Название города"
            required
            onChange={handleChange}
            value={queryText || ""}
            ></input>
            <button className='city-form__submit' type='submit' onClick={changeCity}>Изменить</button>
          </form>
        ) : ('')}
        {props.isSearchError ? (
          <p className='city-form__error'>Город не найден. Показан результат предыдущего поиска</p>
        ) : ('')}
      </div>
    </>
  );
}

export default CityForm;