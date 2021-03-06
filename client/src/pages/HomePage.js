import React from "react";
import { Button } from "react-bootstrap";
import styled from "styled-components";

import book1 from "../assets/images/books1.jpg";

import Banner from "../components/Banner";

function HomePage() {
  return (
    <Wrapper>
      <Banner image={book1} title="Home Page" content={Content} />
    </Wrapper>
  );
}

const Content = (
  <div>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam, debitis.
      Vero odit, dolorem molestiae nesciunt cumque fugiat, in iusto natus a
      laboriosam dignissimos corporis autem distinctio harum aliquam, quo
      debitis!
    </p>
    <Button>Getting Started</Button>
  </div>
);

const Wrapper = styled.div``;

export default HomePage;
