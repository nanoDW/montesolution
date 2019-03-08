import React from "react";
import { withEvent } from "../context/withEvent";
import { Label, RadioInput, Description } from "../components/FormEventStyles";
import { RadioDiv, Input, Dolar, Invalid } from "./EventDetailsStyle";

class Payment extends React.Component {
  state = {
    paid_event: false,
    event_fee: 0,
    invalid: "hidden"
  };

  render() {
    const showFeeInput = () => {
      if (this.state.paid_event === "true") {
        return true;
      } else {
        return false;
      }
    };

    const error = () => {
      // prettier-ignore
      if (
        (this.state.paid_event === "true") &&
        !this.state.event_fee &&
        this.props.submitted
      ) {
        return true;
      } else {
        return false;
      }
    };
    return (
      <>
        <Label htmlFor="payment">Payment</Label>
        <RadioDiv>
          <RadioInput
            type="radio"
            name="paid_event"
            id="freeEvent"
            value="false"
            checked={this.state.paid_event === "false"}
            onChange={e => {
              this.setState({ paid_event: e.target.value });
              this.props.event.setDetails(e);
            }}
          />
          <Description>Free event</Description>
          <RadioInput
            type="radio"
            name="paid_event"
            id="paidEvent"
            value="true"
            checked={this.state.paid_event === "true"}
            onChange={e => {
              this.setState({ paid_event: e.target.value });
              this.props.event.setDetails(e);
            }}
          />
          <Description>Paid event</Description>
          <Input
            name="event_fee"
            type="number"
            placeholder="Fee"
            onChange={e => {
              this.setState({ event_fee: e.target.value });
              this.props.event.setDetails(e);
            }}
            visible={showFeeInput()}
            validationError={error()}
          />
          <Dolar visible={showFeeInput()}>$</Dolar>
          <Invalid validationError={error()}>
            Event fee value is invalid
          </Invalid>
        </RadioDiv>
      </>
    );
  }
}

export const PaymentInput = withEvent(Payment);
