import React from 'react';

const WeatherDetails = () => {
  return (
    <>
      <article className='widget'>
        <div className='weatherIcon'>
          <i className={`wi wi-sunset`}></i>
        </div>
        <div className='weatherInfo'>
          <div className='temperature'>
            <span>29&deg;</span>
          </div>
          <div className='description'>
            <div className='weatherCondition'>Sunny</div>
            <div className='place'>Oakland, USA</div>
          </div>
        </div>
        <div className='date'>{new Date().toLocaleString()}</div>
        <div className='extra-temp'>
          <div className='temp-info-minmax'>
            <div className='two-sided-section'>
              <p>
                <i className={'wi wi-sunset'}></i>
              </p>
              <p className='extra-info-leftside'>
                6:57 PM <br />
                Sunset
              </p>
            </div>

            <div className='two-sided-section'>
              <p>
                <i className={'wi wi-humidity'}></i>
              </p>
              <p className='extra-info-leftside'>
                333 <br />
                Humidity
              </p>
            </div>
          </div>

          <div className='weather-extra-info'>
            <div className='two-sided-section'>
              <p>
                <i className={'wi wi-rain'}></i>
              </p>
              <p className='extra-info-leftside'>
                333 <br />
                Pressure
              </p>
            </div>

            <div className='two-sided-section'>
              <p>
                <i className={'wi wi-strong-wind'}></i>
              </p>
              <p className='extra-info-leftside'>
                422 <br />
                Speed
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default WeatherDetails;
