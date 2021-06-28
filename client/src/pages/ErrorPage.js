import React from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

import styled from "styled-components";

function ErrorPage() {
  return (
    <Wrapper>
      <Container>
        <h1>404!</h1>
        <h2>Page Not Found</h2>
        <Link to="/">Back To Home</Link>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 100px 50px;
  height: 80vh;
  text-align: center;
`;

export default ErrorPage;
