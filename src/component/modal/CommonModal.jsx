import React from "react";
import { Modal, Button } from "react-bootstrap";

function CommonModal(props){
    const {show, handleClose, headerMessage, footerEvent, footerMessage} = props;
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{headerMessage}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {props.children}
            </Modal.Body>
            {
                footerEvent && (
                    <Modal.Footer>
                        <Button variant="primary" onClick={footerEvent}>
                            {footerMessage}
                        </Button>
                    </Modal.Footer>
                )
            }
        </Modal>
    );
}

export default CommonModal;