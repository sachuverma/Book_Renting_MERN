import React from "react";
import { Card, Row, Col, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";

function BookLists({ books }) {
  return (
    <Wrapper>
      <div className="pt-4 pb-5">
        <h2 className="mb-3"> RESULTS</h2>
        <Row>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Book Title</th>
                <th>Author Name</th>
                <th>for branch</th>
                <th>for semester</th>
              </tr>
            </thead>
            <tbody>
              {books.map((book, idx) => (
                <tr>
                  <td>{idx + 1}</td>
                  <td>
                    <Link to={`/books/${book._id}`}>{book.book_name}</Link>
                  </td>
                  <td>{book.book_author}</td>
                  <td>{book.for_branch}</td>
                  <td>{book.for_semester}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Row>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: 80vh;
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
