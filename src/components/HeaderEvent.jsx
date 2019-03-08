import React from "react";
import styled from "styled-components";

const Header = styled.header`
  background-color: #355990;
  padding: 50px 15vw 20px;
  color: white;
  position: relative;

  &::before {
    background-color: #1e3b68;
    position: absolute;
    height: 20px;
    top: 0;
    left: 0;
    content: "";
    width: 100vw;
  }
`;

const H1 = styled.h1`
  font-weight: 100;
  font-size: 38px;
`;

export const HeaderEvent = () => {
  return (
    <Header>
      <H1>New event</H1>
    </Header>
  );
};
