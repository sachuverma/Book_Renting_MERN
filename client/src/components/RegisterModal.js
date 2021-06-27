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

  const validateEmail = (email) => {
    if(email.length === 0 || email === " " || email === undefined || email === "") return false;
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  const validateAlpha = (text) => {
    if(text.length === 0 || text === " " || text === undefined || text === "") return false;
    const re = /^[a-zA-Z ]*$/;
    return re.test(text);
  }

  const validateAlphaNum = (roll) => {
    if(roll.length === 0 || roll === " " || roll === undefined || roll === "") return false;
    const re = /^[a-zA-Z0-9]*$/;
    return re.test(roll);
  }

  const validateYear = (year) => {
    if(year.length === 0 || year === " " || year === undefined || year === "") return false;
    const re = /^20\d{2}$/
    if(!re.test(year)) return false;
    return year >= 2018 && year <= 2021;
  }

  const validatePassword = (password) => {
    const re = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    return re.test(password)
  }

  const validateFields = () => {
    let valid = true;
    
    valid = validateAlpha(data.name);
    console.log('validate name', valid);
    if(!valid) {
      setError('Name should be alphabets only')
      return false;
    }

    valid = validateEmail(data.email);
    console.log('validate email', valid);
    if(!valid) {
      setError('Email format should be, \'xxx@xxx.xxx\'')
      return false;
    }

    valid = validatePassword(data.password);
    console.log('validate password', valid);
    if(!valid) {
      setError('Use correct password format!')
      return false;
    }

    valid = validateAlphaNum(data.roll_number);
    console.log('validate roll number', valid);
    if(!valid) {
      setError('Roll No should be alpha num only')
      return false;
    }

    valid = validateAlpha(data.branch);
    console.log('validate branch', valid);
    if(!valid) {
      setError('Branch name should be alphabets only')
      return false;
    }

    valid = validateAlpha(data.college);
    console.log('validate college', valid);
    if(!valid) {
      setError('College name should be alphabets only')
      return false;
    }

    valid = validateYear(data.year_of_admission);
    console.log('validate year', valid);
    if(!valid) {
      setError('Year should be between 2018 - 2021')
      return false;
    }

    return true;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    console.log("form values", data);

    if(!validateFields()){
      console.log('form fields not valid!');
      return;
    }

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
              <Form.Text className="text-muted">
                Minimum 6-16 characters, atleast 1 special character and 1 number
              </Form.Text>
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
              <Form.Text className="text-muted">
                2018 - 2021
              </Form.Text>
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
