import React from "react";
import "./style.css";

export const NavigationTab = props => {
  return (
    <div className="nav_tab_master" onClick={props.onclick}>
      <div className={`nav_tab_inner ${props.selected && "nav_tab_selected"}`} >
        {props.icon}
        {props.text}
      </div>
    </div>
  );
};
