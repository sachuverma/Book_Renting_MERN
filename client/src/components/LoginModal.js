import React, { useState, useEffect } from "react";
import { Modal, Button, Form, Alert } from "react-bootstrap";
import { FaInfoCircle } from "react-icons/fa";
import styled from "styled-components";

import { useAuthContext } from "../context/authContext";

function LoginModal({ show, toggle }) {
  const { login, isAuthenticated, err_msg, err_id } = useAuthContext();

  const [error, setError] = useState("");
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setData((prevState) => {
      const newState = { ...prevState };
      newState[e.target.name] = e.target.value;
      return newState;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("form values", data);

    await login(data);
    console.log("end login form");
  };

  useEffect(() => {
    if (err_id === "LOGIN_FAIL") setError(err_msg);
    else setError("");
  }, [err_msg]);

  useEffect(() => {
    if (isAuthenticated && show) {
      setData({
        email: "",
        password: "",
      });
      toggle();
    }
  }, [isAuthenticated]);

  return (
    <Wrapper>
      <Modal show={show} onHide={toggle} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Form>
          <Modal.Body>
            {error && (
              <Alert variant="danger">
                <FaInfoCircle /> {error}{" "}
              </Alert>
            )}
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                required
                value={data.email}
                onChange={handleChange}
                type="email"
                name="email"
                placeholder="Enter email"
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Control
                required
                value={data.password}
                onChange={handleChange}
                type="password"
                name="password"
                placeholder="Password"
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={toggle}>
              Close
            </Button>
            <Button variant="success" onClick={handleSubmit}>
              Login
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

export default LoginModal;
