import React from "react";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

function Row(props, { title }) {
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
    centerMode: true,
    centerPadding: 50,
    slidesToSlide: 8,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div className="row">
      <div className="row_posters">
        <h2>{props.title}</h2>
        <Slider {...settings}>
          {props.animeListaNovidades.map((anime) => (
            <a
              className="row_poster"
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
