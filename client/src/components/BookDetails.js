import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import styled from "styled-components";

import { useAuthContext } from "../context/authContext";

import NotificationModal from "./NotificationModal";

function BookDetails({ book }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { isAuthenticated, user } = useAuthContext();

  const { book_author, for_branch, for_semester, added_by, description } = book;
  const [show, setShow] = useState(false);
  const [sold, setSold] = useState(false);
  const [text, setText] = useState("");

  const notificationModal = (text, toggleSold = true) => {
    setShow(true);
    setText(text);
    if (toggleSold) {
      setSold((prev) => !prev);
    }
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
        {description && (
          <div>
            Description, <i>{description}</i>
          </div>
        )}
      </div>
      <br />
      <div>
        {added_by && (
          <span>
            Sold By, <i>{added_by.name ? added_by.name : "Harsh Kumar"}</i>
          </span>
        )}
      </div>{" "}
      <div>
        <span>
          Contact Seller, <i>+91 8375839389</i>
        </span>
      </div>{" "}
      <br />
      {!user && (
        <Button variant="success" disabled>
          Login to Request for Book
        </Button>
      )}
      {user ? (
        user._id !== added_by.id ? (
          sold ? (
            <Button variant="danger" disabled>
              Book Sold Out
            </Button>
          ) : (
            <Button
              variant="success"
              onClick={() => notificationModal("Request sent to owner", false)}
            >
              Request for this book
            </Button>
          )
        ) : sold ? (
          <Button
            variant="success"
            onClick={() => notificationModal("Book marked available!")}
          >
            Make Available
          </Button>
        ) : (
          <Button
            variant="danger"
            onClick={() => notificationModal("Book marked sold out!")}
          >
            Mark Sold Out
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
