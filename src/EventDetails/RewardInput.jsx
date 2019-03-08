import React from "react";
import { withEvent } from "../context/withEvent";
import { Label, MiniInput, DescTextInput } from "../components/FormEventStyles";

class Reward extends React.Component {
  state = {
    reward: 0
  };

  render() {
    return (
      <>
        <Label htmlFor="reward">Reward</Label>
        <MiniInput
          name="reward"
          type="number"
          placeholder="Number"
          onChange={e => {
            this.setState({ reward: e.target.value });
            this.props.event.setDetails(e);
          }}
        />
        <DescTextInput>reward points for attendance</DescTextInput>
      </>
    );
  }
}

export const RewardInput = withEvent(Reward);
