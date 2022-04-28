import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faGrip,
} from "@fortawesome/free-solid-svg-icons";
import { useTypedSelector } from "../../hooks/useTypedState";
import {
  selectProjectNeighboursName,
  selectProjects,
} from "../../store/slices/projectsSlice";
import { Link } from "react-router-dom";

const ProjectNavigation = ({
  projectShortTitle,
}: {
  projectShortTitle: string;
}) => {
  const projects = useTypedSelector((state) =>
    selectProjectNeighboursName(state, projectShortTitle)
  );
  console.log(projects);

  return (
    <div className="project__navigation">
      <Link
        to={`/projects/${projects.prev}`}
        className="navigation navigation-prev"
        style={projects.prev ? {} : { pointerEvents: "none" }}
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </Link>
      <Link to="/projects" className="navigation">
        <FontAwesomeIcon icon={faGrip} />
      </Link>
      <Link
        to={`/projects/${projects.next}`}
        className="navigation navigation-next"
        style={projects.next ? {} : { pointerEvents: "none" }}
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </Link>
    </div>
  );
};

export default ProjectNavigation;
