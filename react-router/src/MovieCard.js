import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div style={styles.card}>
      <img src={movie.posterURL} alt={movie.title} style={styles.image} />
      <h3>{movie.title}</h3>
      <p>⭐ {movie.rating}</p>
      {/* Lien vers la page détails */}
      <Link to={`/movie/${movie.title}`} style={styles.link}>
        Voir détails
      </Link>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ccc",
    borderRadius: "10px",
    padding: "10px",
    margin: "10px",
    width: "200px",
    textAlign: "center",
  },
  image: {
    width: "100%",
    borderRadius: "10px",
  },
  link: {
    display: "inline-block",
    marginTop: "10px",
    color: "blue",
    textDecoration: "underline",
  },
};

export default MovieCard;
