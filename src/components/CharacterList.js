import React, { useEffect, useState } from "react";
import axios from "axios";

const CharacterList = props => {
  const [character, setCharacter] = useState([]);
  // TODO: Add useState to track data from useEffect

  useEffect(() => {
    const getcharacters = () => {
      axios
        .get("https://rick-api.herokuapp.com/api/")
        .then(response => {
          console.log(response);
          setCharacter(response);
        })
        .catch(error => {
          console.log("houston we have a problem", error);
        });
    };
    getcharacters([]);
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  return <section className="character-list">{}</section>;
};
export default CharacterList;
