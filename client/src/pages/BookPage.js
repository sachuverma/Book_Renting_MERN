import React from "react";
import { Button, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import { useParams } from "react-router-dom";

import { useBookDetailsContext } from "../context/bookDetailsContext";

import book2 from "../assets/images/books2.jpg";

import Banner from "../components/Banner";
import BookDetails from "../components/BookDetails";
import Loading from "../components/Loading";

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

  if (book_error)
    return (
      <div style={{ paddingTop: "150px", textAligh: "center" }}>
        <h1>Error</h1>
        <h2>Can't Fetch Book Details</h2>
        <h3>Go Back</h3>
      </div>
    );
  if (loading_book) return <Loading />;

  const Content = (
    <Row>
      <Col className="image" md={6}>
        <img
          src={book_details.image_url}
          alt="Book Images Not Available"
          width="100%"
        />
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
