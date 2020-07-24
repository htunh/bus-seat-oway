import React, { Component } from "react";

import "./Layout.css";
import Auxiliary from "../Auxiliary/Auxiliary";
import Header from "../../components/Header/Header";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";

class Layout extends Component {
  render() {
    return (
      <Auxiliary>
        <Header />
        <hr />
        <Toolbar />
        <hr />
        <main className="Content">{this.props.children}</main>
      </Auxiliary>
    );
  }
}

export default Layout;
