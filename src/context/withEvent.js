import React from "react";
import { EventData } from "../App";

export const withEvent = Component => props => (
  <EventData.Consumer>
    {context => <Component {...props} event={context} />}
  </EventData.Consumer>
);
