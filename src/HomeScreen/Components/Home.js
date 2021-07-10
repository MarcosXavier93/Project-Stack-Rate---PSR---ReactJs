import "../Style/HomeStyle.css";
import { useState, useEffect } from "react";
import SearchContainer from "./SearchContainer";
import { Component } from "react";
import Row from "./Row";

function Home() {
  const [animeLista, SetAnimeLista] = useState([]);
  const [animeListaNovos, SetAnimeListaNovos] = useState([]);
  const [animeListaNovidades, SetAnimeListaNovidades] = useState([]);
  const [topAnime, SetTopAnime] = useState([]);
  const [search, SetSearch] = useState("");

  const GetanimeListaNovidades = async () => {
    const ResutltadoJson = await fetch(
      `https://api.jikan.moe/v3/top/anime/1/upcoming`
    ).then((response) => response.json());
    SetAnimeListaNovidades(ResutltadoJson.top);
  };

  const HandleSearch = (e) => {
    e.preventDefault();
    FetchAnime(search);
  };
  const FetchAnime = async (query) => {
    const ResutltadoJson = await fetch(
      `https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=10`
    ).then((response) => response.json());
    SetAnimeLista(ResutltadoJson.results);
  };

  useEffect(() => {
    GetanimeListaNovidades();
  }, []);

  return (
    <div className="Anime">
      <div className="content-wrap">
        <SearchContainer
          HandleSearch={HandleSearch}
          search={search}
          SetSearch={SetSearch}
          animeLista={animeLista}
        />
        <Row title="News" animeListaNovidades={animeListaNovidades} />
        <Row title="World Top" animeListaNovidades={animeListaNovidades} />
        <Row title="Recomendations" animeListaNovidades={animeListaNovidades} />
        <Row title="Wacthing now" animeListaNovidades={animeListaNovidades} />
      </div>
    </div>
  );
}

export default Home;
