import React, { useEffect } from "react";
import "./starwars.css";
import "../../styles.css";

const ShowPerson = ({
  person,
  planets,
  setPerson,
  displaySpecies,
  displayFilms,
}) => {
  useEffect(() => {
    console.log(person);
    console.log("PLANETS", planets);
  }, [planets, person]);

  const myPlanets = [];
  planets.map((planet) => {
    if (planet.url === person.homeworld) {
      myPlanets.push(planet.name);
    }
  });

  const handleClick = () => {
    setPerson({});
  };

  return (
    <>
      {person.name ? (
        <div className="window">
          <div className="info_card">
            <div className="card_header">
              <div>
                <h2>{person.name}</h2>
              </div>
              <div>
                <button onClick={handleClick} className="close_button">
                  X
                </button>
              </div>
            </div>
            <>
              {planets ? <p>Homeworld: {myPlanets[0]}</p> : <p>...Loading</p>}
            </>
            <div>
              <div className="content_card">
                <h4>Physical Characteristics</h4>
                <p>Gender: {person.gender}</p>
                <p>Height: {person.height}</p>
                <p>Mass: {person.mass}</p>
                <p>Hair Color: {person.hair_color}</p>
                <p>Skin Tone: {person.skin_color}</p>
                <p>Eye Color: {person.eye_color}</p>
              </div>
            </div>
            <div>
              <button
                onClick={displaySpecies}
                className="dont_look_like_a_button"
              >
                Species
              </button>
              <button
                onClick={displayFilms}
                className="dont_look_like_a_button"
              >
                Films
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ShowPerson;
