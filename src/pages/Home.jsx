import React from "react";
import Card from "../components/Card";
import AppContext from "../context";

const Home = ({
  items,
  searchValue,
  setSearchValue,
  onChangeSearchInput,
  isLoading,
}) => {
  const { onAddToFavorite, onAddTCart } = React.useContext(AppContext);

  const renderItems = () => {
    const filteredItems = items.filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    return (isLoading ? [...Array(8)] : filteredItems).map((item, index) => (
      <Card
        key={index}
        loading={isLoading}
        onLike={(obj) => onAddToFavorite(obj)}
        onCross={(obj) => onAddTCart(obj)}
        {...item}
      />
    ));
  };

  return (
    <div className="content">
      <div className="d-flex align-center mb-40 ml-30 justify-between mt-40 mr-30">
        <h1>{searchValue ? `Поиск по: ${searchValue}` : "Все кроссовки"}</h1>
        <div className="search_block d-flex">
          <img src="/img/search.svg" alt="Search" />
          {searchValue ? (
            <img
              className="remove_btn clearbtn"
              src="/img/btn-remove.svg"
              alt="Clear"
              onClick={() => {
                setSearchValue("");
              }}
            />
          ) : null}
          <input
            value={searchValue}
            type="text"
            onChange={onChangeSearchInput}
            placeholder="Поиск..."
          />
        </div>
      </div>
      <div className="d-flex flex-wrap">{renderItems()}</div>
    </div>
  );
};

export default Home;
