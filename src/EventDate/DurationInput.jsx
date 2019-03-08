import React from "react";
import { withEvent } from "../context/withEvent";
import { Label, MiniInput, DescTextInput } from "../components/FormEventStyles";

class Duration extends React.Component {
  state = {
    duration: 0
  };

  render() {
    return (
      <>
        <Label htmlFor="duration">Duration</Label>
        <MiniInput
          name="duration"
          placeholder="Number"
          onChange={e => {
            this.setState({ duration: e.target.value });
            this.props.event.setDetails(e);
          }}
        />
        <DescTextInput>hours</DescTextInput>
      </>
    );
  }
}

export const DurationInput = withEvent(Duration);
