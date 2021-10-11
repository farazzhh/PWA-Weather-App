/* eslint-disable jsx-a11y/img-redundant-alt */
import "./App.css";
import { useState } from "react";
import DataFetch from "./components/dataFetch/DataFetch.jsx";

const App = () => {
  const [query, setQuery] = useState("");
  const [city, setCity] = useState();

  const search = async (e) => {
    if (e.key === "Enter") {
      const data = await DataFetch('SHIRAZ');
      setCity(data);
      console.log(data);
    }
  };
  return (
    <div className="App">
      <img src="./image/bg.jpg" alt="background image" />
      <div className="container">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={(e) => search(e)}
        />
        {city && (
          <div className="information">
            <h4>{city.name}</h4>
            <img
              src={`https://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`}
              alt=""
            />
            <h2>
              {city.main.temp}
              <sup>
                <small>&deg;C</small>
              </sup>
            </h2>
            <h4>{city.weather[0].main}</h4>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
