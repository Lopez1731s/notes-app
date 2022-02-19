import React, { useState } from "react";

//components
import { Row, Col, Card, Form, Button } from "react-bootstrap";
import { MdUpdate, MdDeleteForever } from "react-icons/md";
import UpdateModal from "./UpdateModal";

//hooks
import useDeleteNote from "../hooks/useDeleteNote";

const CardNote = ({ note, refetch, size }) => {
  const [idNote, setIdNote] = useState("");
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const [modalShow, setModalShow] = useState(false);
  const { exect } = useDeleteNote();

  const handleSubmit = (e) => {
    e.preventDefault();
    refetch();
    exect({ data: { id: idNote } });
  };

  return (
    <Col xs={12} md={12} lg={size}>
      <UpdateModal
        show={modalShow} //modalShow, idNote, title, text, refetch, onHide
        idNote={idNote}
        title={title}
        text={text}
        refetch={refetch}
        onHide={() => setModalShow(false)}
      />

      <Form onSubmit={handleSubmit}>
        <Card className="mb-3 shadow-sm p-3 mb-5 bg-white rounded">
          <Card.Body>
            <Row>
              <Col xs="8" lg="8">
                <Card.Title>{note.title}</Card.Title>
              </Col>

              <Col xs="2" md="auto" lg="2">
                <Button variant="link">
                  <MdUpdate
                    size={25}
                    onClick={() => {
                      setModalShow(true);
                      setIdNote(note.id);
                      setTitle(note.title);
                      setText(note.text);
                    }}
                  />
                </Button>
              </Col>
              <Col xs="2" md="auto" lg="2">
                <Button
                  variant="link"
                  type="submit"
                  onClick={() => setIdNote(note.id)}
                >
                  <MdDeleteForever size={25} />
                </Button>
              </Col>
            </Row>
            <Card.Text className="mt-2">{note.text}</Card.Text>

            <hr />
            <Card.Subtitle className="text-muted">
              {new Date(note.updated).toDateString()}
            </Card.Subtitle>
          </Card.Body>
        </Card>
      </Form>
    </Col>
  );
};

export default CardNote;
