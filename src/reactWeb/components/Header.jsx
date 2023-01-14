import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import MenuShadow from "./MenuShadow";
import { FiShoppingCart } from "react-icons/fi";
import { useCartContext } from "./context/cartContext";


const Header = () => {
  const [text, setText] = useState("");
  const [isShadow, setShadow] = useState(false);
  const {totalItem} = useCartContext()


  const closeMenu = () => {
    document.querySelector(".menuList").style.left = "-280px";
    setShadow(false);
  };

  return (
    <div className="headerContainer ">
      {isShadow ? <MenuShadow closeMenu={closeMenu}/> : null}
      <div className="navbar">
        <div className="logo">
          <div className="menutext">
            <ion-icon
              name="menu-outline"
              onClick={() => {
                document.querySelector(".menuList").style.left = "0";
                setShadow(true);
              }}
            ></ion-icon>
          </div>
          <NavLink to="/">
            <h1>
              vite<span>.</span>
            </h1>
          </NavLink>
        </div>
        <div className="navMenu">
          <ul className="menuList" onClick={closeMenu}>
            <ion-icon name="close-outline"></ion-icon>
            <li>
              <NavLink activeclassname="active" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/products">Products</NavLink>
            </li>
            <li>
              <NavLink to="/service">Service</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
        <div className="search">
          <ion-icon name="search-outline"></ion-icon>
          <input
            type="search"
            placeholder="Search"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
          <div className="cartNotify"><FiShoppingCart/><span>{totalItem}</span></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
