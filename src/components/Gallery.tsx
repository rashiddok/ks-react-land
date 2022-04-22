import React, {useEffect, useState} from 'react';
import {useFetching} from "../hooks/useFetching";
import ProjectsService from "../services/projects.service";
import classes from "./Gallery.module.scss";
import GalleryItem from "./GalleryItem/GalleryItem";
import {GalleryItemModel} from "../models/GalleryItemModel";

type ComponentProps = {
    showAllGalleryItems?: boolean
}

const Gallery = ({showAllGalleryItems = true} : ComponentProps) => {
    const [projects, setProjects] = useState<GalleryItemModel[]>([])
    const [getProjects, isLoading, projectError] = useFetching(async ()=>{
        const res = await ProjectsService.getProjects()
        setProjects(res)
    })

    useEffect(()=>{
        getProjects()
    },[])

    function galleryClasses(): string{
        const galleryClasses = [classes.gallery]
        if(!showAllGalleryItems){
            galleryClasses.push(classes.gallery_small)
        }
        return galleryClasses.join(' ')
    }


    return (
        <div className={galleryClasses()}>
            {projects.map(project=>
                <GalleryItem title={project.title} cover={project.cover} shortTitle={project.shortTitle} key={project.shortTitle}></GalleryItem>
            )}
        </div>
    );
};

export default Gallery;