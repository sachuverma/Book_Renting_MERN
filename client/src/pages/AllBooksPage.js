import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { FaInfoCircle, FaCalendarPlus } from "react-icons/fa";
import styled from "styled-components";

import { useSearchContext } from "../context/searchContext";
import Loading from "../components/Loading";
import BookLists from "../components/BookLists";

function AllBooksPage() {
  const { fetchAllBooks, all_books, loading } = useSearchContext();
  const [books, setBooks] = useState([]);

  useEffect(async () => {
    await fetchAllBooks();
    setBooks(all_books);
    console.log(books);
  }, []);

  useEffect(() => {
    setBooks(all_books);
  }, [all_books]);

  if (loading) {
    return <Loading />;
  }

  return (
    <Wrapper>
      <Container>
        {books.length == 0 ? (
          <div className="pt-5 pb-5">
            <h1>Cannot fetch any book details!</h1>
          </div>
        ) : (
          books && <BookLists books={books} />
        )}
      </Container>
      ;
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .form {
    width: 100%;
  }
  .book-details {
    margin: auto;
  }
  .form-file {
    input {
      margin: auto !important;
      width: auto !important;
    }
  }

  .custom-select {
    color: #fff !important;
    background-color: rgba(255, 255, 255, 0.1) !important;
    border: none !important;
    option {
      color: #636363;
    }
    option:disabled {
      color: #b3b3b3;
    }
  }
  .custom-select:hover {
    cursor: pointer;
  }

  .custom-input {
    color: #fff !important;
    background-color: rgba(255, 255, 255, 0.1) !important;
    border: none !important;
  }

  input::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #d3d3d3;
    opacity: 1; /* Firefox */
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: #d3d3d3;
  }

  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: #d3d3d3;
  }
`;

export default AllBooksPage;
