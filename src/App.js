import React from "react";
import Header from "./components/Header.js";
import CharactarList from "./components/CharacterList";
import WelcomePage from "./components/WelcomePage";
import { Route } from "react-router-dom";
export default function App() {
  return (
    <main>
      <Header />
      <WelcomePage />
      <Route
        path="/CharacterList"
        render={props => <CharactarList {...props} />}
      />
    </main>
  );
}
