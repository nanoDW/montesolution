import styled from "styled-components";

export const EmailField = styled.p`
  padding: 10px;
  width: 50%;
  border-radius: 2px;
  border: 1px solid #bbb;
  border-color: ${props => (props.validationError ? "#f00" : "#bbb")};
  margin: 20px 0 0;
  opacity: 0.5;
  font-size: 16px;
`;

export const List = styled.ul`
  position: absolute;
  width: 50vw;
  background-color: #eee;
  border: 1px solid #ccc;
  top: 55px;
  left: 25%;
  z-index: 1;
  border-radius: 10px;
  list-style-type: none;
  padding: 20px 0 10px 0;
`;

export const ListElement = styled.li`
  padding: 5px 15px 5px 55px;
  position: relative;
  cursor: pointer;

  &:first-child {
    margin: 20px 0;
  }

  &:first-child::after {
    position: absolute;
    top: -18px;
    left: 35px;
    font-family: "Roboto", sans-serif;
    font-weight: 900;
    content: "Me";
    padding: 0;
    font-size: 16px;
    color: #bbb;
  }

  &:first-child::before {
    position: absolute;
    top: 8px;
    left: 10px;
    font-family: "Font Awesome\ 5 Free";
    font-weight: 900;
    content: "\f00c";
    padding: 0;
    font-size: 12px;
    transform: rotate(-15deg);
  }

  &:nth-child(2)::after {
    position: absolute;
    top: -18px;
    left: 35px;
    font-family: "Roboto", sans-serif;
    font-weight: 900;
    content: "Others";
    padding: 0;
    font-size: 16px;
    color: #bbb;
  }

  &:hover {
    background-color: #38f;
    color: #fff;
  }
`;

export const Container = styled.div`
  padding: 10px;
  height: 40px;
  width: 50%;
  border-radius: 2px;
  border: 1px solid #ccc;
  margin: 20px 20% 0 0;
  opacity: 0.5;
  font-size: 16px;
  position: relative;
  cursor: pointer;
`;
