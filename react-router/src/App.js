import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MovieList from "./MovieList";
import Filter from "./Filter";
import MovieDetails from "./MovieDetails";

function App() {
  const [movies, setMovies] = useState([
    {
      title: "Matrix",
      description: "A mind-bending thriller by Christopher Nolan.",
      posterURL: "https://m.media-amazon.com/images/I/51EG732BV3L.jpg",
      rating: 5,
      trailerURL: "https://www.youtube.com/embed/YoHD9XEInc0",
    },
    {
      title: "Breaking Bad",
      description: "A chemistry teacher turned meth producer.",
      posterURL: "https://m.media-amazon.com/images/I/81qE3wKj5yL._AC_SY679_.jpg",
      rating: 4,
      trailerURL: "https://www.youtube.com/embed/HhesaQXLuRY",
    },
  ]);

  const [filterTitle, setFilterTitle] = useState("");
  const [filterRate, setFilterRate] = useState(0);

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
      movie.rating >= filterRate
  );

  return (
    <Router>
      <div className="App" style={{ padding: "20px" }}>
        <h1>🎬 My Movie App</h1>
        <Routes>
          {/* Page d'accueil */}
          <Route
            path="/"
            element={
              <>
                <Filter
                  setFilterTitle={setFilterTitle}
                  setFilterRate={setFilterRate}
                  addMovie={addMovie}
                />
                <MovieList movies={filteredMovies} />
              </>
            }
          />
          {/* Page détails */}
          <Route path="/movie/:title" element={<MovieDetails movies={movies} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
