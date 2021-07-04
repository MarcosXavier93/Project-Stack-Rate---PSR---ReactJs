import "../Style/App.css";
import Header from "./Header";
import { useState, useEffect } from "react";
import MainContent from "./MainContent";
import { Component } from "react";
import Footer from "./Footer";
import SideBar from "./SideBar";

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

  const GetTodosAnimesNovos = async () => {
    const ResutltadoJson = await fetch(
      `https://api.jikan.moe/v3/schedule/monday`
    ).then((response) => response.json());
    SetAnimeListaNovos(ResutltadoJson.results);
  };

  const GetTopAnime = async () => {
    const temporario = await fetch(
      `https://api.jikan.moe/v3/top/anime/1/bypopularity`
    ).then((response) => response.json());
    SetTopAnime(temporario.top.slice(0, 5));
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
    console.log("Anime Novidades");
  }, []);
  return (
    <div className="Anime">
      <Header />
      <SideBar />
      <div className="content-wrap">
        <MainContent
          HandleSearch={HandleSearch}
          search={search}
          SetSearch={SetSearch}
          animeLista={animeLista}
          animeListaNovidades={animeListaNovidades}
          animeListaNovos={animeListaNovos}
        />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
