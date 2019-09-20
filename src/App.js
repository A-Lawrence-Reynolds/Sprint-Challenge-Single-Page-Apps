import React from "react";
import Header from "./components/Header.js";
import CharactarList from "./components/CharacterList";
import WelcomePage from "./components/WelcomePage";
import SearchForm from "./components/SearchForm";
import { Route } from "react-router-dom";
export default function App() {
  return (
    <main>
      <Header />
      <WelcomePage />
      <SearchForm />
      <Route
        exact
        path="/Character/:id"
        render={props => <CharactarList {...props} />}
      />
    </main>
  );
}
