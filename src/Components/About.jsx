import "../Comp_css/About.css";

function About() {
  return (
    <div id="about-container" className="about-container">
      <section className="about-hero">
        <h1>About MarvelVerse</h1>
        <p>
          MarvelVerse is a fan-powered platform dedicated to documenting and
          celebrating the Marvel Cinematic Universe.
        </p>
      </section>

      <section className="about-content">
        <h2>Our Purpose</h2>
        <p>
          The MCU is more than just movies — it is a connected universe of
          stories, emotions, and legendary characters. MarvelVerse exists to
          organize this massive universe into a single, easy-to-explore
          platform.
        </p>

        <h2>Innovation Behind MarvelVerse</h2>
        <ul>
          <li>
            <strong>Story-First Design:</strong> We focus on storytelling, not
            just data.
          </li>
          <li>
            <strong>Unified Knowledge:</strong> Characters, films, and events
            are deeply connected.
          </li>
          <li>
            <strong>Beginner & Fan Friendly:</strong> Easy for newcomers,
            detailed for hardcore fans.
          </li>
          <li>
            <strong>Future Ready:</strong> Built to expand with upcoming MCU
            movies and series.
          </li>
        </ul>

        <h2>Vision & Mission</h2>
        <p>
          Our vision is to become the most engaging Marvel fan platform on the
          web. Our mission is to preserve Marvel’s cinematic legacy, simplify
          complex storylines, and inspire fans worldwide.
        </p>
      </section>
    </div>
  );
}

export default About;
