import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import SearchForm from "./SearchForm";
import styled from "styled-components";

const CharacterList = props => {
  const [characterList, setCharacterList] = useState([]);
  const [characterFilter, setCharacterFilter] = useState("");

  useEffect(() => {
    const getCharacters = () => {
      axios
        .get("https://rickandmortyapi.com/api/character/")
        .then(response => {
          const info = response.data.results;
          const results = info.filter(character =>
            character.name.toLowerCase().includes(characterFilter.toLowerCase())
          );
          console.log(results);
          setCharacterList(results);
        })
        .catch(error => {
          console.log("houston we have a problem", error);
        });
    };
    getCharacters([]);
  }, [characterFilter]);
  const handleChange = event => {
    setCharacterFilter(event.target.value);
  };
  return (
    <div>
      <SearchForm query={characterFilter} onQueryChange={handleChange} />
      <section className="character-list">
        {characterList.map(items => (
          <CharacterInfo key={items.id} items={items} />
        ))}
      </section>
    </div>
  );
};
const Card = styled.div`
  padding: 10px;
  background: #374a67;
  width: 65%;
  border-radius: 5px;
  margin: 15px;
  width: 50%;
`;
const Name = styled.h1`
  color: #616283;
  text-shadow: 1px 1px 1px #c0e5c8;
`;
const Sub = styled.h2`
  color: #616283;
  text-shadow: 1px 1px 1px #c0e5c8;
`;

function CharacterInfo({ items }) {
  const { id, name, species, status, type } = items;
  return (
    <Link className="char-card" to={`/character/${id}`}>
      <Card to={`/character/${id}`}>
        <Name>
          <span className="">Name</span>:<span className="">{name}</span>
        </Name>{" "}
        <Sub>
          <span className="">Type</span>:<span className="">{type}</span>
        </Sub>
        <Sub>
          <span className="">Species</span>:<span className="">{species}</span>
        </Sub>
        <Sub>
          <span className="">Status</span>:<span className="">{status}</span>
        </Sub>
      </Card>
    </Link>
  );
}

export default CharacterList;
