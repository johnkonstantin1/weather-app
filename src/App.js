import React, { useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  // const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=07527b2eec7fabe9f6abacccea305013`;

  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&appid=07527b2eec7fabe9f6abacccea305013`;
  const handleSearch = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation("");
    }
  };

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
            {data.city ? <p>{data.city.name}</p> : null}
          </div>
          <div className="temp">
            {data.list ? <h1>{data.list[0].main.temp.toFixed()}°C</h1> : null}
          </div>
          <div className="description">
            {data.list ? <p>{data.list[0].weather[0].main}</p> : null}
          </div>
        </div>

        <div className="bottom">
          <div className="feels">
            {data.list ? (
              <p className="bold">{data.list[0].main.feels_like.toFixed()}°C</p>
            ) : null}
            <p>Feels like</p>
          </div>
          <div className="humidity">
            {data.list ? (
              <p className="bold">{data.list[0].main.humidity}%</p>
            ) : null}
            <p>Humidity</p>
          </div>
          <div className="wind">
            {data.list ? (
              <p className="bold">{data.list[0].wind.speed} MPH</p>
            ) : null}
            <p>Wind speed</p>
          </div>
        </div>
        {/* <div className="prediction">
          {data.list &&
            data.list.slice(5, 6).map((item, index) => (
              <div className="forecast" key={index}>
                <p>
                  {new Date(item.dt * 1000).toLocaleDateString("en-US", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
                <p>{item.weather[0].main}</p>
                <p>{item.main.temp.toFixed()} F</p>
              </div>
            ))}
        </div>
        <div className="prediction">
          {data.list &&
            data.list.slice(13, 14).map((item, index) => (
              <div className="forecast" key={index}>
                <p>
                  {new Date(item.dt * 1000).toLocaleDateString("en-US", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
                <p>{item.weather[0].main}</p>
                <p>{item.main.temp.toFixed()} F</p>
              </div>
            ))}
        </div>
        <div className="prediction">
          {data.list &&
            data.list.slice(22, 23).map((item, index) => (
              <div className="forecast" key={index}>
                <p>
                  {new Date(item.dt * 1000).toLocaleDateString("en-US", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
                <p>{item.weather[0].main}</p>
                <p>{item.main.temp.toFixed()} F</p>
              </div>
            ))}
        </div> */}
        <div className="row">
          <div className="column">
            <div className="card">
              {data.list &&
                data.list.slice(5, 6).map((item, index) => (
                  <div className="forecast" key={index}>
                    <p>
                      {new Date(item.dt * 1000).toLocaleDateString("en-US", {
                        weekday: "long",
                        // year: "numeric",
                        // month: "long",
                        // day: "numeric",
                      })}
                    </p>
                    <p>{item.weather[0].main}</p>
                    <p>{item.main.temp.toFixed()}°C</p>
                  </div>
                ))}
            </div>
            
          </div>
          <div className="column">
            <div className="card">
              {data.list &&
                data.list.slice(13, 14).map((item, index) => (
                  <div className="forecast" key={index}>
                    <p>
                      {new Date(item.dt * 1000).toLocaleDateString("en-US", {
                        weekday: "long",
                        // year: "numeric",
                        // month: "long",
                        // day: "numeric",
                      })}
                    </p>
                    <p>{item.weather[0].main}</p>
                    <p>{item.main.temp.toFixed()}°C</p>
                  </div>
                ))}
            </div>
            
          </div>
          <div className="column">
            <div className="card">
              {data.list &&
                data.list.slice(23, 24).map((item, index) => (
                  <div className="forecast" key={index}>
                    <p>
                      {new Date(item.dt * 1000).toLocaleDateString("en-US", {
                        weekday: "long",
                        // year: "numeric",
                        // month: "long",
                        // day: "numeric",
                      })}
                    </p>
                    <p>{item.weather[0].main}</p>
                    <p>{item.main.temp.toFixed()}°C</p>
                  </div>
                ))}
            </div>
            
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default App;
