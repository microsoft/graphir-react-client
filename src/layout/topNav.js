import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../logo.svg";

function TopNav() {
  return (
    <Navbar bg="dark" variant="dark" className="mb-4">
      <Container>
        <Navbar.Brand href="/">
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          Graphir React Client
        </Navbar.Brand>
        <Nav className="justify-content-end" activeKey="/patients">
          <Nav.Item>
            <Nav.Link href="/patients">Patients</Nav.Link>            
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/physicians">Physician</Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default TopNav;
