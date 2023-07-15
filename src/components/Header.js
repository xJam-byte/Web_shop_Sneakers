import React from "react";
import { Link } from "react-router-dom";
import AppContext from "../context";

const Header = () => {
  const { onClose } = React.useContext(AppContext);

  return (
    <header className="header p-30 d-flex justify-between align-center">
      <Link to="/">
        <div className="header_left d-flex">
          <div className="header-info d-flex">
            <img
              className="mr-15"
              width={40}
              height={40}
              src="/img/logo.png"
              alt="Logo"
            />
            <div>
              <h3 className="text-uppercase">React Sneakers</h3>
              <p className="opacity-5">Магазин лучших кроссовок</p>
            </div>
          </div>
        </div>
      </Link>
      <ul className="header_right d-flex">
        <li className="mr-30">
          <img
            style={{ cursor: "pointer" }}
            className="mr-15 mini_icon"
            onClick={onClose}
            width={18}
            height={18}
            src="/img/cart.svg"
            alt="Cart"
          />
          <span className="mb-15">1205 руб.</span>
        </li>
        <li>
          <Link to="/favorites">
            <img
              style={{ cursor: "pointer" }}
              className="mr-15 mini_icon"
              width={18}
              height={18}
              src="/img/favsvg.svg"
              alt="Favourites"
            />
          </Link>
        </li>
        <li>
          <img
            style={{ cursor: "pointer" }}
            className="mini_icon"
            width={18}
            height={18}
            src="/img/profile.svg"
            alt="Profile"
          />
        </li>
      </ul>
    </header>
  );
};
export default Header;
