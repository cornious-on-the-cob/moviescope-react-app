import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

export default function Search() {
  const APIKEY = "fa480c9";
  let currentMovies = [];

  async function fetchdata() {
    const loadingEl = document.getElementById("loading");
    const resultsEl = document.getElementById("results");
    loadingEl.style.display = "block";
    resultsEl.innerHTML = "";

    try {
      const query = document.getElementById("movieName").value.trim();
      if (!query) {
        alert("Please enter a movie or show name");
        return;
      }

      const searchRes = await fetch(
        `https://www.omdbapi.com/?s=${encodeURIComponent(
          query
        )}&apikey=${APIKEY}`
      );

      const searchData = await searchRes.json();
      if (searchData.Response === "False") {
        alert(searchData.Error);
        return;
      }

      const shortlist = searchData.Search.slice(0, 10).map((m) => m.imdbID);

      currentMovies = await Promise.all(
        shortlist.map((id) =>
          fetch(`https://www.omdbapi.com/?i=${id}&apikey=${APIKEY}`).then((r) =>
            r.json()
          )
        )
      );

      renderMovies();
    } catch (error) {
      console.error("Error fetching data:", error);
      alert("An error occurred while searching. Please try again.");
    } finally {
      loadingEl.style.display = "none";
    }
  }

  function renderMovies() {
    const resultsEl = document.getElementById("results");
    const order = document.getElementById("sortYear").value;
    let moviesToShow = [...currentMovies];

    if (order === "asc") {
      moviesToShow.sort((a, b) => parseInt(a.Year) - parseInt(b.Year));
    } else if (order === "desc") {
      moviesToShow.sort((a, b) => parseInt(b.Year) - parseInt(a.Year));
    }

    resultsEl.innerHTML = moviesToShow
      .map(
        (d) => `
    <div class="movie__card">
      <img
        src="${d.Poster !== "N/A" ? d.Poster : "placeholder.jpg"}"
        alt="${d.Title}"
        class="movie-card__poster"
      />
      <div class="movie__description".
      <h4 class="movie-card__title">${d.Title} (${d.Year})</h4>
      <p class="movie-card__info"><strong>Actors:</strong> ${d.Actors}</p>
      <p class="movie-card__info"><strong>IMDb Rating:</strong> ${
        d.imdbRating
      }</p>
      </div>
    </div>
  `
      )
      .join("");
  }

  return (
    <div>
      <nav className="nav__bar">
        <figure className="logo__wrapper">
          <img src={Logo} className="logo__img" alt="Logo" />
        </figure>
        <div className="nav__links">
          <Link to="/" className="nav__link">
            Home Page
          </Link>
          <Link to="/search" className="nav__link">
            Explore Movies
          </Link>
        </div>
        <button className="btn__black no-drop">Join</button>
      </nav>

      <div className="search__box">
        <input 
          type="text" 
          id="movieName" 
          placeholder="Enter Movie/Show Name" 
          onKeyDown={(e) => {
            if (e.key === "Enter") fetchdata();
          }}
        />

        <select 
          id="sortYear" 
          className="sort__select"
          onChange={renderMovies}
        >
          <option value="">Sort by Year</option>
          <option value="asc">Year ↑</option>
          <option value="desc">Year ↓</option>
        </select>

        <button
          id="searchBtn"
          className="btn__black margin"
          onClick={fetchdata}
        >
          Search
        </button>
      </div>

      <div className="container">
        <div className="row">
          <div id="loading" style={{ display: "none" }}>
            <i className="fa-solid fa-spinner fa-spin"></i>
          </div>
          <div id="results" className="search__results"></div>
        </div>
      </div>
    </div>
  );
}
