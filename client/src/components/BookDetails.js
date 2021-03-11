import React, { useState } from "react";
import { Button } from "react-bootstrap";
import styled from "styled-components";

import { useAuthContext } from "../context/authContext";

import NotificationModal from "./NotificationModal";

function BookDetails({ book }) {
  const { isAuthenticated, user } = useAuthContext();

  const { book_author, for_branch, for_semester, added_by } = book;
  const [show, setShow] = useState(false);
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
      <Button variant="success" onClick={toggleModal}>
        Request for this book
      </Button>
      <NotificationModal
        show={show}
        toggle={toggleModal}
        text="Your request has been sent to the owner"
      />
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
