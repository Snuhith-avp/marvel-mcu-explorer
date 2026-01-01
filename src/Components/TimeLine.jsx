import "../Comp_css/TimeLine.css";

const mcuPhases = [
  {
    phase: "Phase One",
    title: "The Avengers Initiative",
    years: "2008 – 2012",
    movies: [
      "Iron Man (2008)",
      "The Incredible Hulk (2008)",
      "Iron Man 2 (2010)",
      "Thor (2011)",
      "Captain America: The First Avenger (2011)",
      "The Avengers (2012)",
    ],
  },
  {
    phase: "Phase Two",
    title: "Age of Heroes",
    years: "2013 – 2015",
    movies: [
      "Iron Man 3 (2013)",
      "Thor: The Dark World (2013)",
      "Captain America: The Winter Soldier (2014)",
      "Guardians of the Galaxy (2014)",
      "Avengers: Age of Ultron (2015)",
      "Ant-Man (2015)",
    ],
  },
  {
    phase: "Phase Three",
    title: "The Infinity Saga",
    years: "2016 – 2019",
    movies: [
      "Captain America: Civil War (2016)",
      "Doctor Strange (2016)",
      "Guardians of the Galaxy Vol. 2 (2017)",
      "Spider-Man: Homecoming (2017)",
      "Thor: Ragnarok (2017)",
      "Black Panther (2018)",
      "Avengers: Infinity War (2018)",
      "Ant-Man and the Wasp (2018)",
      "Captain Marvel (2019)",
      "Avengers: Endgame (2019)",
      "Spider-Man: Far From Home (2019)",
    ],
  },
  {
    phase: "Phase Four",
    title: "The Multiverse Saga Begins",
    years: "2021 – 2022",
    movies: [
      "Black Widow (2021)",
      "Shang-Chi and the Legend of the Ten Rings (2021)",
      "Eternals (2021)",
      "Spider-Man: No Way Home (2021)",
      "Doctor Strange in the Multiverse of Madness (2022)",
      "Thor: Love and Thunder (2022)",
      "Black Panther: Wakanda Forever (2022)",
    ],
  },
  {
    phase: "Phase Five",
    title: "The Multiverse Saga",
    years: "2023 – Present",
    movies: [
      "Ant-Man and the Wasp: Quantumania (2023)",
      "Guardians of the Galaxy Vol. 3 (2023)",
      "The Marvels (2023)",
      "Captain America: Brave New World (2025)",
      "Thunderbolts* (2025)",
      "Blade (Upcoming)",
      "Avengers: The Kang Dynasty (Upcoming)",
      "Avengers: Secret Wars (Upcoming)",
    ],
  },
];

function TimeLine() {
  return (
    <div id="timeline-container" className="timeline-container">
      <h1 className="timeline-title">MCU Timeline</h1>
      <p className="timeline-subtitle">From Iron Man to the Multiverse Saga</p>

      <div className="timeline">
        {mcuPhases.map((phase, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-content">
              <h2>{phase.phase}</h2>
              <h3>{phase.title}</h3>
              <span className="timeline-years">{phase.years}</span>
              <ul>
                {phase.movies.map((movie, i) => (
                  <li key={i}>{movie}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TimeLine;
