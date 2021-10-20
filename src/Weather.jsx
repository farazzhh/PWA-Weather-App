import React from 'react'

const Weather = ({weather}) => {
    return (
      <div>
        <div className="container">
              <div className="information">
                <span className="information__name">
                  {weather.name}
                  <sup>{weather.sys.country}</sup>
                </span>
                <span className="information__temp">
                  {Math.ceil(weather.main.temp)}
                  <sup>&deg;C</sup>
                </span>
                <div className="information__icon">
                  <img
                    src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                    alt={weather.weather[0].description}
                  />
                </div>
                <span className="information__describe">
                  {weather.weather[0].description}
                </span>
              </div>
        </div>
      </div>
    );
}

export default Weather
