import React from 'react';
import classes from "./ProjectNavigation.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronLeft, faChevronRight, faGrip} from "@fortawesome/free-solid-svg-icons"

const ProjectNavigation = ({projectShortTitle}: any) => {

    return (
        <div className={classes.project__navigation}>
            <button className={[classes.navigation, classes.navigationPrev].join(' ')}>
                <FontAwesomeIcon icon={faChevronLeft}/>
            </button>
            <button className={classes.navigation}>
                <FontAwesomeIcon icon={faGrip}/>
            </button>
            <button className={[classes.navigation, classes.navigationNext].join(' ')}>
                <FontAwesomeIcon icon={faChevronRight}/>
            </button>
        </div>
    );
};

export default ProjectNavigation;