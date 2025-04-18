import React from 'react';
import './App.css';
import Weather from './Weather';


export default function App() {
  return (
    <div className="App">
      <div className="container">
    
     <Weather />
      <footer>
        This project was coded by sha123-m and is {""}
    <a href="https://github.com/sha123-m/react-weather-app" target="_blank" rel="noreferrer">
     open sourced on github
    </a>
    </footer>
    </div>
    </div>
  );
}


