import React from "react";
import "./starwars.css";
import "../../styles.css";

const ShowSpecies = ({ personSpecies, displaySpecies, displayFilms }) => {
  const handleClick = () => {
    displaySpecies();
  };
  return (
    <div className="window">
      <div className="info_card">
        <div className="card_header">
          <div>
            <h2> {personSpecies.name}</h2>
          </div>
          <div>
            <button onClick={handleClick} className="close_button">
              X
            </button>
          </div>
        </div>

        <p>Language: {personSpecies.language}</p>
        <div className="content_card">
          <h4>Species Physical Characteristics</h4>
          <p>Classification: {personSpecies.classification}</p>
          <p>Avg. Height: {personSpecies.average_height}</p>
          <p>Hair Colors: {personSpecies.hair_colors}</p>
          <p>Skin Tones: {personSpecies.skin_colors}</p>
          <p>Eye Colors: {personSpecies.eye_colors}</p>
          <p>Avg. Lifespan: {personSpecies.average_lifespan}</p>
        </div>
        <div>
          <button onClick={displayFilms} className="dont_look_like_a_button">
            Films
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShowSpecies;
