import React, { Component } from "react";
import Home from "./components/Home";
import Nav from "./components/Nav";
import MainFunctional from "./components/Starwars/mainFunctional";
import MainCats from "./components/Cats/MainCats";
import { Routes, Route } from "react-router-dom";
import "./styles.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/starwars" element={<MainFunctional />} />
          <Route path="/cats" element={<MainCats />} />
        </Routes>
      </div>
    );
  }
}

export default App;
