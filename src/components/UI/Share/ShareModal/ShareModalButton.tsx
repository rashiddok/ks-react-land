import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IconDefinition} from "@fortawesome/free-solid-svg-icons";

type ComponentProps = {
    url: string;
    text: string;
    icon: IconDefinition;
    iconSize: any;
    iconClass: string;
}

const ShareModalButton = ({url, text, icon,iconClass, iconSize}: ComponentProps) => {

    function shareItemClick(shareUrl: string){
        window.open(shareUrl)
    }

    return (
        <a role="button" className="share__link" onClick={()=>shareItemClick(url)}>
            <FontAwesomeIcon icon={icon} size={iconSize} className={iconClass}/>
            <span>{text}</span>
        </a>
    );
};

export default ShareModalButton;