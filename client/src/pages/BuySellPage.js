import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { FaInfoCircle } from "react-icons/fa";
import styled from "styled-components";

import book2 from "../assets/images/books2.jpg";

import { useSearchContext } from "../context/searchContext";
import Loading from "../components/Loading";
import Banner from "../components/Banner";
import BookLists from "../components/BookLists";
import NotificationModal from "../components/NotificationModal";

function BuySellPage() {
  const [data, setData] = useState({
    book_name: "",
    book_author: "",
    for_branch: "",
    for_semester: "1",
  });
  const [file, setFile] = useState(null);

  const [addError, setAddError] = useState("");
  const [showNotification, setShowNotification] = useState(false);

  const toggleNotification = () => {
    setShowNotification(!showNotification);
  };

  const { added_loading, added_books, userAdded, addBook } = useSearchContext();

  const [sellBooks, setSellBooks] = useState([]);
  useEffect(() => {
    userAdded();
  }, []);

  useEffect(() => {
    setSellBooks(added_books);
  }, [added_books]);

  const handleChange = (e) => {
    setData((prevState) => {
      const newState = { ...prevState };
      newState[e.target.name] = e.target.value;
      return newState;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setAddError("");

    if (!file) {
      setAddError("Add Book Image");
      return;
    } else if (file.size > 1000000) {
      setAddError("Use Images less than 1MB");
      return;
    } else if (
      !data.book_name ||
      !data.book_author ||
      !data.for_branch ||
      !data.for_semester
    ) {
      setAddError("Add All Details");
      return;
    }

    await addBook(data, file);
    toggleNotification();
    setData({
      book_name: "",
      book_author: "",
      for_branch: "",
      for_semester: "1",
    });
    setFile(null);
  };

  const onFileChange = (e) => {
    setFile(e.target.files[0]);
    console.log(e.target.files[0]);
  };

  const Content = (
    <Row className="pt-5">
      <Form
        onSubmit={handleSubmit}
        className="form"
        encType="multipart/form-data"
      >
        <Col className="image">
          <Form.Group>
            <Form.File
              id="exampleFormControlFile1"
              label="Upload Book Image"
              onChange={onFileChange}
              style={{ margin: "auto" }}
            />
            {file ? (
              <div>
                <h5>File Name: {file.name}</h5>
                <h5>Last Modified: {file.lastModifiedDate.toDateString()}</h5>
              </div>
            ) : (
              <h5>Choose before Pressing the Upload button</h5>
            )}
            <hr />
          </Form.Group>
        </Col>
        <Col md={6} className="book-details">
          {addError !== "" && (
            <Alert variant="danger">
              <FaInfoCircle /> {addError}
            </Alert>
          )}
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Control
              type="text"
              className="custom-input"
              placeholder="Enter book name"
              name="book_name"
              value={data.book_name}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput2">
            <Form.Control
              type="text"
              className="custom-input"
              placeholder="Enter book author name"
              name="book_author"
              value={data.book_author}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput3">
            <Form.Control
              type="text"
              className="custom-input"
              placeholder="Enter branches names"
              name="for_branch"
              value={data.for_branch}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect2">
            <Form.Control
              as="select"
              className="custom-select"
              name="for_semester"
              onChange={handleChange}
            >
              <option default disabled>
                select semester
              </option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
            </Form.Control>
          </Form.Group>
          <Button variant="success" type="submit">
            Add Book
          </Button>
        </Col>
      </Form>
    </Row>
  );

  if (added_loading) {
    return <Loading />;
  }

  return (
    <Wrapper>
      <Banner
        image={book2}
        title="Add a New Book to Database"
        content={Content}
      />
      <Container>
        {sellBooks.length == 0 ? (
          <div className="pt-5 pb-5">
            <h1>You haven't added any book to our database</h1>
          </div>
        ) : (
          <BookLists books={sellBooks} />
        )}
      </Container>
      <NotificationModal
        show={showNotification}
        toggle={toggleNotification}
        text="Book details added to our database"
      />
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

export default BuySellPage;
