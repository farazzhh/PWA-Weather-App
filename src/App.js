import "./App.css";
import { useState, useEffect } from "react";
import DataFetch from "./components/dataFetch/DataFetch.jsx";
import Weather from "./Weather";

const App = () => {
  const [query, setQuery] = useState("");
  const [city, setCity] = useState();
  const [weather, setweather] = useState();

  useEffect(() => {
    const fetching = async () => {
      const res = await DataFetch(city);

      // when res.cod = 200 so Fetch Responsed with no error
      if (res.cod === "200") {
        return setweather(res);
      }
    };
    fetching();
  }, [city]);

  // Looking for pressing Enter key
  const search = (e) => {
    if (e.key === "Enter") {
      setCity(query);
    }
  };

  return (
    <div className="App">
      <div className="App_container">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={(e) => search(e)}
          placeholder="City..."
        />
        {weather && <Weather weather={weather} />}
      </div>
    </div>
  );
};


export default App;
