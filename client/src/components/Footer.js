import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { FiFacebook, FiInstagram, FiLinkedin, FiMail } from "react-icons/fi";
import { Card, Button } from "react-bootstrap";

import mainLogo from "../assets/images/mainLogo.svg";

function Footer() {
  return (
    <Wrapper>
      <Card
        bg="light"
        text="dark"
        className="text-center shadow-sm translucent"
      >
        <Card.Body>
          <Card.Title className="display-5" style={{ fontSize: "1.5rem" }}>
            <Link
              to="/"
              style={{ color: "black" }}
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              <img src={mainLogo} alt="main logo" className="main-ft-logo" />
            </Link>{" "}
            |{" "}
            <Link className="a">
              <FiFacebook />
            </Link>
            <Link className="a">
              <FiInstagram />
            </Link>{" "}
            <Link className="a">
              <FiLinkedin />
            </Link>{" "}
            <Link className="a">
              <FiMail />
            </Link>
          </Card.Title>
          <Card.Text>
            <Link to="/">HOME</Link> | <Link>UPCOMING</Link> |{" "}
            <Link>EVENTS</Link> | <Link>BLOG</Link> <br />
            801 West Georgia Street, Vancouver, BC V6C 1P7 Canada Located at the{" "}
            <br />
            Rosewood Hotel Georgia <br />
          </Card.Text>
          <Button variant="danger">Go somewhere</Button>
        </Card.Body>
        <Card.Footer className="text-muted">
          ©2021 | BookHouse | All rights reserved
        </Card.Footer>
      </Card>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .main-ft-logo {
    height: 30px !important;
  }

  .a {
    color: #343a40;
  }

  a:hover {
    // opacity: 0.8;
    color: #7e201e;
    transition: all 0.1s;
    transition-duration: 0.1s !important;
  }
`;

export default Footer;
