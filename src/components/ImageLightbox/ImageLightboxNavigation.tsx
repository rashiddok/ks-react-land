import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleLeft,
  faChevronCircleRight,
} from "@fortawesome/free-solid-svg-icons";

type ComponentProps = {
  slideNavigate: (n: number) => void;
};

const ImageLightboxNavigation = ({ slideNavigate }: ComponentProps) => {
  return (
    <React.Fragment>
      <button
        className="image_lightbox__navigation image_lightbox__navigation_prev"
        onClick={() => slideNavigate(-1)}
      >
        <FontAwesomeIcon icon={faChevronCircleLeft} size="2x" />
      </button>
      <button
        className="image_lightbox__navigation image_lightbox__navigation_next"
        onClick={() => slideNavigate(1)}
      >
        <FontAwesomeIcon icon={faChevronCircleRight} size="2x" />
      </button>
    </React.Fragment>
  );
};

export default ImageLightboxNavigation;
