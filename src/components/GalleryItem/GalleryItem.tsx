import React from 'react';
import {GalleryItemModel} from "../../models/GalleryItemModel";
import classes from "./GalleryItem.module.scss";
import {Link} from "react-router-dom";

const GalleryItem = (props: GalleryItemModel) => {
    return (
        <Link to={`/projects/${props.shortTitle}`} className={classes.project}>
            <img className={classes.project__cover} src={props.cover} />
            <div className={classes.project__overlay}>
                <span className={[classes.project_name, classes.overlay_name, 'color-default'].join(' ')}>
                    {props.title}
                </span>
            </div>
        </Link>
    );
};

export default GalleryItem;