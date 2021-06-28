import React, { useState } from "react";
import styled from "styled-components";
import {
  Container,
  Row,
  Col,
  FormControl,
  InputGroup,
  Form,
  Button,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { ImSpinner8 } from "react-icons/im";

import { useSearchContext } from "../context/searchContext";

function SearchBox() {
  const { handleSearch, loading } = useSearchContext();
  const [search, setSearch] = useState("");
  const [field, setField] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    window.scrollBy(0, 2 * window.innerHeight);
    if (!search || !field) return;
    console.log("handle submit");
    handleSearch(field, search);
  };

  return (
    <Wrapper>
      <Container>
        <Row>
          <Col sm={2}></Col>
          <Col sm={8}>
            <InputGroup className="mb-3">
              <FormControl
                as="select"
                className="select-drpdwn"
                required
                onChange={(e) => setField(e.target.value)}
              >
                <option value="title" selected disabled>
                  Search By
                </option>
                <option value="book_title">Book Title</option>
                <option value="book_author">Book Author</option>
                <option value="for_branch">Branch</option>
                <option value="for_semester">Semester</option>
              </FormControl>

              <FormControl
                className="search-input"
                placeholder="Search for book you need..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                required
              />
              <InputGroup.Append>
                <Button
                  type="submit"
                  variant="success"
                  onClick={handleSubmit}
                  disabled={loading || field === ""}
                >
                  Search{" "}
                  {!loading ? (
                    <FaSearch />
                  ) : (
                    <ImSpinner8 className="icon-spin" />
                  )}
                </Button>
              </InputGroup.Append>
            </InputGroup>
          </Col>
          <Col sm={2}></Col>
        </Row>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .select-drpdwn {
    max-width: 25%;

    border: none !important;
    option {
      color: #636363;
    }
    option:disabled {
      color: #b3b3b3;
    }
  }
  .select-drpdwn:hover {
    cursor: pointer;
  }

  .search-input {
    border: none !important;
  }

  input::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */

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
export default SearchBox;
