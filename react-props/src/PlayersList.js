// PlayersList.js
import React from "react";
import Player from "./player.js";
import players from "./players.js";
import "bootstrap/dist/css/bootstrap.min.css";

function PlayersList() {
  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    padding: "2rem",
    backgroundColor: "#f8f9fa",
  };

  return (
    <div style={containerStyle}>
      {players.map((player, index) => (
        <Player key={index} {...player} />
      ))}
    </div>
  );
}

export default PlayersList;
