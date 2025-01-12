import React from "react";
import "./App.css";
import "./index.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Lagos" />

        <footer>
          This project was coded by{" "}
          <a href="https://github.com/Fetty10"> Fetty</a> and it is{" "}
          <a href="https://github.com/Fetty10/fetty-react-weather-app">
            {" "}
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a href="https://react-weather-app-fetty.netlify.app/">
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
