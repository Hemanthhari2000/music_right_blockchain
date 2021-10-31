import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

const NavBar = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" style={{ height: "9vh" }}>
        <Container>
          <Navbar.Brand href="/">MusicRight</Navbar.Brand>
          <Nav>
            <Nav.Link href="/">Create</Nav.Link>
            <Nav.Link href="/mine">Mine</Nav.Link>
            <Nav.Link href="/visualize">Visualize</Nav.Link>
            <Nav.Link href="/verify">Verify</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
