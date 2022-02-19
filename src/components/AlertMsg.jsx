import React from "react";

//components
import { Alert, Col } from "react-bootstrap";

const AlertMsg = ({ msg, vari }) => {
  return (
    <Col xs={12} md={12} lg={12} className="mt-2">
      <Alert variant={vari}>{msg}</Alert>
    </Col>
  );
};

export default AlertMsg;
