import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

import Viewer from "./components/Viewer";
import DatePicker from "./components/DatePicker";

function App() {
  const [apod, setApod] = useState({});
  const [error, setError] = useState(null);
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));

  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod", {
        params: {
          api_key: "DEMO_KEY",
          date: date, //"2020-04-19" //video tarihi
        },
      })
      .then((response) => {
        setApod(response.data);
        setError(null);
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  }, [date]);

  return (
    <div className="App">
      <DatePicker setDate={setDate} />

      <span role="img" aria-label="go!">
        {!Object.keys(apod).length && <p>Yükleniyor...</p>}
        {error && <p>Network Error :{error}</p>}
      </span>
      {Object.keys(apod).length && !error && <Viewer dataProp={apod} />}
    </div>
  );
}

export default App;
