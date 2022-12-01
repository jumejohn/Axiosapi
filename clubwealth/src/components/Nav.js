import React from "react";
import { Link, Outlet } from "react-router-dom";
import "../styles.css";

const Nav = () => {
  return (
    <>
      <nav className="navbar">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/starwars">Starwars</Link>
        </li>
        <li>
          <Link to="/cats">Cats</Link>
        </li>
      </nav>
    </>
  );
};

export default Nav;
