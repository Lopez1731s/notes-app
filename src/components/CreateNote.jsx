import React, { useState } from "react";

//components
import { Form, FloatingLabel, Button } from "react-bootstrap";
//hooks
import usePostNotes from "../hooks/usePostNotes";

const CreateNote = ({ title, refetch }) => {
  const initialState = {
    title: "",
    text: "",
  };
  const [dataNote, setDataNote] = useState(initialState);

  const { execute } = usePostNotes();

  const handleChange = ({ target }) => {
    setDataNote({
      ...dataNote,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (e) => {
    refetch();
    e.preventDefault();
    execute({ data: dataNote });
    e.target.reset();
  };
  return (
    <>
      <Form className="mt-5" onSubmit={handleSubmit}>
        <h4 className="mb-3">{title}</h4>
        <FloatingLabel controlId="floatingInput" label="Title" className="mb-3">
          <Form.Control
            type="text"
            placeholder="nota aqui"
            name="title"
            onChange={handleChange}
            required
          />
        </FloatingLabel>

        <FloatingLabel controlId="floatingTextarea" label="Message">
          <Form.Control
            as="textarea"
            placeholder="nota aqui"
            style={{ height: "350px" }}
            name="text"
            onChange={handleChange}
            required
          />
        </FloatingLabel>
        <div className="d-grid gap-2 mt-3">
          <Button variant="success" size="lg" type="submit">
            Sent
          </Button>
        </div>
      </Form>
    </>
  );
};

export default CreateNote;
