import styled from "styled-components";

export const Label = styled.label`
  width: 20%;
  text-transform: uppercase;
  margin-top: 20px;
  color: ${props => (props.validationError ? "#f00" : "#355990")};
  line-height: 40px;
  font-size: 14px;
  opacity: 0.5;
  justify-content: space-between;
  position: relative;

  &::after {
    content: ${props => (props.isRequired ? "' *'" : "''")};
    color: #ff0000;
  }
`;

export const TextInput = styled.input`
  padding: 10px;
  width: 50%;
  border-radius: 2px;
  border: 1px solid #bbb;
  border-color: ${props => (props.validationError ? "#f00" : "#bbb")};
  margin: 20px 0 0;
  opacity: 0.5;
  font-size: 16px;
`;

export const MiniInput = styled.input`
  padding: 10px;
  width: 95px;
  border-radius: 2px;
  border: 1px solid #bbb;
  margin: 20px 10px 0 0;
  opacity: 0.5;
  font-size: 16px;
`;

export const Select = styled.select`
  background-color: transparent;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  padding: 10px;
  height: 40px;
  width: 50%;
  border-radius: 2px;
  border: 1px solid #ccc;
  margin: 20px 20% 0 0;
  opacity: 0.5;
  font-size: 16px;
  position: relative;

  &:focus {
    outline: none;
  }
`;

export const Description = styled.p`
  font-size: 16px;
  color: black;
  opacity: 0.5;
  margin: 10px 0 0;
  display: inline-block;
`;

export const DescTextInput = styled.p`
  font-size: 16px;
  color: black;
  opacity: 0.5;
  margin: 20px 10px 0;
  padding: 10px 0 0;
  display: inline-block;
`;

export const RadioInput = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 18px;
  height: 18px;
  margin: 10px;
  position: relative;
  color: #355990;
  cursor: pointer;
  border: 1px solid #355990;
  border-radius: 50%;
  opacity: 0.5;

  &:checked::before {
    content: "";
    position: absolute;
    border-radius: 50%;
    top: 2px;
    left: 2px;
    width: 12px;
    height: 12px;
    background-color: #355990;
    z-index: 1;
  }
`;

export const Arrow = styled.span`
  transform: rotate(90deg);
  position: absolute;
  top: 20px;
  left: 47vw;
  font-size: 28px;
  color: #355990;
  line-height: 0px;
`;

export const InvalidTitle = styled.div`
  background-color: #f00;
  opacity: 0.5;
  width: calc(30% - 20px);
  margin: 25px 10px 5px;
  color: #fff;
  font-size: 12px;
  border-radius: 5px;
  padding: 5px 10px;
  text-align: center;
  line-height: 24px;
  height: 32px;
  position: relative;
  visibility: ${props => props.validationError || "hidden"};

  &::after {
    content: "";
    top: 13px;
    left: -5px;
    width: 10px;
    height: 10px;
    background-color: #f00;
    z-index: 1;
    position: absolute;
    transform: rotate(45deg);
  }
`;
