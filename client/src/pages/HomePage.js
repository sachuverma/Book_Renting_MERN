import React, { useEffect } from "react";
import { Button, Row, Col, Container } from "react-bootstrap";
import { FaSortAmountDownAlt } from "react-icons/fa";

import styled from "styled-components";

import book1 from "../assets/images/books1.jpg";
import WindowImg from "../assets/images/window.jpg";

import girl1 from "../assets/images/girl1.svg";
import girl2 from "../assets/images/girl2.svg";
import girl3 from "../assets/images/girl3.svg";

import logo1 from "../assets/images/logo1.svg";
import logo2 from "../assets/images/logo2.svg";
import logo3 from "../assets/images/logo3.svg";
import logo4 from "../assets/images/logo4.svg";

import Banner from "../components/Banner";

const HomePage = () => {
  useEffect(() => {
    console.log(window);
  }, []);

  return (
    <Wrapper>
      <Banner image={book1} title="Book House" content={BannerContent} />
      <br />
      <div>{LogoTexts}</div>
      <div id="guide"></div>
      <h1>Tricks That Will Help You Read More</h1> <hr />
      <Row className="row2 mb-5">
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
    <Container style={{ maxWidth: "80vw" }}>
      <Row>
        <Col sm={5}>
          <img
            src={girl1}
            alt="girl logo"
            style={{ width: "100%", height: "100%" }}
          />
        </Col>
        <Col sm={2}></Col>
        <Col sm={5}>
          <img
            src={girl3}
            alt="girl logo"
            style={{ width: "100%", height: "100%" }}
          />
        </Col>
      </Row>
    </Container>
    <br /> <br />
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

const LogoTexts = (
  <Container className="my-5">
    <Row className="py-2">
      <Col>
        <img src={logo1} alt="logo1" style={{ maxWidth: "100%" }} />
      </Col>
      <Col xs={8}>
        <div className="display-4">Heading One</div>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam,
          delectus repudiandae. Nesciunt, aliquam. Optio veniam architecto, quod
          error tempore enim libero delectus, laudantium voluptate assumenda
          consequuntur recusandae quibusdam sunt magni.
        </p>
      </Col>
    </Row>
    <Row className="py-2">
      <Col xs={8}>
        <div className="display-4">Heading Two</div>
        <p>
          Saepe non commodi distinctio ab enim consectetur consequatur in hic
          sequi dignissimos ratione fugit ex quaerat neque expedita aliquam
          perferendis optio quis id. Numquam exercitationem consequuntur odio
          minima iste? Cupiditate, nobis natus? Modi, adipisci consectetur?
          Quod, laborum dolore sequi reiciendis officiis facere quis dignissimos
          expedita!
        </p>
      </Col>
      <Col>
        <img src={logo2} alt="logo2" style={{ maxWidth: "100%" }} />
      </Col>
    </Row>
    <Row className="py-2">
      <Col>
        <img src={logo3} alt="logo1" style={{ maxWidth: "100%" }} />
      </Col>
      <Col xs={8}>
        <div className="display-4">Heading Three</div>
        <p>
          Itaque ad saepe obcaecati quidem iusto, beatae illum non iure dolore
          dolorem voluptatibus, similique rem consequuntur repudiandae quod
          ipsum accusantium omnis exercitationem pariatur perspiciatis facere
          porro quam aliquam ipsam. Adipisci, consequatur officiis nesciunt
          cumque at cupiditate amet
        </p>
      </Col>
    </Row>
    <Row className="py-2">
      <Col xs={8}>
        <div className="display-4">Heading Four</div>
        <p>
          Aliquam praesentium sit autem dolore voluptatibus eligendi ut et illo
          eius facilis fuga saepe magnam labore animi temporibus harum
          reprehenderit natus, esse cupiditate vel. Sit quae modi commodi
          doloribus autem a est ut ex enim praesentium natus esse. Aliquam
          maiores in explicabo magnam omnis cum exercitationem ullam dolor
          tempore libero porro voluptatum excepturi aperiam, voluptatem optio
          quos quibusdam mollitia error commodi maxime iste? Nobis ipsam quam
          illum nihil, earum, animi facere ex rerum nemo fuga fugiat cupiditate
          aperiam quasi?
        </p>
      </Col>
      <Col>
        <img src={logo4} alt="logo2" style={{ maxWidth: "100%" }} />
      </Col>
    </Row>
  </Container>
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
