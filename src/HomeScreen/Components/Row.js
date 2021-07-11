import React from "react";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

function Row(props, { title }) {
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
    dots: false,
    infinite: true,
    speed: 100,
    slidesToShow: 4,
    slidesToSlide: 5,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div className="Home-row">
      <div className="Home-row_posters">
        <h2>{props.title}</h2>
        <Slider {...settings}>
          {props.animeListaNovidades.map((anime) => (
            <a
              className="Home-row_poster"
              href={anime.url}
              target="_blank"
              rel="noreferrer"
            >
              <figure>
                <img key={anime.rank} src={anime.image_url} alt={anime.title} />
              </figure>
            </a>
          ))}
        </Slider>
      </div>
    </div>
  );
}
export default Row;
