import React, { Fragment } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TopNav from "./topNav";

function MainLayout({ children }) {
  return (
    <>
      <TopNav />
      <Container>
        <Row>
          <Col>{children}</Col>
        </Row>
      </Container>
    </>
  );
}

export default MainLayout;
