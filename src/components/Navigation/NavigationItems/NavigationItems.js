import React from "react";

import "./NavigationItems.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = (props) => (
  <ul className="NavigationItems">
    <NavigationItem link="/bus-details">
      Bus Details
    </NavigationItem>
    <NavigationItem link="/cancellation-policy">
      Cancellation Policy
    </NavigationItem>
    <NavigationItem link="/" exact>Seat Selection</NavigationItem>
  </ul>
);

export default navigationItems;
