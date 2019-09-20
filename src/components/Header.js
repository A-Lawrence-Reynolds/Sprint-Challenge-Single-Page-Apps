import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="ui centered">
      <nav>
        <div>
          <Link to="/"> Home</Link>
          <Link to="/CharacterList"> Hey Over Here</Link>
        </div>
      </nav>
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
    </header>
  );
}
