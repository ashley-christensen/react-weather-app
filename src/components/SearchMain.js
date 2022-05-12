import React, { useEffect, useState } from 'react';
import WeatherDetails from './WeatherDetails';

const SearchMain = () => {
  const [searchTerm, setSearchTerm] = useState('Brentwood');
  const [tempInfo, setTempInfo] = useState({});

  const getWeatherInfo = async () => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&units=imperial&appid=08204476b31df54b176fb679d7a8ee23`;
      const response = await fetch(url);
      const data = await response.json();
      const { temp, humidity, pressure } = data.main;
      const { main: weatherType } = data.weather[0];
      const { name } = data;
      const { speed } = data.wind;
      const { country, sunset } = data.sys;

      const newWeatherInfo = {
        name,
        temp,
        humidity,
        pressure,
        weatherType,
        speed,
        country,
        sunset,
      };
      setTempInfo(newWeatherInfo);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWeatherInfo();
  }, []);
  return (
    <>
      <div className='wrap'>
        <div className='search'>
          <input
            type='search'
            placeholder=' search city..'
            id='search'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className='searchButton' onClick={getWeatherInfo}>
            Search
          </button>
        </div>
      </div>
      <WeatherDetails {...tempInfo} />
    </>
  );
};

export default SearchMain;
