import React, { useEffect, useState } from "react";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import "./ImageLightbox.scss";
import { GalleryImage } from "../../utils/models/GalleryImage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from "../UI/Modal/Modal";
import ImageLightboxNavigation from "./ImageLightboxNavigation";

type ComponentProps = {
  images: GalleryImage[];
  initialImageIndex: number;
  visible: boolean;
  setVisible: (state: boolean) => void;
};

const ImageLightbox = ({
  images,
  initialImageIndex,
  visible,
  setVisible,
}: ComponentProps) => {
  const [slideIndex, setSlideIndex] = useState<number>(initialImageIndex);
  const [slideImage, setSlideImage] = useState<string>();

  useEffect(() => {
    if (!Boolean(slideImage)) {
      findSlideAndSetImage(initialImageIndex);
    }
  });

  function findSlideAndSetImage(index: number) {
    const foundImage = images.find((v) => v.id === index);
    if (foundImage) {
      setSlideImage(foundImage.image);
      setSlideIndex(index);
    }
  }

  function slideNavigate(n: number) {
    findSlideAndSetImage(slideIndex + n);
  }

  return (
    <Modal setVisible={setVisible}>
      <div className="image_lightbox">
        <span
          className="image_lightbox__close"
          onClick={() => setVisible(false)}
        >
          <FontAwesomeIcon icon={faXmark} size="lg"></FontAwesomeIcon>
        </span>
        <div className="image_lightbox__content">
          <div className="lightbox_slide">
            <img src={slideImage} className="slide_image" alt="" />
          </div>
        </div>
        <ImageLightboxNavigation slideNavigate={slideNavigate} />
      </div>
    </Modal>
  );
};

export default ImageLightbox;
