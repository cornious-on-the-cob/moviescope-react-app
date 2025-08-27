import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

export default function Search() {
  return (
    <nav className="nav__bar">
      <figure className="logo__wrapper">
        <img src={Logo} className="logo__img" />
      </figure>
      <div className="nav__links">
        <Link to="/" className="nav__link">
          Home Page
        </Link>
        <Link to="/search" className="nav__link">
          Explore Movies
        </Link>
      </div>
      <button className="join__btn btn__black">Join</button>
    </nav>
    
  );
}
