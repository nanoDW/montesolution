import React from "react";
import styled from "styled-components";
import { FormElement } from "./FormElement";
import { TitleInput } from "../EventDetails/TitleInput";
import { DescriptionInput } from "../EventDetails/DescriptionInput";
import { CategoryInput } from "../EventDetails/CategoryInput";
import { PaymentInput } from "../EventDetails/PaymentInput";
import { RewardInput } from "../EventDetails/RewardInput";
import { Coordinator } from "../EventCoordinator/Coordinator";
import { DateForm } from "../EventDate/DateForm";
import { DurationInput } from "../EventDate/DurationInput";

const Button = styled.button`
  display: block;
  background-color: #ff8e1d;
  border: 0;
  border-radius: 3px;
  color: white;
  padding: 20px;
  text-transform: uppercase;
  font-size: 16px;
  margin: 0 auto 50px;
`;

export class FormEvent extends React.Component {
  state = {
    submitted: false
  };

  formSubmit = e => {
    e.preventDefault();

    this.setState({ submitted: true });
    this.props.onValidate();
  };

  render() {
    return (
      <form onSubmit={this.formSubmit}>
        <FormElement header={"About"}>
          <TitleInput submitted={this.state.submitted} />
          <DescriptionInput submitted={this.state.submitted} />
          <CategoryInput />
          <PaymentInput submitted={this.state.submitted} />
          <RewardInput />
        </FormElement>
        <FormElement header={"Coordinator"}>
          <Coordinator />
        </FormElement>
        <FormElement header={"When"}>
          <DateForm submitted={this.state.submitted} />
          <DurationInput />
        </FormElement>
        <Button type="submit">Publish event</Button>
      </form>
    );
  }
}
