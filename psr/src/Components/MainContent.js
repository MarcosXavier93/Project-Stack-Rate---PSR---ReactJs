import React from "react";
import "../Style/App.css";
import AnimeCard from "./AnimeCard";

function MainContent(props, { animeListaNovidades }) {
  return (
    <main>
      <div className="main-header" onSubmit={props.HandleSearch}>
        <form className="search-box">
          <input
            type="search"
            placeholder="Procure um anime aqui."
            required
            value={props.search}
            onChange={(e) => props.SetSearch(e.target.value)}
          />
        </form>
      </div>
      <h2>Destaques</h2>
      <div className="anime-list">
        {props.animeLista.map((anime) => (
          <AnimeCard anime={anime} key={anime.mal_id} />
        ))}
      </div>

      <h2>Novidades</h2>
      <div className="anime-list">
        {props.animeListaNovidades.map((anime) => (
          <AnimeCard anime={anime} key={anime.mal_id} />
        ))}
      </div>
    </main>
  );
}

export default MainContent;
