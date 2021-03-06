import React from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

function ErrorPage() {
  return (
    <Container>
      <h1>404!</h1>
      <h2>Page Not Found</h2>
      <Link to="/">Back To Home</Link>
    </Container>
  );
}

export default ErrorPage;
