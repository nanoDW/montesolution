import styled from "styled-components";

export const DateInput = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  padding: 10px;
  height: 40px;
  width: 25%;
  border-radius: 2px;
  border: 1px solid #ccc;
  border-color: ${props => (props.validationError ? "#f00" : "#ccc")};
  margin: 20px 10px 0 0;
  opacity: 0.5;
  font-size: 16px;
`;

export const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 20%;
  margin: 0 auto;
  padding: 20px 0 0;
  justify-content: flex-start;
`;

export const TimeInput = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  padding: 10px;
  height: 40px;
  width: 20%;
  border-radius: 2px;
  border: 1px solid #ccc;
  border-color: ${props => (props.validationError === true ? "#f00" : "#ccc")};
  margin: 20px 0 0 10px;
  opacity: 0.5;
  font-size: 16px;
`;
