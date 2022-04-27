import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faGrip,
} from "@fortawesome/free-solid-svg-icons";

const ProjectNavigation = ({ projectShortTitle }: any) => {
  return (
    <div className="project__navigation">
      <button className="navigation navigation-prev">
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <button className="navigation">
        <FontAwesomeIcon icon={faGrip} />
      </button>
      <button className="navigation navigation-next">
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
};

export default ProjectNavigation;
