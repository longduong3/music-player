import React, { useState } from "react";
import styles from "./Carousel.module.scss";
import classNames from "classnames/bind";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";

const cx = classNames.bind(styles);
const items = [
  {
    id: 1,
    altText: "",
    caption: "",
    img: "https://img.freepik.com/free-vector/flat-design-music-festival-twitter-banner_23-2149074852.jpg",
  },
  {
    id: 2,
    altText: "",
    caption: "",
    img: "https://image.shutterstock.com/image-vector/music-banner-template-event-festival-260nw-1458913916.jpg",
  },
  {
    id: 3,
    altText: "",
    caption: "",
    img: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/edm-music-banner-design-template-a7a04b8182bac4dd9ea57f6b14e3601e_screen.jpg?ts=1599558499",
  },
];

function Carousels(props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        className={cx("custom-carousel")}
        tag="div"
        key={item.id}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
      >
        <img className={cx("img-carousel")} src={item.img} alt={"none"} />
        <CarouselCaption
          className={cx("text-danger")}
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <div>
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>
    </div>
  );
}

export default Carousels;
