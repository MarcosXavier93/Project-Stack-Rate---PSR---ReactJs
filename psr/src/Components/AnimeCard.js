import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function AnimeCard({ anime }) {
  return (
    <article className="anime-card">
      <a href={anime.url} target="_blank" rel="noreferrer">
        <figure>
          <img src={anime.image_url} alt="" />
        </figure>
        <h3>{anime.title}</h3>
      </a>
    </article>
  );
}

export default AnimeCard;
