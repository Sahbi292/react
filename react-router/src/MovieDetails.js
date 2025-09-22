
import React from "react";
import { useParams, Link } from "react-router-dom";

const MovieDetails = ({ movies }) => {
  const { title } = useParams();
  const movie = movies.find((m) => m.title === title);

  if (!movie) {
    return <h2>Film non trouvé</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <div style={{ margin: "20px 0" }}>
        <iframe
          width="560"
          height="315"
          src={movie.trailerURL}
          title={movie.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <Link to="/">⬅ Retour à l'accueil</Link>
    </div>
  );
};

export default MovieDetails;
