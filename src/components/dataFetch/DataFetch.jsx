import React, { useEffect, useState } from "react";

const DataFetch = async (query) => {
  const API_KEY = "6a710700f50ffccf3922b4d1c7eeb555";
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${API_KEY}`;
  const data = await fetch(URL).then(res=> res.json());
  return data;

};

export default DataFetch;
