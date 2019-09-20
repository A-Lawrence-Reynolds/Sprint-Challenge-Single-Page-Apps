import React, { useEffect, useState } from "react";
import axios from "axios";

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

  return <section className="character-list">{setCharacter}</section>;
};
export default CharacterList;
