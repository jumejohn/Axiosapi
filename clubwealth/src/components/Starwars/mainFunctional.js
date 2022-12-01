import axios from "axios";
import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import starwars from "../../APIs/starwars";
import ShowFilms from "./ShowFilms";
import ShowPerson from "./ShowPerson";
import ShowSpecies from "./ShowSpecies";
import "./starwars.css";
import "../../styles.css";

function MainFunctional() {
  //useState is the primary method given, so I am going to use this in this application for state management

  //State variable given to indicate site is working
  const [loading, setLoading] = useState(false);

  //Pagination State variables:
  const [data, setData] = useState([]);
  const [next, setNext] = useState("");
  const [prev, setPrev] = useState("");

  //State for use in Components
  const [person, setPerson] = useState({});
  const [planets, setPlanets] = useState([]);
  const [species, setSpecies] = useState([]);
  const [personSpecies, setPersonSpecies] = useState(false);
  const [personFilms, setPersonFilms] = useState([]);

  //State variables to pass functions as props to render 3rd window
  const [showSpecies, setShowSpecies] = useState(false);
  const [showFilms, setShowFilms] = useState(false);

  //on first page load, load state for page one list of characters and pagination info
  useEffect(() => {
    setLoading(true);
    starwars.getPeople().then((response) => {
      console.log("response", response);
      setData(response.results);
      setNext(response.next);
      setLoading(false);
    });
  }, []);
  //use character list to load state planets, species, and films per character
  useEffect(() => {
    Promise.all(data.map((item) => axios.get(item.homeworld)))
      .then((response) => {
        setPlanets(response.map((item) => item.data));
      })
      .then(console.log("planets", planets));
    Promise.all(
      data.map((item) =>
        axios.get(item.species[0] || "https://swapi.dev/api/species/1/")
      )
    )
      .then((response) => {
        setSpecies(response.map((item) => item.data));
      })
      .then(console.log("species", species));
  }, [data]);

  useEffect(() => {
    const theseFilms = person.films;
    if (theseFilms) {
      Promise.all(theseFilms.map((film) => axios.get(film)))
        .then((response) => {
          console.log(response);
          setPersonFilms(response.map((item) => item.data));
        })
        .then(console.log("personFilms", personFilms));
    }
  }, [person.films]);
  const handleChange = async (e) => {
    const id = e.target.id;
    setPerson(data[id]);
    setPersonSpecies(species[id]);
  };

  const gettingMore = (url) => {
    starwars.getNextPeople(url).then((response) => {
      console.log("response", response);
      setPrev(response.previous);
      setData(response.results);
      setNext(response.next);
      setLoading(false);
    });
  };

  const handleClickNext = async () => {
    setLoading(true);
    gettingMore(next);
  };

  const handleClickPrev = async () => {
    setLoading(true);
    gettingMore(prev);
  };
  const handleGettingMore = (e) => {
    const page = e.target.value;
    const url = `https://swapi.dev/api/people/?page=${page}`;
    setLoading(true);
    gettingMore(url);
  };

  const handleDeleteData = (e) => {
    console.log("delete", e.target.value);
    if ((person.name = e.target.value)) {
      setPerson({});
      setPersonSpecies({});
    }
    const newData = data.filter((item) => item.name !== e.target.value);
    setData(newData);
  };

  const displaySpecies = () => {
    setShowFilms(false);
    setShowSpecies(!showSpecies);
  };

  const displayFilms = () => {
    setShowSpecies(false);
    setShowFilms(!showFilms);
  };

  return (
    <div className="App">
      <div>
        <div className="pagination_group">
          <button onClick={handleClickPrev}>PREV</button>
          <button value="1" onClick={handleGettingMore}>
            1
          </button>
          <button value="2" onClick={handleGettingMore}>
            2
          </button>
          <button value="3" onClick={handleGettingMore}>
            3
          </button>
          <button value="4" onClick={handleGettingMore}>
            4
          </button>
          <button value="5" onClick={handleGettingMore}>
            5
          </button>
          <button value="6" onClick={handleGettingMore}>
            6
          </button>
          <button value="7" onClick={handleGettingMore}>
            7
          </button>
          <button value="8" onClick={handleGettingMore}>
            8
          </button>
          <button value="9" onClick={handleGettingMore}>
            9
          </button>
          <button onClick={handleClickNext}>NEXT</button>
        </div>
        {loading ? <h5>...loading</h5> : null}
      </div>
      <div className="container">
        <div className="list_panel">
          <h3 className="list_title">Current Working Data List</h3>
          {data.map((item, index) => {
            return (
              <div className="card" key={index + "1"}>
                <button
                  className="card_title"
                  id={index}
                  onClick={handleChange}
                >
                  {item.name}
                </button>
                <button
                  value={item.name}
                  className="delete_button"
                  onClick={handleDeleteData}
                >
                  Delete X
                </button>
              </div>
            );
          })}
        </div>
        <div className="side_panel">
          <ShowPerson
            person={person}
            planets={planets}
            species={species}
            setPerson={setPerson}
            displaySpecies={displaySpecies}
            displayFilms={displayFilms}
          />
        </div>
        {showSpecies ? (
          <div className="side_panel2">
            <ShowSpecies
              personSpecies={personSpecies}
              displaySpecies={displaySpecies}
              displayFilms={displayFilms}
            />
          </div>
        ) : null}
        {showFilms ? (
          <div className="side_panel2">
            <ShowFilms
              species={species}
              personFilms={personFilms}
              displaySpecies={displaySpecies}
              displayFilms={displayFilms}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default MainFunctional;
