import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const NavLinksDiv = styled.div`
  text-decoration: none;
  font-size: 20px;
  padding: 10px;
  border: 1px solid #c0e5c8;
  border-radius: 5px;
  margin: 5px;

  color: #616283;
  text-shadow: 1px 1px 1px #c0e5c8;
`;

export default function Header() {
  return (
    <header className="ui centered">
      <nav>
        <NavLinksDiv>
          <Link to="/"> Home</Link>
          <Link to="/CharacterList"> Hey Over Here</Link>
        </NavLinksDiv>
      </nav>
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
    </header>
  );
}
