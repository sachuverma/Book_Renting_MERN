import React, { useEffect } from "react";
import { Button, Row, Col } from "react-bootstrap";
import { FaSortAmountDownAlt } from "react-icons/fa";

import styled from "styled-components";

import book1 from "../assets/images/books1.jpg";
import WindowImg from "../assets/images/window.jpg";

import Banner from "../components/Banner";

const HomePage = () => {
  useEffect(() => {
    console.log(window);
  }, []);

  return (
    <Wrapper>
      <Banner image={book1} title="Book House" content={BannerContent} />
      <br />
      <div id="guide"></div>
      <h1>Tricks That Will Help You Read More</h1> <hr />
      <Row className="row2">
        <Col xs={5} className="window1">
          <img src={WindowImg} alt="window" />
        </Col>
        <Col xs={7} className="window2">
          {GuidLines}
        </Col>
      </Row>
    </Wrapper>
  );
};

const BannerContent = (
  <div>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam, debitis.
      Vero odit, dolorem molestiae nesciunt cumque fugiat, in iusto natus a
      laboriosam dignissimos corporis autem distinctio harum aliquam, quo
      debitis!
    </p>
    <a href="#guide">
      <Button>
        Guide To Reading <FaSortAmountDownAlt />
      </Button>
    </a>
  </div>
);

const GuidLines = (
  <ul>
    <li>Carry your book(s) everywhere.</li>
    <p>
      There's always an opportunity to read. Maybe at the DMV or before a
      business meeting. Whenever you have a moment, you can break out your book
      and read. Especially if you like to read digital versions. I still prefer
      hard copy.
    </p>

    <li>Keep a list.</li>
    <p>
      There’s a sense of fulfillment and motivation tracking the books you’ve
      read. You’ll always be able to reference the list or provide
      recommendations, and will be inspired by the compounding effect reading
      has.
    </p>

    <li>Listen to books.</li>
    <p>
      This might fall into the reading loophole, but my buddy practices this
      strategy all of the time. He commutes about 40 minutes in the morning and
      40 minutes at night. He has a subscription to Audible, and listens to
      books online. He puts the speed up on the readings too, to listen (“read”)
      even faster.{" "}
    </p>

    <li>Prioritize.</li>
    <p>
      If you want to read more, reading has to become a priority. It has to take
      precedence over watching Netflix, scrolling through Instagram or making
      snaps. We all have the same 24 hours. Some of us just know how to maximize
      every second.{" "}
    </p>

    <li>Read in sprints.</li>
    <p>
      Some days my attention span is less than others. During these days, I set
      20-minute timers and read in 20-minute sprints. This helps me not get too
      burnt out, and allows me to feed my wandering mind after a dedicated
      sprint (where I may spend five to 10 minutes doing something else).{" "}
    </p>
  </ul>
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
    padding: 2vw 7vw;
    height: 100%;
    overflow: hidden;
    text-align: left;
  }
`;

export default HomePage;
