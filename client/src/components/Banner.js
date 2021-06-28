import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";

function Banner({ image, title, content, logo = null }) {
  return (
    <Wrapper>
      <div className="banner">
        <img src={image} alt="Main Banner" />
        <Container className="centered">
          <h1>
            {title} {logo}
          </h1>
          <div>{content}</div>
        </Container>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .banner {
    height: 100vh;
    max-height: 100vh;
    position: relative;
    text-align: center;
    color: white;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }

    .centered {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    h1 {
      font-size: 4rem;
    }

    p {
      font-size: 1.5rem;
    }
  }
`;

export default Banner;
