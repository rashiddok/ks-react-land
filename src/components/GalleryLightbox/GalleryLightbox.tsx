import React, { useState } from "react";
import {
  faChevronCircleRight,
  faChevronCircleLeft,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import classes from "./GalleryLightbox.module.scss";
import { GalleryImage } from "../../utils/models/GalleryImage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from "../UI/Modal/Modal";

type ComponentProps = {
  images: GalleryImage[];
  initialImageIndex: number;
  visible: boolean;
  setVisible: (state: boolean) => void;
};

const GalleryLightbox = ({
  images,
  initialImageIndex,
  visible,
  setVisible,
}: ComponentProps) => {
  const [slideIndex, setSlideIndex] = useState<number>(initialImageIndex);
  function findSlideIndex(n: number) {
    const foundImage = images.find((v) => v.id === n);
    if (foundImage) {
      return n;
    }
    return slideIndex;
  }

  function slideNavigate(n: number) {
    n = findSlideIndex(slideIndex + n);
    setSlideIndex(n);
  }

  return (
    <Modal setVisible={setVisible}>
      <div className={classes.image_lightbox}>
        <span
          className={classes.image_lightbox__close}
          onClick={() => setVisible(false)}
        >
          <FontAwesomeIcon icon={faXmark} size="lg"></FontAwesomeIcon>
        </span>
        <div className={classes.image_lightbox__content}>
          {images
            .filter((image) => image.id === slideIndex)
            .map((image) => (
              <div className={classes.lightbox_slide} key={image.id}>
                <img src={image.image} className={classes.slide_image} alt="" />
              </div>
            ))}
          <button
            className={[
              classes.image_lightbox__navigation,
              classes.image_lightbox__navigation_prev,
            ].join(" ")}
            onClick={() => slideNavigate(-1)}
          >
            <FontAwesomeIcon icon={faChevronCircleLeft} size="2x" />
          </button>
          <button
            className={[
              classes.image_lightbox__navigation,
              classes.image_lightbox__navigation_next,
            ].join(" ")}
            onClick={() => slideNavigate(1)}
          >
            <FontAwesomeIcon icon={faChevronCircleRight} size="2x" />
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default GalleryLightbox;
