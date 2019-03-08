import React from "react";
import { withEvent } from "../context/withEvent";
import { Label, InvalidTitle } from "../components/FormEventStyles";
import { Div, Paragraph, Textarea } from "../EventDetails/EventDetailsStyle";

class Description extends React.Component {
  state = {
    description: ""
  };

  render() {
    const error = () => {
      if (
        (!this.state.description.length && this.props.submitted) ||
        this.state.description.length > 140
      ) {
        return true;
      } else {
        return false;
      }
    };

    return (
      <>
        <Label
          htmlFor="description"
          validationError={error()}
          isRequired={true}
        >
          Description
        </Label>
        <Textarea
          name="description"
          id=""
          cols="30"
          rows="10"
          placeholder="Write all about event, be creative"
          onChange={e => {
            this.setState({ description: e.target.value });
            this.props.event.setDetails(e);
          }}
          onBlur={this.checkRequired}
          value={this.state.description}
          validationError={error()}
        />
        <InvalidTitle validationError={error()}>
          Invalid description
        </InvalidTitle>
        <Div>
          <Paragraph>Max lenght 140 characters</Paragraph>
          <Paragraph>{this.state.description.length}/140</Paragraph>
        </Div>
      </>
    );
  }
}

export const DescriptionInput = withEvent(Description);
