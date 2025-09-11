import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Logo from "../assets/logo.png";

export default function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const APIKEY = "fa480c9";

  useEffect(() => {
    async function fetchMovie() {
      try {
        setIsLoading(true);
        setErrorMessage("");
        const res = await fetch(
          `https://www.omdbapi.com/?i=${id}&plot=full&apikey=${APIKEY}`
        );
        const data = await res.json();
        if (data.Response === "False") {
          setErrorMessage(data.Error || "Movie not found");
          setMovie(null);
          return;
        }
        setMovie(data);
      } catch (err) {
        setErrorMessage("Failed to load movie details. Please try again.");
      } finally {
        setIsLoading(false);
      }
    }

    if (id) {
      fetchMovie();
    }
  }, [id]);

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

      <div className="container">
        <div className="row">
          {isLoading && (
            <div id="loading">
              <i className="fa-solid fa-spinner fa-spin"></i>
            </div>
          )}
          {errorMessage && !isLoading && (
            <p style={{ color: "red" }}>{errorMessage}</p>
          )}
          {movie && !isLoading && (
            <div className="movie__details">
              <div className="movie__header">
                <img
                  src={
                    movie.Poster !== "N/A" ? movie.Poster : "placeholder.jpg"
                  }
                  alt={movie.Title}
                  className="movie__poster"
                />
                <div className="movie__meta">
                  <h1 className="movie__title">
                    {movie.Title} ({movie.Year})
                  </h1>
                  <p>
                    <strong>IMDb:</strong> {movie.imdbRating} / 10
                  </p>
                  <p>
                    <strong>Runtime:</strong> {movie.Runtime}
                  </p>
                  <p>
                    <strong>Genre:</strong> {movie.Genre}
                  </p>
                  <p>
                    <strong>Director:</strong> {movie.Director}
                  </p>
                  <p>
                    <strong>Writer:</strong> {movie.Writer}
                  </p>
                  <p>
                    <strong>Actors:</strong> {movie.Actors}
                  </p>
                  <p>
                    <strong>Released:</strong> {movie.Released}
                  </p>
                  <p>
                    <strong>Rated:</strong> {movie.Rated}
                  </p>
                </div>
              </div>

              <div className="more__movie--details">
                <div className="movie__plot">
                  <h3>Plot</h3>
                  <p>{movie.Plot}</p>
                </div>
                {Array.isArray(movie.Ratings) && movie.Ratings.length > 0 && (
                  <div className="movie__ratings">
                    <h3>Ratings</h3>
                    <ul>
                      {movie.Ratings.map((r) => (
                        <li key={r.Source}>
                          <strong>{r.Source}:</strong> {r.Value}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
