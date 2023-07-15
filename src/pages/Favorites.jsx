import React from "react";
import Card from "../components/Card";
import AppContext from "../context";

const Favorites = () => {
  const { favorites, onAddToFavorite, onAddTCart } =
    React.useContext(AppContext);

  return (
    <div className="content">
      <div className="d-flex align-center mb-40 ml-30 justify-between mt-40 mr-30">
        <h1>Мои закладки</h1>
      </div>
      <div className="d-flex flex-wrap">
        {favorites.map((item, index) => (
          <Card
            key={index}
            id={item.id}
            title={item.title}
            price={item.price}
            image={item.image}
            favorited={true}
            onLike={(obj) => onAddToFavorite(obj)}
            onCross={(obj) => onAddTCart(obj)}
          />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
