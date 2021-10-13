/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/img-redundant-alt */
import "./App.css";
import { useState, useMemo, useEffect } from "react";
import DataFetch from "./components/dataFetch/DataFetch.jsx";
import useAsyncHook from "./components/dataFetch/DataFetch.jsx";
import Weather from "./Weather";

const App = () => {
  const [query, setQuery] = useState("");
  const [err, setErr] = useState(false);
  const [city, setCity] = useState();
  const [weather, setweather] = useState();

  useEffect(() => {
    const fetching = async () => {
      const res = await DataFetch(city);

      if (res.cod == "200") {
            setweather(res);
            return setErr(false);
        } else  {
          console.log("error", res.cod);
          return setErr(true);
        }
    };
    fetching();
    // console.log("weather:", weather);
    // console.log("error:", err);
  }, [city]);

  
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
      {weather &&
        <Weather weather={weather} />
        }
        </div>
    </div>
  );
};

const Func = (query) => {
  const data = DataFetch(query);
  console.log(data);
  return data;
};

export default App;
