import { useParams, useNavigate } from "react-router-dom";
import { phases } from "./mcuPhases";
import "../Comp_css/MovieDetails.css";

function MovieDetails() {
  const { phase, index } = useParams();
  const navigate = useNavigate();
  const realPhase = phase.replace("-", " ");
  const movie = phases[realPhase]?.[index];

  if (!movie) return <h2>Movie Not Found</h2>;

  function getEmbedUrl(url) {
    if (!url) return "";

    if (url.includes("youtu.be")) {
      return url.replace("youtu.be/", "www.youtube.com/embed/");
    }

    if (url.includes("watch?v=")) {
      return url.replace("watch?v=", "embed/");
    }

    if (url.includes("embed")) {
      return url;
    }

    return "";
  }
  return (
    <>
      <section className="movie-details-phases">
        <div className="movie-details-phase-movies">
          <div className="movie-details-phase-movie">
            <button className="back-btn" onClick={() => navigate(-1)}>
              <ion-icon name="arrow-undo-circle-outline"></ion-icon>
            </button>
            <div className="movie-details-left-sidebar">
              <img src={movie.img} alt={movie.name} />
              <h3>{movie.name}</h3>
              <p> 🗓️ &nbsp;{movie.year}</p>
              <p>
                <ion-icon name="star"></ion-icon> {movie.rating}
              </p>
            </div>
            <div className="movie-details-trailer">
              <iframe
                src={getEmbedUrl(movie.trailerLink)}
                title={movie.name}
                allowFullScreen
              ></iframe>
            </div>
            <div className="movie-details-right-sidebar">
              <div className="movie-details-right-sidebar-char">
                <h3>Main Characters</h3>
                <ul>
                  {movie.characters.map((c, i) => (
                    <li key={i}> {c} </li>
                  ))}
                </ul>
              </div>
              <div className="movie-details-right-sidebar-desc">
                <h3>Movie Description</h3>
                <p>{movie.description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default MovieDetails;
