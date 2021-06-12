import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [films, setFilms] = useState([])

  useEffect(() => {
      fetch("https://ghibliapi.herokuapp.com/films")
      .then(response => response.json())
      .then(response => setFilms(response))
  }, [])

  return (
  <div className="film-container">
    <h1>Studio Ghibli Films</h1>
    <ul>
      {films.map((film) => 
        <div key={film.id}>
          <header>{film.title}</header>
          <p>{film.description}</p>
        </div>
      )}
    </ul>
  </div>
  );
}

export default App;
