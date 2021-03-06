import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";

import book3 from "../assets/images/books3.jpg";

import Banner from "../components/Banner";
import SearchBox from "../components/SearchBox";
import SearchResults from "../components/SearchResults";

function SearchPage() {
  return (
    <Wrapper>
      <Banner image={book3} title="Search Page" content={<SearchBox />} />
      <Container>
        <SearchResults />
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

export default SearchPage;
