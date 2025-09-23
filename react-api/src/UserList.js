
import React, { useState, useEffect } from "react";
import axios from "axios";

const UserList = () => {
  const [listOfUser, setListOfUser] = useState([]); 
  const [loading, setLoading] = useState(true);     
  const [error, setError] = useState(null);         

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users") 
      .then((response) => {
        setListOfUser(response.data); 
        setLoading(false);
      })
      .catch((err) => {
        setError("Erreur lors du chargement des utilisateurs ❌");
        setLoading(false);
      });
  }, []); 

  if (loading) return <p>Chargement des utilisateurs...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>Liste des utilisateurs 👥</h2>
      <ul>
        {listOfUser.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong> <br />
            ✉️ {user.email} <br />
            📍 {user.address.city}
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
