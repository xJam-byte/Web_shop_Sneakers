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
              <h3 className="visibleText1 text-uppercase">React Sneakers</h3>
              <p className="visibleText2 opacity-5">Магазин лучших кроссовок</p>
            </div>
          </div>
        </div>
      </Link>
      <ul className="header_right d-flex">
        <li onClick={onClose} className="fistrLi">
          <img
            style={{ cursor: "pointer" }}
            className="mr-15 mini_icon"
            width={18}
            height={18}
            src="/img/cart.svg"
            alt="Cart"
          />
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
        <Link to="orders">
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
        </Link>
      </ul>
    </header>
  );
};
export default Header;
