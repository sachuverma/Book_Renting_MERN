import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function BookLists({ books }) {
  return (
    <div>
      <div className="pt-4 pb-5">
        <h2 className="mb-3"> RESULTS</h2>
        <Row>
          {books.map((book) => (
            <Col xs={12} sm={6} md={4} lg={3} key={book._id}>
              <Card className="zoom">
                <Card.Body>
                  <Card.Title>
                    <Link to={`/books/${book._id}`}>{book.book_name}</Link>
                  </Card.Title>
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
    </div>
  );
}

export default BookLists;
