import React from "react";
import { FiFacebook, FiInstagram, FiLinkedin, FiMail } from "react-icons/fi";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <Card bg="light" text="dark" className="text-center shadow-sm translucent">
      <Card.Body>
        <Card.Title className="display-5" style={{ fontSize: "1.5rem" }}>
          <Link
            to="/"
            style={{ color: "black" }}
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            Book House
          </Link>{" "}
          |{" "}
          <Link>
            <FiFacebook />
          </Link>
          <Link>
            <FiInstagram />
          </Link>{" "}
          <Link>
            <FiLinkedin />
          </Link>{" "}
          <Link>
            <FiMail />
          </Link>
        </Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
      <Card.Footer className="text-muted">
        ©2021 | BookHouse | All rights reserved
      </Card.Footer>
    </Card>
  );
}

export default Footer;
