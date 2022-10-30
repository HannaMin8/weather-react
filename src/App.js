import "./App.css";
import React from "react";
import WeatherSearch from "./Weather";
import Github from "./GitHubLink";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello from React</h1>
        <WeatherSearch />
        <Github />
      </header>
    </div>
  );
}

export default App;
