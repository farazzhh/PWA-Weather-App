import "./App.css";
import { useState, useEffect } from "react";
import DataFetch from "./components/dataFetch/DataFetch.jsx";
import Weather from "./Weather";

const App = () => {
  const [query, setQuery] = useState("");
  const [city, setCity] = useState();
  const [weather, setweather] = useState();
  const [notFound, setNotFound] = useState(false);
  useEffect(() => {
    const fetching = async () => {
      const res = await DataFetch(city);
      // when res.cod = 200 so Fetch Responsed with no error

      if (res.cod === "404") {
        setNotFound(true);
        setTimeout(() => {
          setNotFound(false);
        }, 1500);
      }
      if (res.cod === 200) {
        return setweather(res);
      }
    };
    fetching();
  }, [city]);

  // Looking for pressing Enter key
  const search = (e) => {
    if (e.key === "Enter" && query) {
      setCity(query);
    }
  };

  return (
    <div className="App">
      <div className="App_container">
        <div className="App__input">
          <div>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyPress={(e) => search(e)}
              placeholder="City..."
            />
            <button
              onClick={() => {
                query && setCity(query);
              }}
            >
              Enter
            </button>
          </div>
          {notFound && <p>Not Found !</p>}
        </div>
        {weather && <Weather weather={weather} />}
      </div>
    </div>
  );
};

export default App;
