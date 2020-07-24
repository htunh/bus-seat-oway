import React from "react";

import "./Toolbar.css";
import NavigationItems from "../NavigationItems/NavigationItems";

const toolbar = (props) => (
  <div className="Toolbar">
    <nav>
      <NavigationItems />
    </nav>
  </div>
);

export default toolbar;
