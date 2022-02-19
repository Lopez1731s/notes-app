import React from "react";
import { NavLink } from "react-router-dom";

//components
import { Navbar, Container, Nav } from "react-bootstrap";

const AppBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="mb-3">
      <Container>
        <Navbar.Brand>
          <img
            alt=""
            src="./note.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          Notes App
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />

        <Navbar.Collapse id="navbarScroll" className="justify-content-end">
          <Nav>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              New
            </NavLink>
            <NavLink
              to="/search"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Search
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppBar;
