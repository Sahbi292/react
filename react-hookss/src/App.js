import React, { useState } from "react";
import MovieList from "./MovieList";
import Filter from "./Filter";

function App() {
  const [movies, setMovies] = useState([
    {
      title: "Inception",
      description: "A mind-bending thriller by Christopher Nolan.",
      posterURL: "https://m.media-amazon.com/images/I/51EG732BV3L.jpg",
      rating: 5,
    },
    {
      title: "Breaking Bad",
      description: "A chemistry teacher turned meth producer.",
      posterURL: "https://m.media-amazon.com/images/I/81qE3wKj5yL._AC_SY679_.jpg",
      rating: 4,
    },
  ]);

  const [filterTitle, setFilterTitle] = useState("");
  const [filterRate, setFilterRate] = useState(0);

  // Add a new movie
  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  // Filter movies
  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
      movie.rating >= filterRate
  );

  return (
    <div className="App" style={{ padding: "20px" }}>
      <h1>🎬 My Movie App</h1>
      <Filter
        setFilterTitle={setFilterTitle}
        setFilterRate={setFilterRate}
        addMovie={addMovie}
      />
      <MovieList movies={filteredMovies} />
    </div>
  );
}

export default App;
