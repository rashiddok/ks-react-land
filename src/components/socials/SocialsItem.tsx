import React from 'react';
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon, Props} from '@fortawesome/react-fontawesome'

type ComponentProps = {
    url: string;
    icon: IconDefinition;
    [iconParams: string]: any | string
}

const SocialsItem = ({url, icon, ...iconParams}: ComponentProps) => {
    return (
        <a target="_blank" href={url}><FontAwesomeIcon icon={icon} {...iconParams}/> </a>
    );
};

export default SocialsItem;