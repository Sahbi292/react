import React, { useState } from "react";

const Filter = ({ setFilterTitle, setFilterRate, addMovie }) => {
  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: 0,
  });

  const handleAdd = () => {
    if (!newMovie.title || !newMovie.posterURL) return alert("Fill all fields!");
    addMovie(newMovie);
    setNewMovie({ title: "", description: "", posterURL: "", rating: 0 });
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <h2>🔍 Filter Movies</h2>
      <input
        type="text"
        placeholder="Search by title"
        onChange={(e) => setFilterTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="Minimum rating"
        min="0"
        max="5"
        onChange={(e) => setFilterRate(Number(e.target.value))}
      />

      <h2>➕ Add Movie</h2>
      <input
        type="text"
        placeholder="Title"
        value={newMovie.title}
        onChange={(e) => setNewMovie({ ...newMovie, title: e.target.value })}
      />
      <input
        type="text"
        placeholder="Description"
        value={newMovie.description}
        onChange={(e) =>
          setNewMovie({ ...newMovie, description: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="Poster URL"
        value={newMovie.posterURL}
        onChange={(e) => setNewMovie({ ...newMovie, posterURL: e.target.value })}
      />
      <input
        type="number"
        placeholder="Rating"
        min="0"
        max="5"
        value={newMovie.rating}
        onChange={(e) =>
          setNewMovie({ ...newMovie, rating: Number(e.target.value) })
        }
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default Filter;
