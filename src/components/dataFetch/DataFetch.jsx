const DataFetch = async (city) => {
  const API_KEY = "6a710700f50ffccf3922b4d1c7eeb555";
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
  let result = undefined;
  if (city) {
    result = await fetch(URL)
      .then((response) => response.json())
      .then((data) => data)
    return result;
  } else {
    result = { cod: "400" };
  }

  return result;
};

export default DataFetch;
