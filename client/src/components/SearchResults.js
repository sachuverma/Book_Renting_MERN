import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import styled from "styled-components";

import { useSearchContext } from "../context/searchContext";
import BookLists from "./BookLists";
import Loading from "./Loading";

function SearchResults() {
  const [searchedBooks, setMyBooks] = React.useState([]);
  const { loading, books } = useSearchContext();

  React.useEffect(() => {
    setMyBooks(books);
    // window.scrollBy(0, 0);
  }, [books]);

  if (loading) return <Loading />;

  return (
    <Wrapper>
      <Container>
        {searchedBooks.length == 0 ? (
          <div className="pt-5 pb-5">
            <h1>Search for another book</h1>
          </div>
        ) : (
          <BookLists books={searchedBooks} />
        )}
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  text-align: center;
  .zoom:hover {
    transform: scale(1.05);
    cursor: pointer;
  }
`;

export default SearchResults;
