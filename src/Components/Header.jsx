import React, { useState } from "react";
import "../Comp_css/Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  const [pulse, setPulse] = useState(false);

  function handleClick() {
    setPulse(true);
    setTimeout(() => setPulse(false), 800);
  }

  return (
    <div className={`navbar ${pulse ? "pulse-shadow" : ""}`}>
      <h2 onClick={handleClick}>
        <Link to="/">MarvelVerse</Link>
      </h2>
      <ul>
        <li onClick={handleClick}>
          <Link to="/">Home</Link>
        </li>
        <li onClick={handleClick}>
          <Link to="/about">About</Link>
        </li>
        <li onClick={handleClick}>
          <Link to="/moviess">Movies</Link>
        </li>
        <li onClick={handleClick}>
          <Link to="/characterss">Characters</Link>
        </li>
        <li onClick={handleClick}>
          <Link to="/gallery">Gallery</Link>
        </li>
        <li onClick={handleClick}>
          <Link to="/feedback">FanFeedback</Link>
        </li>
      </ul>
    </div>
  );
}
