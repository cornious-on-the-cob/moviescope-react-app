import React from "react";
import { Link } from "react-router-dom";

import Alien from "../assets/alien-romulus.jpeg";
import Banner from "../assets/home-img.png";
import Logo from "../assets/logo.png";
import Gilded from "../assets/the-guilded-age.jpeg";
import Timmy from "../assets/timothy.jpeg";

export default function Home() {
  return (
    <>
      <nav className="nav__bar">
        <figure className="logo__wrapper">
          <img src={Logo} className="logo__img" />
        </figure>
        <div className="nav__links">
          <a href="#Landing" className="nav__link">
            Home Page
          </a>
          <Link to="/search" className="nav__link">
            Explore Movies
          </Link>
        </div>
        <button className="join__btn btn__black">Join</button>
      </nav>
      <section id="landing">
        <div className="container">
            <div className="row">
                <figure className="banner__img--wrapper">
                    <img src={Banner} alt="" />
                </figure>
            </div>
        </div>
      </section>
    </>
  );
}
