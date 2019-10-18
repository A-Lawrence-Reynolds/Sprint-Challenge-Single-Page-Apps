import React from "react";

export default function SearchForm(props) {
  return (
    <section className="search-form">
      <form>
        <input
          type="text"
          value={props.query}
          name="name"
          className="Search"
          onChange={props.onQueryChange}
        />
      </form>
    </section>
  );
}
