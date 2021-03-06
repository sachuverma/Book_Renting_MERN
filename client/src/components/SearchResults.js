import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import styled from "styled-components";

import { useSearchContext } from "../context/searchContext";

function SearchResults() {
  const [searchedBooks, setMyBooks] = React.useState([]);
  const { books } = useSearchContext();
  const refContainer = React.useRef(null);

  React.useEffect(() => {
    setMyBooks(books);
    window.scrollBy(0, window.innerHeight);
  }, [books]);

  return (
    <Wrapper>
      <Container>
        {searchedBooks.length == 0 ? (
          <div className="pt-5 pb-5">
            <h1>Search for another book</h1>
          </div>
        ) : (
          <div className="pt-4 pb-5">
            <h2 className="mb-3" ref={refContainer}>
              {" "}
              RESULTS
            </h2>
            <Row>
              {searchedBooks.map((book) => (
                <Col xs={12} sm={6} md={4} lg={3} key={book._id}>
                  <Card className="zoom">
                    <Card.Body>
                      <Card.Title>{book.book_name}</Card.Title>
                      <Card.Text>
                        <span>
                          <strong>Author: </strong>
                          {book.book_author}
                        </span>{" "}
                        <br />
                        <span>
                          <strong>for: </strong>
                          {book.for_branch}, {book.for_semester} sem
                        </span>{" "}
                        <br />
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
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
