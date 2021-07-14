import React from "react";
import "../Style/HomeStyle.css";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

function SearchContainer(props) {
  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const settings = {
    infinite: true,
    speed: 100,
    slidesToShow: 4,
    slidesToSlide: 5,
    centerMode: true,
    centerPadding: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
          speed: 100,
          slidesToSlide: 3,
          centerMode: true,
          focusOnSelect: true,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
      {
        breakpoint: 1366,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
          speed: 100,
          slidesToSlide: 3,
          centerPadding: 0,
          centerMode: true,
          focusOnSelect: true,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
          speed: 100,
          slidesToSlide: 3,
          centerMode: true,
          focusOnSelect: true,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },

      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: false,
          speed: 100,
          slidesToSlide: 3,
          centerMode: true,
          focusOnSelect: true,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          speed: 100,
          slidesToSlide: 3,
          centerMode: true,
          focusOnSelect: true,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
      {
        breakpoint: 3840,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 1,
          dots: false,
          speed: 100,
          slidesToSlide: 3,
          centerMode: true,
          focusOnSelect: true,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
    ],

    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

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

      <div className="row">
        <div className="row_posters">
          <Slider {...settings}>
            {props.animeLista.map((anime) => (
              <a
                className="row_poster"
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
