import React, { Component } from "react";
import "./style.css";

import { NavigationTab } from "../../components/navigationTab";

export default class NavigationTabs extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="nav_master">
        <NavigationTab
          text={"Home"}
          icon={<i class="material-icons">home</i>}
          onclick={this.props.switchTab.bind(null, "HOME")}
          selected={this.props.currentTab === "HOME"}
        />
        <NavigationTab
          text={"About"}
          icon={<i class="material-icons">info</i>}
          onclick={this.props.switchTab.bind(null, "ABOUT")}
          selected={this.props.currentTab === "ABOUT"}
        />
        <NavigationTab
          text={"Contatct"}
          icon={<i class="material-icons">contacts</i>}
          onclick={this.props.switchTab.bind(null, "CONTACT")}
          selected={this.props.currentTab === "CONTACT"}
        />
      </div>
    );
  }
}
