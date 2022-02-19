import React, { useState } from "react";

import { Modal, Button, Form, Container, Row } from "react-bootstrap";

import useUpdateNote from "../hooks/useUpdateNote";

const UpdateModal = (props) => {
  const [newNote, setNewNote] = useState();

  const { execute } = useUpdateNote();

  const handleChange = ({ target }) => {
    setNewNote({
      ...newNote,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const note = {
      id: props.idNote,
      title: newNote.title || props.title,
      text: newNote.text|| props.text,
    };
    execute({ data: { note } });
    props.refetch();
    props.onHide();
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Update Form
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput2"
              >
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={props.title}
                  name="title"
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Example textarea</Form.Label>
                <Form.Control
                  as="textarea"
                  style={{ height: "250px" }}
                  defaultValue={props.text}
                  name="text"
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" type="submit">
            Save
          </Button>
          <Button variant="secondary" onClick={props.onHide}>
            Cancel
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default UpdateModal;
