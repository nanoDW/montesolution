import React from "react";
import { withEvent } from "../context/withEvent";
import { Label, Arrow } from "../components/FormEventStyles";
import {
  Div,
  Paragraph,
  List,
  ListElement
} from "../EventDetails/EventDetailsStyle";
import { Container } from "../EventCoordinator/EventCoordinatorStyle";
import data from "../categories.json";

class Category extends React.Component {
  state = {
    category: {
      name: "Select category",
      id: 10
    },
    categories: [],
    select: false
  };

  componentDidMount() {
    this.setState({ categories: data });
  }

  render() {
    const showCategories = () => {
      if (this.state.select) {
        return <List>{categories}</List>;
      }
    };

    const categories = this.state.categories.map(category => (
      <ListElement
        key={category.id}
        name={category.name}
        value={category.id}
        onClick={e => {
          this.setState({
            category: category,
            select: false
          });
          this.props.event.setCategory(category.id);
        }}
      >
        {category.name}
      </ListElement>
    ));
    return (
      <>
        <Label htmlFor="category">
          Category<Arrow>&#8227;</Arrow>
        </Label>
        <Container
          onClick={() => {
            this.setState({ select: true });
          }}
        >
          {this.state.category.name}
        </Container>
        {showCategories()}
        <Div>
          <Paragraph>
            Describes topic and people who should be interested in this event
          </Paragraph>
        </Div>
      </>
    );
  }
}

export const CategoryInput = withEvent(Category);
