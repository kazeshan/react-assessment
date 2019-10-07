import React, { Component } from "react";
import { render } from "react-dom";
import "./style.css";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h2>Contact List Application</h2>
        <h3>Step 1</h3>
        <p>
          Mimic the functionality of a phones contact list. Fetch list of
          contacts from this URL => https://jsonplaceholder.typicode.com/users
        </p>
        All contacts should be displayed in a list on the Contact page (username
        only)
        <br />
        <br />
        Additional details for a specific contact should either be displayed on
        a new page or in a modal when the contact is selected
        <br />
        <br />A contact should consist of :
        <ul>
          <li>name,</li>
          <li>email,</li>
          <li>phone,</li>
          <li>company</li>
          <li>photo</li>
        </ul>
        <h3>Step 2</h3>
        <ul>
          <li>Display the contact list alphabetically</li>
          <li>Allow the user to take a photo using the camera</li>
          <li>
            Use local storage to persist contacts after the application is
            reloaded
          </li>
        </ul>
        <h3>Step 3</h3>
        <ul>
          <li>A user should be able to add new contacts to the application</li>
          <li>A specific contact should be able to be edited & deleted</li>
        </ul>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
