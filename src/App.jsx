import { Routes, Route } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import Home from "./Components/Home";
import About from "./Components/About";
import Movies from "./Components/Movies";
import MovieDetails from "./Components/MovieDetails";
import Characters from "./Components/Characters";
import Gallery from "./Components/Gallery";
import FanFeedback from "./Components/FanFeedback";
import ScrollToTop from "./Components/ScrollToTop";
import "./index.css";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/moviess" element={<Movies />} />
          <Route path="/moviess/:phase/:index" element={<MovieDetails />} />
          <Route path="/characterss" element={<Characters />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/feedback" element={<FanFeedback />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
