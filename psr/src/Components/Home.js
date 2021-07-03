import "../Style/App.css";
import Header from "./Header";
import { useState, useEffect } from "react";
import MainContent from "./MainContent";
import { Component } from "react";

function Home() {
  const [animeLista, SetAnimeLista] = useState([]);
  const [topAnime, SetTopAnime] = useState([]);
  const [search, SetSearch] = useState("");

  const GetTodosAnimes = async () => {
    const temporario = await fetch(
      `https://api.jikan.moe/v3/top/anime/1/bypopularity`
    ).then((response) => response.json());
    SetAnimeLista(temporario.results);
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
        />
      </div>
    </div>
  );
}

export default Home;
