import {
  MiniInput,
  Description,
  InvalidTitle
} from "../components/FormEventStyles";
import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin: 0 auto;
  padding: 5px 30% 0 20%;
  justify-content: space-between;
`;

export const Paragraph = styled.p`
  color: #bbb;
  font-size: 12px;
  font-style: italic;
`;

export const Textarea = styled.textarea`
  padding: 10px;
  width: 50%;
  border-radius: 2px;
  border: 1px solid #bbb;
  border-color: ${props => (props.validationError ? "#f00" : "#bbb")};
  margin: 20px 0 0;
  opacity: 0.5;
  font-size: 16px;
  resize: none;
`;

export const RadioDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  margin: 0;
  padding: 20px 0 0;
  justify-content: flex-start;
`;

export const Input = styled(MiniInput)`
  margin: 0 0 10px 10px;
  visibility: ${props => (props.visible ? "visible" : "hidden")};
  border-color: ${props => (props.validationError ? "#f00" : "#ccc")};
`;

export const Dolar = styled(Description)`
  margin: 10px;
  visibility: ${props => (props.visible ? "visible" : "hidden")};
`;

export const Invalid = styled(InvalidTitle)`
  margin: 5px;
  visibility: ${props => (props.validationError ? "visible" : "hidden")};
  &::after {
    top: 11px;
  }
`;

export const List = styled.ul`
  position: absolute;
  width: 50vw;
  background-color: #eee;
  border: 1px solid #ccc;
  top: 370px;
  left: 25%;
  z-index: 1;
  border-radius: 10px;
  list-style-type: none;
  padding: 20px 0 10px 0;
  cursor: pointer;
`;

export const ListElement = styled.li`
  padding: 5px 15px 5px 55px;
  position: relative;
  cursor: pointer;

  &:hover {
    background-color: #38f;
    color: #fff;
  }
`;
