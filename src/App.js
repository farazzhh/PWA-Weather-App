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
      console.log(data.weather);
    }
  };
  return (
    <div className="App">
      <div className="container">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={(e) => search(e)}
        />
        {city && (
          <div className="information">
            <img src={`https://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`} alt="" />
            <h2>{city.name}</h2>
            <span>{city.main.temp}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
