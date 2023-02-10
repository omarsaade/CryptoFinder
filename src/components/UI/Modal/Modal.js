import React, { Fragment } from 'react'
import classes from './Modal.module.css';
import ReactDOM from 'react-dom';


//5alfye sawda
const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onClose}></div>
};


// li fia el cart 
const ModalOverlay = (props) => {
    return <div className={classes.modal}>
        <div className={classes.content}>
            {props.children}
        </div>
    </div>
};


const portalElement = document.getElementById('overlays');


function Modal(props) {
    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
        </Fragment>
    )
}

export default Modal