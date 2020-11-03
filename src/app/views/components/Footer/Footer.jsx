import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import cx from "classnames";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <Container className={cx(styles.footer, "pt-5 pb-5")}>
      <Row>
        <Col>
          <h3>BookShare</h3>
          <p>A pioneer book lending platform</p>
        </Col>
        <Col>
          <Nav className="flex-column">
            <Nav.Link href="#">Terms and Condition</Nav.Link>
            <Nav.Link href="#">Privacy Policy</Nav.Link>
            <Nav.Link href="#">Report an Issue</Nav.Link>
          </Nav>
        </Col>
        <Col>
          <Nav className="flex-column">
            <Nav.Link href="#">Facebook</Nav.Link>
            <Nav.Link href="#">Twitter</Nav.Link>
            <Nav.Link href="#">Youtube</Nav.Link>
          </Nav>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
