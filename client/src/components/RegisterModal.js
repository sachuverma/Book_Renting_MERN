import React, { useState, useEffect } from "react";
import { Modal, Button, Form, Alert } from "react-bootstrap";
import { FaInfoCircle } from "react-icons/fa";
import styled from "styled-components";

import { useAuthContext } from "../context/authContext";

function RegisterModal({ show, toggle }) {
  const { register, isAuthenticated, err_msg, err_id } = useAuthContext();

  const [error, setError] = useState("");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    roll_number: "",
    branch: "",
    college: "",
    year_of_admission: "",
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

    await register(data);
    console.log("end submit");
  };

  useEffect(() => {
    if (err_id === "REGISTER_FAIL") setError(err_msg);
    else setError("");
  }, [err_msg]);

  useEffect(() => {
    if (isAuthenticated && show) {
      setData({
        name: "",
        email: "",
        password: "",
        roll_number: "",
        branch: "",
        college: "",
        year_of_admission: "",
      });
      toggle();
    }
  }, [isAuthenticated]);

  return (
    <Wrapper>
      <Modal show={show} onHide={toggle} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>
        <Form>
          <Modal.Body>
            {error && (
              <Alert variant="danger">
                <FaInfoCircle /> {error}{" "}
              </Alert>
            )}

            <Form.Group controlId="formBasicName">
              {/* <Form.Label>Name</Form.Label> */}
              <Form.Control
                required
                value={data.name}
                onChange={handleChange}
                type="text"
                name="name"
                placeholder="Name"
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              {/* <Form.Label>Email address</Form.Label> */}
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
              {/* <Form.Label>Password</Form.Label> */}
              <Form.Control
                required
                value={data.password}
                onChange={handleChange}
                type="password"
                name="password"
                placeholder="Password"
              />
            </Form.Group>
            <Form.Group controlId="formBasicRollNumber">
              {/* <Form.Label>Roll Number</Form.Label> */}
              <Form.Control
                required
                value={data.roll_number}
                onChange={handleChange}
                type="text"
                name="roll_number"
                placeholder="Roll Number"
              />
            </Form.Group>
            <Form.Group controlId="formBasicBranch">
              {/* <Form.Label>Branch</Form.Label> */}
              <Form.Control
                required
                value={data.branch}
                onChange={handleChange}
                type="text"
                name="branch"
                placeholder="Branch"
              />
            </Form.Group>
            <Form.Group controlId="formBasicCollege">
              {/* <Form.Label>College Name</Form.Label> */}
              <Form.Control
                required
                value={data.college}
                onChange={handleChange}
                type="text"
                name="college"
                placeholder="College Name"
              />
            </Form.Group>
            <Form.Group controlId="formBasicYear">
              {/* <Form.Label>Year</Form.Label> */}
              <Form.Control
                required
                value={data.year_of_admission}
                onChange={handleChange}
                type="text"
                name="year_of_admission"
                placeholder="Year of Admission"
              />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                name="terms"
                label="Remember Me"
                required
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={toggle}>
              Close
            </Button>
            <Button variant="success" onClick={handleSubmit}>
              Register
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

export default RegisterModal;
