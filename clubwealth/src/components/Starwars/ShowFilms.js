import React, { useState } from "react";
import "./starwars.css";
import "../../styles.css";

const ShowFilms = ({ personFilms, displaySpecies, displayFilms }) => {
  const [openDetails, setOpenDetails] = useState(false);
  const [currentMovie, setCurrentMovie] = useState({});

  const handleClick = () => {
    displayFilms();
  };
  const handleOpenDetails = (e) => {
    setCurrentMovie(personFilms[e.target.id]);
    setOpenDetails(!openDetails);
  };
  return (
    <div className="window">
      <div className="info_card">
        <div className="card_header">
          <div>
            <h2>Films Appeared In</h2>
          </div>
          <div>
            <button onClick={handleClick} className="close_button">
              X
            </button>
          </div>
        </div>
        {!openDetails ? (
          <div>
            {personFilms.map((film, index) => (
              <div className="card" key={index}>
                <button
                  className="card_title"
                  id={index}
                  onClick={handleOpenDetails}
                >
                  {film.title}
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div>
            <div className="card_header">
              <div className="content_card">
                <h3>{currentMovie.title}</h3>
                <p>Episode: {currentMovie.episode_id}</p>
                <p>Release Date: {currentMovie.release_date}</p>
                <p>Directed By: {currentMovie.director}</p>
                <p>Produced By: {currentMovie.producer}</p>
                <p className="opening_title">Opening Crawl: </p>
                <p className="opening_crawl">{currentMovie.opening_crawl}</p>
                <div>
                  <button onClick={handleOpenDetails} className="back_button">
                    &#x21B6;
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="card_header">
          <div>
            <button
              onClick={displaySpecies}
              className="dont_look_like_a_button"
            >
              Species
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowFilms;
