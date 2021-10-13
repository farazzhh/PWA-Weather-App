
const DataFetch = async (city) => {
  console.log("datafetch");
  const API_KEY = "6a710700f50ffccf3922b4d1c7eeb555";
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

  const result = await fetch(URL)
    .then((response) => response.json())
    .then((data) => data);

  console.log(result);
  return result;
};

export default DataFetch;

// function useAsyncHook(city ) {
//   const [weather, setWeather] = useState([]);
//   const [loading, setLoading] = useState("false");
//   const API_KEY = "6a710700f50ffccf3922b4d1c7eeb555";
//   const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

//   useEffect(() => {
//     async function fetchBookList() {
//       try {
//         setLoading("true");
//         const response = await fetch(URL);

//         const json = await response.json();
//         setWeather(json);
//       } catch (error) {
//         setLoading("null");
//       }
//     }
//     if (city !== "") {
//       fetchBookList();
//     }
//   }, [city]);
//   return [weather, loading];
// }

// export default useAsyncHook;
