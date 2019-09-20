import React from "react";
import Header from "./components/Header.js";
import CharactarList from "./components/CharacterList";
import WelcomePage from "./components/WelcomePage";
import SearchForm from "./components/SearchForm";

export default function App() {
  return (
    <main>
      <Header />
      <WelcomePage />
      <SearchForm />
      <CharactarList />
    </main>
  );
}
