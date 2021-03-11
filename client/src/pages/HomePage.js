import React, { useEffect } from "react";
import { Button, Row, Col } from "react-bootstrap";
import styled from "styled-components";

import book1 from "../assets/images/books1.jpg";
import window from "../assets/images/window.jpg";

import Banner from "../components/Banner";

const HomePage = () => {
  useEffect(() => {
    console.log(window);
  }, []);

  return (
    <Wrapper>
      <Banner image={book1} title="Home Page" content={Content} />
      <br />
      <h1>LoremIpsum</h1> <hr />
      <Row className="row2">
        <Col xs={5} className="window1">
          <img src={window} alt="window" />
        </Col>
        <Col xs={7} className="window2">
          <h2>STEPS</h2>
          <hr />
          <ul>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis,
            </li>
            <li>
              architecto? Lorem ipsum dolor sit amet consectetur, adipisicing
              elit.
            </li>
            <li>
              Quasi ipsum modi alias? Lorem ipsum dolor sit amet consectetur,
            </li>
            <li>
              adipisicing elit. Lorem ipsum dolor sit amet consectetur,
              adipisicing
            </li>
            <li>
              elit. Quasi ipsum modi alias? Lorem ipsum dolor sit amet
              consectetur,
            </li>
            <li>
              ipsum modi alias? Lorem ipsum dolor sit amet, ipsum modi alias?
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis,
            </li>
            <li>
              architecto? Lorem ipsum dolor sit amet consectetur, adipisicing
              elit.
            </li>
            <li>
              Quasi ipsum modi alias? Lorem ipsum dolor sit amet consectetur,
            </li>
            <li>
              adipisicing elit. Lorem ipsum dolor sit amet consectetur,
              adipisicing
            </li>
            <li>
              elit. Quasi ipsum modi alias? Lorem ipsum dolor sit amet
              consectetur,
            </li>
            <li>
              ipsum modi alias? Lorem ipsum dolor sit amet, ipsum modi alias?
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis,
            </li>
          </ul>
        </Col>
      </Row>
    </Wrapper>
  );
};

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

const Wrapper = styled.div`
  text-align: center;
  .row2 {
    height: 80vh !important;
    width: 100vw;
  }
  .window1 {
    padding-right: 0;
    height: 100%;
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      border-radius: 0px 50px 50px 0;
    }
  }
  .window2 {
    padding: 7vw;
    height: 100%;
    overflow: hidden;
    text-align: left;
  }
`;

export default HomePage;
