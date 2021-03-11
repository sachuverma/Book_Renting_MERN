import React, { useState } from "react";
import { Button } from "react-bootstrap";
import styled from "styled-components";

import { useAuthContext } from "../context/authContext";

import NotificationModal from "./NotificationModal";

function BookDetails({ book }) {
  const { isAuthenticated, user } = useAuthContext();

  const { book_author, for_branch, for_semester, added_by } = book;
  const [show, setShow] = useState(false);
  const [text, setText] = useState("");

  const openRequestNotification = () => {
    setShow(true);
    setText("Your request has been sent to the owner");
  };

  const openDeleteNotification = () => {
    setShow(true);
    setText("This book is removed form the database");
  };

  const toggleModal = () => {
    setShow(!show);
  };

  return (
    <Wrapper>
      <div>
        By, <strong>{book_author}</strong>
      </div>{" "}
      <br />
      <div>
        Recommended for <br /> <strong>{for_semester}</strong> semester,{" "}
        <strong>{for_branch}</strong> branch students
      </div>{" "}
      <div>
        {added_by && (
          <span>
            Sold By, <i>{added_by.name}</i>
          </span>
        )}
      </div>{" "}
      <br />
      {!user && (
        <Button variant="success" disabled>
          Login to Request for Book
        </Button>
      )}
      {user ? (
        user._id !== added_by.id ? (
          <Button variant="success" onClick={openRequestNotification}>
            Request for this book
          </Button>
        ) : (
          <Button variant="danger" onClick={openDeleteNotification}>
            Book Sold
          </Button>
        )
      ) : null}
      <NotificationModal show={show} toggle={toggleModal} text={text} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  text-align: left;
  div {
    font-size: 1.2rem;
  }
  div span {
    font-weight: bold;
  }
`;

export default BookDetails;
