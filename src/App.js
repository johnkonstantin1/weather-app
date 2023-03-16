import React, { useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=07527b2eec7fabe9f6abacccea305013`;

  const handleSearch = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation("");
    }
  };
  
  function getBackground() {
    const now = new Date();
    const hour = now.getHours();
    const isDaytime = hour >= 6 && hour < 18;
  
    let backgroundClass = "day"; // Default background class for daytime
  
    if (!isDaytime) {
      backgroundClass = "night"; // Use nighttime background class
    }
  
    // Check temperature range to set background image
    if (this.state.temp >= 30) {
      backgroundClass += " hot";
    } else if (this.state.temp < 10) {
      backgroundClass += " cold";
    } else {
      backgroundClass += " normal";
    }
  
    return backgroundClass;
  }

  return (
    <div className="app">
      <div className="search">
        <input
          type="text"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          placeholder="Enter a location"
          onKeyDown={handleSearch}
        />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp} F</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>

        <div className="bottom">
          <div className="feels">
            {data.main ? <p className="bold">{data.main.feels_like}</p> : null}
            <p>Feels like</p>
          </div>
          <div className="humidity">
            {data.main ? <p className="bold">{data.main.humidity}%</p> : null}
            <p>Humidity</p>
          </div>
          <div className="wind">
            {data.wind ? <p className="bold">{data.wind.speed} MPH</p> : null}
            <p>Wind speed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
