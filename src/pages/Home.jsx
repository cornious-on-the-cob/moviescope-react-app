import React from "react";
import { Link } from "react-router-dom";

import Alien from "../assets/alien-romulus.jpeg";
import Banner from "../assets/home-img.png";
import Logo from "../assets/logo.png";
import Gilded from "../assets/the-guilded-age.jpeg";
import Timmy from "../assets/timothy.jpeg";

export default function Home() {
  return (
    <div>
      <nav className="nav__bar">
        <figure className="logo__wrapper">
          <img src={Logo} className="logo__img" alt="Logo" />
        </figure>
        <div className="nav__links">
          <a href="#Landing" className="nav__link">
            Home Page
          </a>
          <Link to="/search" className="nav__link">
            Explore Movies
          </Link>
        </div>
        <button className="btn__black no-drop">Join</button>
      </nav>
      
      <section id="landing">
        <div className="container">
          <div className="row">
            <figure className="banner__img--wrapper">
              <img src={Banner} className="home__img" alt="Banner" />
            </figure>
            <div className="home">
              <h2 className="home__title">
                Discover Movies, TV Shows, and Celebrities
              </h2>
              <div className="home__description">
                <div className="home__para">
                  Welcome to your ultimate entertainment hub! Explore a vast
                  collection of Movies, TV Shows, and Celebrity profiles all in
                  one place.
                </div>
                <div className="home__btns">
                  <Link to="/search">
                    <button className="btn__black pointer margin">
                      Explore
                    </button>
                  </Link>
                  <button className="btn__white no-drop">Learn More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section id="discover">
        <div className="container">
          <div className="row">
            <div className="discover">
              <h4 className="discover__title">Discover</h4>
              <h1 className="discover__subtitle">
                Explore the Best Entertainment Today
              </h1>
              <p className="discover__sub-subtitle">
                Dive into a world of cinematic wonders and captivating shows.
                <br />
                Our platform brings you the latest and greatest in film and
                television.
              </p>
              <div className="discover__components">
                <div className="component">
                  <img
                    src={Alien}
                    alt="Alien Romulus"
                    className="component__img"
                  />
                  <h2 className="component__title">
                    Top Movies You <br />
                    Can't Miss
                  </h2>
                  <p className="component__para">
                    Stay updated with the hottest <br />
                    films right now.
                  </p>
                </div>
                <div className="component">
                  <img
                    src={Gilded}
                    alt="The Gilded Age"
                    className="component__img"
                  />
                  <h2 className="component__title">
                    Popular TV Shows <br />
                    Everyone is Watching
                  </h2>
                  <p className="component__para">
                    Catch up on the series that have <br />
                    everyone talking.
                  </p>
                </div>
                <div className="component">
                  <img
                    src={Timmy}
                    alt="Timothy"
                    className="component__img"
                  />
                  <h2 className="component__title">
                    Famous Celebrities You <br />
                    Should Know
                  </h2>
                  <p className="component__para">
                    Learn more about the stars behind <br />
                    your favorite movies.
                  </p>
                </div>
              </div>
            </div>
            <div className="discover__btns">
              <Link to="/search">
                <button className="pointer btn__black margin">
                  Explore
                </button>
              </Link>
              <button className="no-drop btn__white">Join &gt;</button>
            </div>
          </div>
        </div>
      </section>

      <section className="quotes">
        <div className="container">
          <div className="row">
            <div className="quotes">
              <i className="fa-solid fa-arrow-left"></i>
              <div className="quotes__container">
                <h3 className="quote">
                  "This platform has transformed how I discover movies! The user
                  <br />
                  interface is intuitive and the recommendations are spot on!"
                </h3>
                <img src="" alt="" className="quote__img" />
                <h5 className="quote__name">John Doe</h5>
                <p>Film Critic, Movie Mag</p>
              </div>
              <i className="fa-solid fa-arrow-right"></i>
            </div>
          </div>
        </div>
      </section>

      <section className="join__us">
        <div className="container">
          <div className="row">
            <div className="join__us">
              <div className="join__us--paras">
                <h2 className="join__us--title">Join Us For Exclusive Content</h2>
                <p className="join__us--para">
                  Sign up now to unlock personalized features and recommendations
                </p>
              </div>
              <div className="join__us--btns">
                <button className="btn__black no-drop margin">Sign Up</button>
                <button className="btn__white no-drop">Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="row">
            <div className="footer">
              <img src={Logo} alt="Logo" className="footer__logo" />
              <div className="footer__body">
                <div className="footer__links">
                  <a href="#" className="footer__link">About Us</a>
                  <a href="#" className="footer__link">Contact Us</a>
                  <a href="#" className="footer__link">Help Center</a>
                  <a href="#" className="footer__link">Blog Posts</a>
                  <a href="#" className="footer__link">FAQ Section</a>
                </div>
                <div className="email">
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    required
                  />
                  <button className="btn__black no-drop">Join</button>
                </div>
              </div>
              <hr />
              <div className="footer__end">
                <div className="footer__end--links">
                  <a href="" className="footer__end--link">Privacy Policy</a>
                  <a href="" className="footer__end--link">Terms of Use</a>
                  <a href="" className="footer__end--link">Cookie Settings</a>
                </div>
                <p className="copyright">Copyright © 2025</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
