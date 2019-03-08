import React from "react";
import { withEvent } from "../context/withEvent";
import { Label, TextInput, InvalidTitle } from "../components/FormEventStyles";

class Title extends React.Component {
  state = {
    title: " "
  };

  render() {
    const error = () => {
      if (this.props.submitted) {
        const trimmedTitle = this.state.title.trim();
        if (!trimmedTitle) {
          return true;
        }
        if (!this.state.title) {
          return true;
        } else {
          return false;
        }
      }
    };
    return (
      <>
        <Label htmlFor="title" validationError={error()} isRequired={true}>
          Title
        </Label>
        <TextInput
          type="text"
          name="title"
          placeholder="Make it short and clear"
          onChange={e => {
            this.setState({ title: e.target.value });
            this.props.event.setDetails(e);
          }}
          validationError={error()}
        />
        <InvalidTitle validationError={error()}>
          Title cannot be empty
        </InvalidTitle>
      </>
    );
  }
}

export const TitleInput = withEvent(Title);
