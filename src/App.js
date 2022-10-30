import logo from "./logo.svg";
import "./App.css";
import React from "react";
import WeatherSearch from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello from React</h1>
        <WeatherSearch />
      </header>
    </div>
  );
}

export default App;
