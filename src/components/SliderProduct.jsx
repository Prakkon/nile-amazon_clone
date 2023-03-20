import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const SliderProduct = ({ title, datalist }) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 7,
      slidesToSlide: 7,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <div className="slider__container">
        <div className="slider__header">
          <h3>{title}</h3>
          <small>Shop more</small>
        </div>
        <Carousel responsive={responsive}>
          {datalist.map((data, indx) => (
            <img
              key={indx + 1}
              className="slider__product"
              src={`Images/${data.imagePath}`}
              alt="Nile slider"
            ></img>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default SliderProduct;
