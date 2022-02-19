import React from "react";

//components
import { Card, Col, Placeholder } from "react-bootstrap";

const LoadingMsg = ({ loading }) => {
  return (
    <>
      {loading ? (
        <Col xs={12} md={12} lg={6}>
          <Card style={{ width: "25rem" }}>
            <Card.Body>
              <Placeholder as={Card.Title} animation="glow">
                <Placeholder xs={12} md={12} lg={6} />
              </Placeholder>
              <Placeholder as={Card.Text} animation="glow">
                <Placeholder xs={7} /> <Placeholder xs={4} />{" "}
                <Placeholder xs={4} /> <Placeholder xs={6} />{" "}
                <Placeholder xs={8} />
              </Placeholder>
              <Placeholder.Button variant="primary" xs={6} />
            </Card.Body>
          </Card>
        </Col>
      ) : (
        ""
      )}
    </>
  );
};

export default LoadingMsg;
