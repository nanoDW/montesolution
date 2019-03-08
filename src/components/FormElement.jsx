import React from "react";
import styled from "styled-components";

const H2 = styled.h2`
  display: block;
  width: 100%;
  font-weight: 400;
  color: #355990;
  margin-bottom: 20px;
`;

const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
  background-color: #fff;
  width: 80vw;
  margin: 40px auto;
  padding: 20px 5% 30px;
  position: relative;
  border-radius: 5px;
  box-shadow: 0 0 5px 3px #eee;

  &::before {
    content: "";
    position: absolute;
    top: 60px;
    left: 5%;
    width: 90%;
    height: 1px;
    background-color: #ddd;
  }
`;

export const FormElement = ({ header, children }) => {
  return (
    <Section>
      <H2>{header}</H2>
      {children}
    </Section>
  );
};
