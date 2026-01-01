import { useNavigate } from "react-router-dom";
import MarvelIntroVideo from "../assets/marvel_intro2.mp4";
import "../Comp_css/HomeSection.css";

function HomeSection() {
  const navigate = useNavigate();

  return (
    <div id="home-container" className="home-container">
      <div className="video-container">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="bg-video"
        >
          <source src={MarvelIntroVideo} type="video/mp4" />
        </video>

        <div className="overlay">
          <section className="hero">
            <h1>Marvel Cinematic Universe</h1>
            <p>
              Explore every hero, every villain, and every cinematic moment —
              from the rise of Iron Man to the depths of the Multiverse.
            </p>

            <div className="hero-buttons">
              <button
                aria-label="Explore Marvel Characters"
                onClick={() => navigate("/characterss")}
              >
                Explore Characters
              </button>

              <button
                aria-label="Discover Marvel Movies"
                onClick={() => navigate("/moviess")}
              >
                Discover Movies
              </button>
            </div>
          </section>
        </div>
      </div>

      <section className="innovation">
        <h2>What Makes This Platform Unique?</h2>

        <div className="innovation-cards">
          <div className="card">
            <h3>Cinematic Timeline</h3>
            <p>
              Experience the Marvel Cinematic Universe phase by phase with a
              structured, spoiler-safe timeline.
            </p>
          </div>

          <div className="card">
            <h3>Character Evolution</h3>
            <p>
              Follow every hero’s journey — powers, suits, alliances, and
              emotional arcs across films.
            </p>
          </div>

          <div className="card">
            <h3>Multiverse Explained</h3>
            <p>
              Understand variants, timelines, and alternate realities in a
              simple, visual, fan-friendly way.
            </p>
          </div>

          <div className="card">
            <h3>Fan-Curated Content</h3>
            <p>
              Built by fans, powered by passion — accurate, cinematic, and
              constantly evolving Marvel knowledge.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomeSection;
