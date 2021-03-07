import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { useAuthContext } from "../context/authContext";

import RegisterModal from "./RegisterModal";
import LoginModal from "./LoginModal";

function NavBar() {
  const { isAuthenticated, clearErrors, user, logout } = useAuthContext();

  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const toggleRegister = () => {
    clearErrors();
    setShowRegister(() => !showRegister);
  };

  const toggleLogin = () => {
    clearErrors();
    setShowLogin(() => !showLogin);
  };

  return (
    <>
      <Wrapper>
        <Navbar
          expand="lg"
          variant="dark"
          fixed="top"
          className="shadow-sm translucent"
        >
          <Container>
            <Navbar.Brand>
              <Link className="nav-links" to="/">
                BOOK RENT
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Link className="nav-links" to="/search">
                  Search
                </Link>
                {isAuthenticated && (
                  <Link className="nav-links" to="/buysell">
                    Old Books
                  </Link>
                )}
              </Nav>
              <Nav>
                {isAuthenticated ? (
                  <>
                    <Link className="nav-links welcome" to="#">
                      <span className="">Welcome, </span>
                      {user.name}
                    </Link>
                    <Link className="nav-links" to="#" onClick={logout}>
                      Logout
                    </Link>
                  </>
                ) : (
                  <>
                    <Link className="nav-links" to="#" onClick={toggleLogin}>
                      Login
                    </Link>
                    <Link className="nav-links" to="#" onClick={toggleRegister}>
                      Register
                    </Link>
                  </>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Wrapper>
      <RegisterModal show={showRegister} toggle={toggleRegister} />
      <LoginModal show={showLogin} toggle={toggleLogin} />
    </>
  );
}

const Wrapper = styled.div`
  .welcome:hover {
    cursor: text;
  }
  .translucent {
    background-color: rgba(0, 0, 0, 0.7);
  }
  .nav-links {
    margin: 0 4px;
  }
  a {
    color: #f3f3f3;
  }
  a:hover {
    opacity: 0.8;
  }
`;

export default NavBar;
