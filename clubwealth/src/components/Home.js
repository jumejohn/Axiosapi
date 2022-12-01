import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home_content">
      <div className="window">
        <div>
          <h3>What are you Looking for today?</h3>
        </div>
        <div className="window">
          <p>
            Check out our Starwars data <Link to="/starwars">here</Link>
          </p>
          <p>
            Check out our Cats data <Link to="/cats">here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
