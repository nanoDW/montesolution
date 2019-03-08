import React from "react";
import styled from "styled-components";

const H2 = styled.h2`
  font-weight: 400;
  color: #8acb8e;
  margin: 0 0 20px;
`;

const Div = styled.div`
  width: 80%;
  background-color: #f0fcf3;
  padding: 20px;
  margin: 20px auto;
  box-shadow: 0 0 5px 3px #eee;
`;

export const SuccessEvent = () => {
  return (
    <Div>
      <H2>Success</H2>
      <p>Event has been created.</p>
    </Div>
  );
};
