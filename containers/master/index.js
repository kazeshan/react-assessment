import React, { Component } from "react";
import "./style.css";

import Home from "../home";
import NavigationTabs from "../navigationTabs";

export default class Master extends Component {
  constructor() {
    super();
  }

  state = {
    page: "HOME"
  };

  switchTab = page => {
    this.setState({
      page
    });
  };

  render() {
    return (
      <div className="master_container">
        <div className="master_child_zone">
          {this.state.page === "HOME" && <Home />}
        </div>
        <div className="master_navigation_zone">
          <NavigationTabs
            currentTab={this.state.page}
            switchTab={this.switchTab}
          />
        </div>
      </div>
    );
  }
}
