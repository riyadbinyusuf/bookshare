import React from "react";
import { Container, Row } from "react-bootstrap";

const ContainerWrapper = ({ children }) => {
  return (
    <>
      <Container>
        <Row>{children}</Row>
      </Container>
    </>
  );
};

export default ContainerWrapper;
