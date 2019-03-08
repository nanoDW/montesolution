import React, { Component } from "react";
import { createGlobalStyle } from "styled-components";
import { HeaderEvent } from "./components/HeaderEvent";
import { FormEvent } from "./components/FormEvent";
import { SuccessEvent } from "./components/SuccessEvent";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  body {
    width: 100vw;
    height: 100vh;
    background-color: #F7F7F7;
  }
`;

export const EventData = React.createContext({});

export class App extends Component {
  constructor() {
    super();
    this.state = {
      isEventValid: false,
      title: "",
      category_id: 0,
      paid_event: false,
      event_fee: 0,
      reward: 0,
      date: "",
      time: "12:00",
      time_format: "am",
      duration: 0,
      email: "daniel.mitchell@hussa.rs",
      id: "3",
      setDetails: this.setDetails,
      setCategory: this.setCategory,
      setEmailAndId: this.setEmailAndId,
      setDate: this.setDate
    };
  }

  setFormattedDate = () => {
    const year = this.state.date.substr(6, 4);
    const month = this.state.date.substr(3, 2);
    const day = this.state.date.substr(0, 2);

    let convertedDate = "";

    if (this.state.time_format === "pm") {
      const convertedHour = parseInt(this.state.time.substr(0, 2)) + 12;
      const convertedTime = convertedHour + this.state.time.substr(2, 3);
      convertedDate = `${year}-${month}-${day}T${convertedTime}`;
    } else {
      convertedDate = `${year}-${month}-${day}T${this.state.time}`;
    }
    return convertedDate;
  };

  setDetails = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  setCategory = category => {
    this.setState({ category_id: category });
  };

  setEmailAndId = (email, id) => {
    this.setState({
      email,
      id
    });
  };

  setDate = date => {
    this.setDate({
      date
    });
  };

  validateEvent = () => {
    const regexDate = /^(0[1-9]|[1-2][0-9]|3[0-1])[/](0[1-9]|1[0-2])[/](2019|20[2-9][0-9])$/;
    if (this.state.date.length === 10) {
      const matchDate = this.state.date.match(regexDate);
      const date = new Date(this.state.date);
      const regexTime = /^(0[0-9]|1[0-2])[:]([0-5][0-9])$/;
      const matchTime = this.state.time.match(regexTime);
      if (
        this.state.title.trim() &&
        this.state.description &&
        matchDate &&
        matchTime &&
        date > Date.now()
      ) {
        // prettier-ignore
        if (
          ((this.state.paid_event === "true") && this.state.event_fee) || (this.state.paid_event === "false")
        ) {
          const convertedDate = this.setFormattedDate();
          const event = {
            title: this.state.title,
            description: this.state.description,
            category_id: this.state.category_id,
            paid_event: this.state.paid_event,
            event_fee: this.state.event_fee,
            reward: this.state.reward,
            date: convertedDate,
            duration: this.state.duration,
            coordinator: {
              email: this.state.email,
              id: this.state.id
            }
          };
          console.log(event);
          this.setState({ isEventValid: true });
        }
      }
    }
  };

  render() {
    return (
      <div className="App">
        <GlobalStyle />
        <HeaderEvent />
        <EventData.Provider value={this.state}>
          {this.state.isEventValid === true ? (
            <SuccessEvent />
          ) : (
            <FormEvent onValidate={this.validateEvent} />
          )}
        </EventData.Provider>
      </div>
    );
  }
}
