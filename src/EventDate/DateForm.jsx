import React from "react";
import { withEvent } from "../context/withEvent";
import {
  Label,
  DescTextInput,
  RadioInput,
  Description
} from "../components/FormEventStyles";
import { DateInput, TimeInput, StyledDiv } from "./EventDateStyle";

class DateComponent extends React.Component {
  state = {
    date: " ",
    time: "",
    time_format: "am"
  };

  render() {
    const errorDate = () => {
      const regex = /^(0[1-9]|[1-2][0-9]|3[0-1])[/](0[1-9]|1[0-2])[/](2019|20[2-9][0-9])$/;
      const result = this.state.date.match(regex);
      const trimmedDate = this.state.date.trim();
      if (result) {
        const date = new Date(this.state.date);
        if (date < Date.now()) {
          return true;
        }
        return false;
      } else if (this.props.submitted && !trimmedDate) {
        return true;
      } else if (!this.props.submitted && !trimmedDate) {
        return false;
      }
      return true;
    };

    const errorTime = () => {
      const regex = /^(0[0-9]|1[0-2])[:]([0-5][0-9])$/;
      const result = this.state.time.match(regex);
      if (!result && this.props.submitted) {
        return true;
      } else {
        return false;
      }
    };
    return (
      <>
        <Label htmlFor="date" isRequired={true}>
          Starts on
        </Label>
        <DateInput
          type="text"
          name="date"
          placeholder="dd/mm/yyyy"
          onChange={e => {
            this.setState({ date: e.target.value });
            this.props.event.setDetails(e);
          }}
          validationError={errorDate()}
        />
        <DescTextInput>at</DescTextInput>
        <TimeInput
          type="text"
          name="time"
          defaultValue="hh:mm"
          onChange={e => {
            this.setState({ time: e.target.value });
            this.props.event.setDetails(e);
          }}
          validationError={errorTime()}
        />
        <StyledDiv>
          <RadioInput
            type="radio"
            name="time_format"
            id="time_format"
            value="am"
            checked={this.state.time_format === "am"}
            onChange={e => {
              this.setState({ time_format: e.target.value });
              this.props.event.setDetails(e);
            }}
          />
          <Description>am</Description>
          <RadioInput
            type="radio"
            name="time_format"
            id="time_format"
            value="pm"
            checked={this.state.time_format === "pm"}
            onChange={e => {
              this.setState({ time_format: e.target.value });
              this.props.event.setDetails(e);
            }}
          />
          <Description>pm</Description>
        </StyledDiv>
      </>
    );
  }
}

export const DateForm = withEvent(DateComponent);
