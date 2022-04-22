import React, {useState} from 'react';
import classes from './Modal.module.scss'

type ComponentProps = {
    children: any,
    setVisible: (...args: any) => void;
}

const Modal = ({children,setVisible}: ComponentProps) => {
    return (
        <div className={classes.modal} onClick={()=>setVisible(false)}>
            <div className={classes.modal__content} onClick={(e) => e.stopPropagation()}>
            {
                children
            }
            </div>
        </div>
    );
};

export default Modal;