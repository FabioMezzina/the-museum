import Filter from "./Filter/Filter";
import GalleryItem from "./GalleryItem/GalleryItem";

import imgOne from "../../assets/1.jpg";
import imgTwo from "../../assets/2.jpg";
import imgThree from "../../assets/3.jpg";
import imgFour from "../../assets/4.jpg";

import classes from './Gallery.module.scss';

const Gallery = () => {
  const galleryOne = {
    id: "g_01",
    title: "Gallery 1",
    date: "Apr 17 - Nov 01, 2020",
    description:
      "lorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit amet, consectetur adip",
    images: [imgOne, imgTwo, imgThree],
  };
  const galleryTwo = {
    id: "g_02",
    title: "Gallery 2",
    date: "Lug 01 - Ott 25, 2020",
    description:
      "lorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit amet, consectetur adip",
    images: [imgFour],
  };

  return (
    <main className={classes.gallery}>
      <Filter />
      <section className={classes["gallery-list"]}>
        <GalleryItem gallery={galleryOne} />
        <GalleryItem gallery={galleryTwo} />
        <GalleryItem gallery={galleryTwo} />
      </section>
    </main>
  );
};

export default Gallery;
