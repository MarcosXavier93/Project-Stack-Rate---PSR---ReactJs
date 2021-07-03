import "../Style/App.css";
import Header from "./Header";
import { useState, useEffect } from "react";
import MainContent from "./MainContent";
import { Component } from "react";
import Footer from "./Footer";

function Home() {
  const [animeLista, SetAnimeLista] = useState([]);
  const [animeListaNovos, SetAnimeListaNovos] = useState([]);
  const [animeListaDestaque, SetAnimeListaDestaque] = useState([]);
  const [topAnime, SetTopAnime] = useState([]);
  const [search, SetSearch] = useState("");

  const GetTodosAnimes = async () => {
    const temporario = await fetch(
      `https://api.jikan.moe/v3/top/anime/50/bypopularity`
    ).then((response) => response.json());
    SetAnimeLista(temporario.results);
  };

  const GetTodosAnimesDestaque = async () => {
    const temporario = await fetch(
      `https://api.jikan.moe/v3/top/anime/50/airing`
    ).then((response) => response.json());
    SetAnimeListaDestaque(temporario.results);
  };

  const GetTodosAnimesNovos = async () => {
    const temporario = await fetch(
      `https://api.jikan.moe/v3/top/anime/50/upcoming`
    ).then((response) => response.json());
    SetAnimeListaNovos(temporario.results);
  };

  /*
  const GetTopAnime = async()=>{
    const temporario = await fetch(`https://api.jikan.moe/v3/top/anime/1/bypopularity`).then(response=>response.json());
    SetTopAnime(temporario.top.slice(0, 5));

  }
  */
  const HandleSearch = (e) => {
    e.preventDefault();
    FetchAnime(search);
  };
  const FetchAnime = async (query) => {
    const Temporario = await fetch(
      `https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=10`
    ).then((response) => response.json());
    SetAnimeLista(Temporario.results);
    console.log(Temporario.results);
  };
  /*useEffect(() => {
    GetTopAnime();
  }, []);
*/
  return (
    <div className="Anime">
      <Header />
      <div className="content-wrap">
        <MainContent
          HandleSearch={HandleSearch}
          search={search}
          SetSearch={SetSearch}
          animeLista={animeLista}
          animeListaDestaque={animeListaDestaque}
          animeListaNovos={animeListaNovos}
        />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
