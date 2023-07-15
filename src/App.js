import "./App.scss";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Cart from "./components/Cart";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import AppContext from "./context";

const App = () => {
  const [items, setItems] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const onClose = () => {
    setCartOpened(!cartOpened);
  };
  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const cartResponse = await axios.get(
        "https://64662687228bd07b355d299f.mockapi.io/cart"
      );
      const favResponse = await axios.get(
        "https://648aadcd17f1536d65e97176.mockapi.io/favorites"
      );
      const itemsResponse = await axios.get(
        "https://64662687228bd07b355d299f.mockapi.io/items"
      );

      setIsLoading(false);

      setCartItems(cartResponse.data);
      setFavorites(favResponse.data);
      setItems(itemsResponse.data);
    }

    fetchData();
  }, []);

  const onAddTCart = async (obj) => {
    if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
      setCartItems((prev) =>
        prev.filter((i) => Number(i.id) !== Number(obj.id))
      );
      axios.delete(
        `https://64662687228bd07b355d299f.mockapi.io/cart/${obj.id}`
      );
    } else {
      axios.post("https://64662687228bd07b355d299f.mockapi.io/cart", obj);
      setCartItems((prev) => [...prev, obj]);
    }
  };

  const onAddToFavorite = async (obj) => {
    try {
      if (favorites.find((favor) => Number(favor.id) === Number(obj.id))) {
        axios.delete(
          `https://648aadcd17f1536d65e97176.mockapi.io/favorites/${obj.id}`
        );
        setFavorites((prev) =>
          prev.filter((item) => Number(item.id) !== Number(obj.id))
        );
      } else {
        const { data } = await axios.post(
          "https://648aadcd17f1536d65e97176.mockapi.io/favorites",
          obj
        );
        setFavorites((prev) => [...prev, data]);
      }
    } catch (error) {
      alert(error.message);
    }
  };
  const onRemoveItem = (id) => {
    axios.delete(`https://64662687228bd07b355d299f.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => +item.id !== +id));
  };
  const onChangeSearchInput = (e) => {
    setSearchValue(e.target.value);
  };

  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.id) === Number(id));
  };

  return (
    <AppContext.Provider
      value={{
        cartItems,
        favorites,
        items,
        isItemAdded,
        onAddToFavorite,
        onAddTCart,
        setCartItems,
        onClose,
      }}
    >
      <div className="wrapper clear">
        {cartOpened ? <Cart items={cartItems} onRemove={onRemoveItem} /> : null}

        <Header />
        <Routes>
          <Route
            path="/"
            exact
            element={
              <Home
                items={items}
                isLoading={isLoading}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                onChangeSearchInput={onChangeSearchInput}
              />
            }
          />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </div>
    </AppContext.Provider>
  );
};

export default App;
