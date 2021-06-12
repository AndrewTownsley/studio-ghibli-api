import React, { useState, useEffect } from 'react';

const FilmCard = () => {
  const [films, setFilms] = useState([])


  useEffect(() => {
    fetch("https://ghibliapi.herokuapp.com/films")
    .then(response => response.json())
    .then(response => setFilms(response))
}, [])

  return (
    <div className="film-container">
      {films.map((film) => 
        <div className="film-card" key={film.id}>
          <header className="film-card-header"><h3>{film.title}</h3></header>
          <p>{film.description.substring(0, 350)}...</p>
        </div>
      )}
  </div>
  );
}


export default FilmCard;