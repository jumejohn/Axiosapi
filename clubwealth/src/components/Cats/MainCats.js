import React, { useEffect, useState } from "react";
import cats from "../../APIs/cats";
import "./cats.css";

const MainCats = () => {
  const [currentCats, setCurrentCats] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [showBoard, setShowBoard] = useState(true);

  useEffect(() => {
    cats.get100Cats().then((response) => {
      console.log(response);
      setCurrentCats(response);
    });
  }, []);
  const handleDelete = (e) => {
    setCurrentCats(currentCats.filter((cat) => cat.id === e.target.value));
  };
  const handleAddFav = (e) => {
    setFavorites((state) => [
      ...state,
      currentCats.find((cat) => cat.id === e.target.value),
    ]);
    console.log(favorites);
  };

  const handleRemoveFromFav = (e) => {
    setFavorites(favorites.filter((cat) => cat.id !== e.target.value));
  };
  const handleShowBoard = () => {
    setShowBoard(!showBoard);
  };
  return (
    <div>
      {showBoard ? (
        <>
          <div className="cat_title_bar">
            <h2>Main Cats Board</h2>
            <button className="switch_board" onClick={handleShowBoard}>
              Show Favorites
            </button>
          </div>
          <div className="cat_wrapper">
            {currentCats ? (
              <div className="card_group">
                {currentCats.map((cat) => {
                  return (
                    <div className="cat_card" key={cat.id}>
                      <div className="cat_title">
                        <button
                          className="delete_button"
                          value={cat.id}
                          onClick={handleDelete}
                        >
                          X
                        </button>
                        <button
                          className="add_button"
                          value={cat.id}
                          onClick={handleAddFav}
                        >
                          ♥
                        </button>
                      </div>
                      <div className="cat_content">
                        <img
                          className="cat_img"
                          src={cat.url}
                          height={cat.height}
                          width={cat.width}
                          alt={cat.id}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : null}
          </div>
        </>
      ) : (
        <>
          <div className="cat_title_bar">
            <h2>Your Favorites</h2>
            <button className="switch_board" onClick={handleShowBoard}>
              Show Main Board
            </button>
          </div>
          <div className="cat_wrapper">
            <div className="card_group">
              {favorites.map((cat) => {
                return (
                  <div className="cat_card" key={cat.id}>
                    <div className="cat_title">
                      <button
                        className="delete_button"
                        value={cat.id}
                        onClick={handleRemoveFromFav}
                      >
                        X
                      </button>
                    </div>
                    <div className="cat_content">
                      <img
                        className="cat_img"
                        src={cat.url}
                        height={cat.height}
                        width={cat.width}
                        alt={cat.id}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MainCats;
