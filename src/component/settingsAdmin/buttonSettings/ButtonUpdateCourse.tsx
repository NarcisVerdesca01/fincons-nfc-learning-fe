import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CreateLesson from '../lesson/CreateLesson';
import UpdateCourse from '../course/UpdateCourse';


const ButtonUpdateCourse = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Button variant="info" onClick={handleShow} style={{ margin: "0.5em" }}>
                Update <i className="bi bi-person-fill-add"></i>
            </Button>

            <Modal show={show}
                onHide={handleClose}
                keyboard={false}>
                <Modal.Body>
                    <UpdateCourse />
                </Modal.Body>
            </Modal>
        </>
    );
}

export default ButtonUpdateCourse;