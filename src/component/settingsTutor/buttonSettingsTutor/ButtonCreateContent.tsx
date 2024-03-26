import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CreateContent from '../createContentTutor/CreateContent';

const ButtonCreateContent = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <button
                className={`buttonModalCreate`}
                onClick={handleShow}
                style={{ margin: "0.5em" }}>
                <span className={`frontCreate`}>Content <i className="bi bi-plus-circle"></i></span>
            </button>

            <Modal show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}>
                <Modal.Body>
                    <CreateContent/>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default ButtonCreateContent;