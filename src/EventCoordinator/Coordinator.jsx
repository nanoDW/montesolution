import React from "react";
import { withEvent } from "../context/withEvent";
import { Label, Arrow } from "../components/FormEventStyles";
import {
  EmailField,
  List,
  ListElement,
  Container
} from "./EventCoordinatorStyle";
import data from "../employes.json";

class CoordinatorComponent extends React.Component {
  state = {
    responsible: {
      name: "Me - Walter",
      lastname: "Nelson",
      id: 3,
      email: "walter.nelson@hussa.rs"
    },
    email: "walter.nelson@hussa.rs",
    id: 3,
    people: [],
    select: false
  };

  componentDidMount = () => {
    this.setState({ people: data });
  };

  render() {
    const employes = () => {
      const loggedIn = this.state.people.filter(person => person.id === 3);
      const others = this.state.people.filter(person => person.id !== 3);
      const people = loggedIn.concat(others);

      return people.map(person => (
        <ListElement
          key={person.id}
          name={person.name}
          value={person.lastname}
          onClick={e => {
            this.setState({
              responsible: person,
              id: person.id,
              select: false
            });
            this.props.event.setEmailAndId(person.email, person.id);
          }}
        >
          {person.name} {person.lastname}
        </ListElement>
      ));
    };

    const showList = () => {
      if (this.state.select) {
        return <List>{employes()}</List>;
      }
    };
    return (
      <>
        <Label htmlFor="responsible" isRequired={true}>
          Responsible<Arrow>&#8227;</Arrow>
        </Label>
        <Container
          onClick={() => {
            this.setState({ select: true });
          }}
        >
          {this.state.responsible.name} {this.state.responsible.lastname}
        </Container>
        {showList()}
        <Label htmlFor="email">Email</Label>
        <EmailField>{this.state.responsible.email}</EmailField>
      </>
    );
  }
}

export const Coordinator = withEvent(CoordinatorComponent);
