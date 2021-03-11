import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";

function BookLists({ books }) {
  return (
    <Wrapper>
      <div className="pt-4 pb-5">
        <h2 className="mb-3"> RESULTS</h2>
        <Row>
          {books.map((book) => (
            <Col xs={12} sm={6} md={4} lg={3} key={book._id}>
              <Card className="zoom">
                <Card.Body className="card-content">
                  <img src={book.image_url} alt={book.book_name} width="100%" />
                  <Card.Title className="card-head">
                    <Link to={`/books/${book._id}`}>{book.book_name}</Link>
                  </Card.Title>
                  <Card.Text className="card-text">
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
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .card-content {
    padding: 0;

    .card-head {
      padding: 1.2rem 1.2rem 0 1.2rem;
    }
    .card-text {
      padding: 0rem 1.2rem 1.2rem 1.2rem;
    }
  }
`;

export default BookLists;
