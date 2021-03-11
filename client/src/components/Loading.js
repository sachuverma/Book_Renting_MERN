import React from "react";
import styled from "styled-components";

const Loading = () => {
  return (
    <Wrapper style={{ minHeight: "calc(100vh)", paddingTop: "100px" }}>
      <div className="loading"></div>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default Loading;
