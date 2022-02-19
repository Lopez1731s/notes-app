import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CreateNote from "../components/CreateNote";
import Notes from "../components/Notes";

//hooks
import useNotes from "../hooks/useNotes";

const New = () => {
  const { data, loading, error, refetch } = useNotes(
    "https://api.m3o.com/v1/notes/List"
  );
  return (
    <Container className="mt-5">
      <Row>
        <Col xs={12} md={6} lg={4}>
          <CreateNote title={"Add note"} refetch={refetch} />
        </Col>
        <Col xs={12} md={6} lg={8}>
          <Notes
            data={data}
            loading={loading}
            error={error}
            refetch={refetch}
            size={6}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default New;
