import { useState, useEffect } from "react";

import classes from "./Carousel.module.scss";

const Carousel = (props) => {
  const [carouselImages, setCarouselImages] = useState([0, 1]);

  const id = props.gallery.id;
  useEffect(() => {
    document.getElementById(id).scrollIntoView();
  }, [id]);

  useEffect(() => {
    if (props.gallery.images.length > 1) {
      const carouselInterval = setInterval(() => {
        changeImages(carouselImages[1]);
      }, 3000);
      return () => {
        clearInterval(carouselInterval);
      };
    }
  }, [carouselImages]);

  const changeImages = (i) => {
    if (i === props.gallery.images.length - 1) {
      setCarouselImages([i, 0]);
    } else {
      setCarouselImages([i, i + 1]);
    }
  };

  const shots = props.gallery.images.map((img, i) => {
    if (i === carouselImages[0]) {
      return (
        <div
          key={i}
          className={`${classes.shot} ${classes["shot-active"]}`}
          onClick={() => changeImages(i)}
        ></div>
      );
    } else {
      return (
        <div
          key={i}
          className={classes.shot}
          onClick={() => changeImages(i)}
        ></div>
      );
    }
  });

  return (
    <div id={props.gallery.id} className={classes.carousel}>
      <h3>{props.gallery.title}</h3>
      <p>{props.gallery.description}</p>
      <div className={classes["carousel-images"]}>
        <img
          src={props.gallery.images[carouselImages[0]]}
          alt="active"
          className={classes.activeImg}
          onClick={() => changeImages(carouselImages[0])}
        />
        {props.gallery.images.length > 1 && (
          <img
            src={props.gallery.images[carouselImages[1]]}
            alt="next"
            className={classes.nextImg}
            onClick={() => changeImages(carouselImages[1])}
          />
        )}
      </div>
      <div className={classes["carousel-shots"]}>{shots}</div>
      <span className={classes["btn-close-carousel"]} onClick={props.onClose}>
        <i className="fas fa-times"></i>
      </span>
    </div>
  );
};

export default Carousel;
