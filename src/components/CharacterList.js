import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const CharacterList = props => {
  const [character, setCharacter] = useState([]);
  // TODO: Add useState to track data from useEffect

  useEffect(() => {
    const getcharacters = () => {
      axios
        .get("https://rickandmortyapi.com/api/character/")
        .then(response => {
          console.log(response.data.results);
          setCharacter(response.data.results);
        })
        .catch(error => {
          console.log("houston we have a problem", error);
        });
    };
    getcharacters([]);
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  return (
    <section className="character-list">
      {character.map(items => (
        <CharacterInfo key={items.id} items={items} />
      ))}
    </section>
  );
};

function CharacterInfo({ items }) {
  const { id, name, species, status } = items;
  return (
    <Link className="char-card" to={`/character/${id}`}>
      <div to={`/character/${id}`}>
        <h1>
          <span className="badge badge-success">Name</span>:
          <span className="badge-pill badge-info">{name}</span>
        </h1>
        <h2>
          <span className="badge badge-success">Species</span>:
          <span className="badge-pill badge-info">{species}</span>
        </h2>
        <h2>
          <span className="badge badge-success">Status</span>:
          <span className="badge-pill badge-info">{status}</span>
        </h2>
      </div>
    </Link>
  );
}

export default CharacterList;
