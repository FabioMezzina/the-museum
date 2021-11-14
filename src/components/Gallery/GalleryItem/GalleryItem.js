import { useState } from "react";

import Carousel from "./Carousel/Carousel";

import classes from "./GalleryItem.module.scss";

const GalleryItem = (props) => {
  const [carouselOpened, setCarouselOpened] = useState(false);

  const openCarousel = () => {
    setCarouselOpened(true);
  };

  const closeCarousel = () => {
    setCarouselOpened(false);
  };

  if (carouselOpened) {
    return <Carousel gallery={props.gallery} onClose={closeCarousel} />;
  } else {
    return (
      <div className={classes["gallery-item"]} onClick={openCarousel}>
        <div className={classes["gallery-image"]}>
          <img src={props.gallery.images[0]} alt="" className={classes["main-image"]} />
          {props.gallery.images.length > 1 && (
            <img src={props.gallery.images[1]} alt="" className={classes["back-image"]} />
          )}
        </div>
        <div className={classes["gallery-title-date"]}>
          <h4>{props.gallery.title}</h4>
          <p>{props.gallery.date}</p>
        </div>
      </div>
    );
  }
};

export default GalleryItem;
