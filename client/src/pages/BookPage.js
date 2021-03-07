import React from "react";
import { Button, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import { useParams } from "react-router-dom";

import { useBookDetailsContext } from "../context/bookDetailsContext";

import book2 from "../assets/images/books2.jpg";

import Banner from "../components/Banner";
import BookDetails from "../components/BookDetails";

function BookPage() {
  const { id } = useParams();
  const {
    loading_book,
    book_details,
    book_error,
    searchBookDetails,
  } = useBookDetailsContext();

  React.useEffect(() => {
    searchBookDetails(id);
  }, [id]);

  if (book_error) return <h1>Error</h1>;
  if (loading_book) return <h1>Loading Book....</h1>;

  const Content = (
    <Row>
      <Col className="image" md={6}>
        Book Image Placeholder
      </Col>
      <Col md={6}>
        <BookDetails book={book_details} />
      </Col>
    </Row>
  );

  return (
    <Wrapper>
      <Banner image={book2} title={book_details.book_name} content={Content} />
    </Wrapper>
  );
}

const Wrapper = styled.div``;

export default BookPage;
