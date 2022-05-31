import React, { useState } from 'react'
import { Button, Modal } from "react-bootstrap"
const AddMovie = ({ handleAdd }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [title, setTitle] = useState("");
    const [id, setId] = useState("");
    const [description, setDescription] = useState("");
    const [posterURL, setPosterURL] = useState("");
    const [rating, setRating] = useState(1);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newMovie = {
            id,
            title,
            description,
            posterURL,
            rating,
        };
        handleAdd(newMovie);
    }

    return (
        <div className="adding-movie">
            <Button variant="primary" onClick={handleShow}>
                Add Movie
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Movie</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleSubmit}>
                        ID:
                        <input type="text" className="form-control" placeholder="enter id here" onChange={(e) => setId(e.target.value)} value={id} />
                        TITLE:
                        <input type="text" className="form-control" placeholder="enter title here" onChange={(e) => setTitle(e.target.value)} value={title} />
                        DESCRIPTION:
                        <input type="text" className="form-control" placeholder="enter description here" onChange={(e) => setDescription(e.target.value)} value={description} />
                        POSTERURL:
                        <input type="text" className="form-control" placeholder="enter url here" onChange={(e) => setPosterURL(e.target.value)} value={posterURL} />
                        RATE:
                        <input type="text" className="form-control" placeholder="enter rate here" onChange={(e) => setRating(e.target.value)} value={rating} />
                        <Button variant="primary" type="submit">
                            SUBMIT
                        </Button>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                 
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default AddMovie