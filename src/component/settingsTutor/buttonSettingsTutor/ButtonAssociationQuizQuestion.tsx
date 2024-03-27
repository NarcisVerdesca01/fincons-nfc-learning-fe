import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import CreateAssociationQuizQuestion from '../associationQuizQuestion/AssociationQuizQuestion';
import '../../settingsAdmin/buttonSettings/StyleModals.css';

const ButtonAssociationQuizQuestion = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return (
        <>
            <button
                className={`buttonDefault buttonModalAssociation`}
                onClick={handleShow}
                style={{ margin: "0.5em" }}
            >
                <span className={`frontDefault frontAssociation`}>Quiz to Question <i className="bi bi-arrows-angle-contract"></i></span>
            </button>

            <Modal show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                scrollable>
                <Modal.Body>
                    <CreateAssociationQuizQuestion />
                </Modal.Body>
            </Modal>
        </>
    );
}

export default ButtonAssociationQuizQuestion;