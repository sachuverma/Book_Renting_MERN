import React from "react";
import { Card, Button } from "react-bootstrap";

function Footer() {
  return (
    <Card bg="light" text="dark" className="text-center shadow-sm translucent">
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
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
