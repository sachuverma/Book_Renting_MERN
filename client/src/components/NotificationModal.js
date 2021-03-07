import React from "react";
import { Modal, Button, Alert } from "react-bootstrap";
import { FaInfoCircle } from "react-icons/fa";
import styled from "styled-components";

function NotificationModal({ show, toggle }) {
  return (
    <Wrapper>
      <Modal show={show} onHide={toggle} keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Body style={{ fontSize: "1.2rem", textAlign: "center" }}>
            <span className="text">
              <FaInfoCircle /> Your request has been sent to the owner
            </span>
          </Modal.Body>
        </Modal.Header>
      </Modal>
    </Wrapper>
  );
}

const Wrapper = styled.div``;
export default NotificationModal;
