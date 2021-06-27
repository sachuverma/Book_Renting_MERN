import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  FaUserAlt,
  FaBook,
  FaSearch,
  FaUserPlus,
  FaSignInAlt,
  FaSignOutAlt,
  FaSortAmountDownAlt,
} from "react-icons/fa";

import { useAuthContext } from "../context/authContext";

import RegisterModal from "./RegisterModal";
import LoginModal from "./LoginModal";
import NotificationModal from "./NotificationModal";

function NavBar() {
  const { isAuthenticated, clearErrors, user, logout } = useAuthContext();

  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const [showNotification, setShowNotification] = useState(false);

  const toggleNotification = () => {
    setShowNotification(!showNotification);
  };

  const toggleRegister = () => {
    clearErrors();
    setShowRegister(() => !showRegister);
  };

  const toggleLogin = () => {
    clearErrors();
    setShowLogin(() => !showLogin);
  };

  const logoutHandler = () => {
    <NotificationModal
      show={showNotification}
      toggle={toggleNotification}
      text="You Have Been Logged Out!"
    />;
    logout();
  };

  return (
    <>
      <Wrapper>
        <Navbar
          expand="lg"
          variant="light"
          // fixed="top"
          className="shadow-sm translucent"
        >
          <Container>
            <Navbar.Brand>
              <Link className="nav-links" to="/">
                BOOK HOUSE{" "}
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Link className="nav-links" to="/books">
                  Search <FaSearch />
                </Link>
                {isAuthenticated && (
                  <Link className="nav-links" to="/buysell">
                    Sell Books <FaBook />
                  </Link>
                )}
              </Nav>
              <Nav>
                {isAuthenticated ? (
                  <>
                    <Link className="nav-links welcome mr-2" to="#">
                      <span className="text-muted">Welcome, </span>
                      <FaUserAlt /> {user.name}
                    </Link>
                    <Link className="nav-links" to="#" onClick={logoutHandler}>
                      Logout <FaSignOutAlt />
                    </Link>
                  </>
                ) : (
                  <>
                    <Link className="nav-links" to="#" onClick={toggleLogin}>
                      <FaSignInAlt /> Login
                    </Link>
                    <Link className="nav-links" to="#" onClick={toggleRegister}>
                      Register <FaUserPlus />
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
    background: #f8f9fa;
  }
  .nav-links {
    margin: 0 4px;
  }
  a {
    color: #343a40;
  }
  a:hover {
    // opacity: 0.8;
    color: #7e201e;
    transition: all 0.1s;
    transition-duration: 0.1s !important;
  }
`;

export default NavBar;
