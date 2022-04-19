import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShareNodes} from '@fortawesome/free-solid-svg-icons'
import ShareDialog from './ShareDialog'
import './Share.scss'

const Share = (props: any) => {
    return (
        <React.Fragment>
        <button className="share-button">
            <FontAwesomeIcon icon={faShareNodes} size="lg"></FontAwesomeIcon>
        </button>
            <ShareDialog/>
        </React.Fragment>
    );
};

export default Share;