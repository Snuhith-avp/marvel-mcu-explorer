import React from "react";
import { useNavigate } from "react-router-dom";
import { phases } from "./mcuPhases";
import "../Comp_css/Movies.css";

function Movies() {
  console.log("Movies page loaded");
  const navigate = useNavigate();
  return (
    <>
      <section className="four-hero">
        <h1>Movies</h1>
        <h4>“This isn’t just a saga. It’s a universe.”</h4>
      </section>
      {Object.entries(phases).map(([phaseName, movies]) => (
        <React.Fragment key={phaseName}>
          <section className="phases">
            <h1>{phaseName}</h1>

            <div className="phase-movies">
              {movies.map((movie, index) => (
                <div className="phase-movie" key={index}>
                  <img src={movie.img} alt={movie.name} />
                  <h3>{movie.name}</h3>
                  <p> Year : &nbsp;{movie.year}</p>
                  <p>
                    Rating : &nbsp;
                    <ion-icon name="star"></ion-icon> {movie.rating}
                  </p>
                  <button
                    onClick={() =>
                      navigate(
                        `/moviess/${phaseName.replace(" ", "-")}/${index}`
                      )
                    }
                  >
                    More Details
                  </button>
                </div>
              ))}
            </div>
          </section>
          <hr className="phases-hr" />
        </React.Fragment>
      ))}
    </>
  );
}
export default Movies;
