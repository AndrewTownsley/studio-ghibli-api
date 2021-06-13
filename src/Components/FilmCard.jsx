import React, { useState, useEffect } from 'react';

const FilmCard = () => {
  const [films, setFilms] = useState([]);
  const [readMore, setReadMore] = useState(true);

  const toggleReadMore = () => {
    setReadMore(!readMore)
  }

  useEffect(() => {
    fetch("https://ghibliapi.herokuapp.com/films")
    .then(response => response.json())
    .then(response => setFilms(response))
    
}, [])

  return (
    <div className="film-container">
      {films.map((film) => 
        <div className="film-card" key={film.id}>
          <header className="film-card-header">
            <h3>{film.title}</h3>
            </header>
            <div className="film-card-info">
              <p><span>Director:</span> {film.director}</p>
              <p><span>Released:</span> {film.release_date}</p>
              <p><span>Rating:</span> {film.rt_score}%</p>
              <p><span>Running time:</span> {film.running_time} minutes</p>
              <p className="film-card-desc">
                {
                readMore ? film.description.substring(0, 150) : 
                film.description
                }...
              </p>
              <button className="read-more" onClick={toggleReadMore}>
                {readMore ? "Read More..." : "Close"}
              </button>
            </div>

        </div>
      )}
  </div>
  );
}



export default FilmCard;

// film.description.substring(0, 350)