import React from "react";
import "../../Styles/global.css";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

function SearchContainer(props) {
  const PrevArrow = ({ onClick }) => {
    return (
      <div className="Home-arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const NextArrow = ({ onClick }) => {
    return (
      <div className="Home-arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };
  const settings = {
    infinite: true,
    lazyload: true,
    speed: 300,
    slidesToShow: 4,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <main>
      <div className="Home-main-header" onSubmit={props.HandleSearch}>
        <form className="Home-search-box">
          <input
            type="search"
            placeholder="Procure um anime aqui."
            required
            value={props.search}
            onChange={(e) => props.SetSearch(e.target.value)}
          />
        </form>
      </div>

      <div className="Home-row">
        <div className="Home-row_posters">
          <Slider {...settings}>
            {props.animeLista.map((anime) => (
              <a
                className="Home-row_poster"
                href={anime.url}
                target="_blank"
                rel="noreferrer"
              >
                <figure>
                  <img
                    key={anime.rank}
                    src={anime.image_url}
                    alt={anime.title}
                  />
                </figure>
              </a>
            ))}
          </Slider>
        </div>
      </div>
    </main>
  );
}

export default SearchContainer;
