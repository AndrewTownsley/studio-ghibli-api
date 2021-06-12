import React, { useState, useEffect } from 'react';
import './App.css';
// Components
import FilmCard from "./Components/FilmCard";

const App = () => {

  return (
    <main className="main">
      <h1>Studio Ghibli Films</h1>
      <FilmCard />
    </main>
  )
}

export default App;
