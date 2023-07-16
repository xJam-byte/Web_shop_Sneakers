import React from "react";
import ContentLoader from "react-content-loader";
import AppContext from "../context";

const Card = ({
  onLike,
  onCross,
  id,
  title,
  price,
  image,
  loading = false,
}) => {
  const { isItemAdded, isItemAddedToFavs } = React.useContext(AppContext);

  const OnPlus = () => {
    onCross({ id, title, price, image });
  };
  const handleLikedClick = () => {
    onLike({ id, title, price, image });
  };

  return (
    <div className="card">
      {loading ? (
        <ContentLoader
          speed={2}
          width={150}
          height={250}
          viewBox="0 0 150 250"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="0" y="0" rx="10" ry="10" width="150" height="130" />
          <rect x="0" y="147" rx="5" ry="5" width="150" height="15" />
          <rect x="0" y="174" rx="5" ry="5" width="100" height="15" />
          <rect x="0" y="220" rx="5" ry="5" width="80" height="24" />
          <rect x="117" y="216" rx="10" ry="10" width="32" height="32" />
        </ContentLoader>
      ) : (
        <>
          <div className="card_favorite">
            {onLike && (
              <img
                src={
                  isItemAddedToFavs(id) ? "/img/with.svg" : "/img/without.svg"
                }
                alt="Unliked"
                onClick={handleLikedClick}
              />
            )}
          </div>
          <img
            className="mainImg"
            width="100%"
            height={130}
            src={image}
            alt=""
          />
          <h5>{title}</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>{price} тг.</b>
            </div>
            {onCross && (
              <img
                className="button"
                onClick={OnPlus}
                width={28}
                height={28}
                src={isItemAdded(id) ? "/img/checked.svg" : "/img/Cross.svg"}
                alt="Sneaker"
              />
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
