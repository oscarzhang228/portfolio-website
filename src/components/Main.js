import { Component } from "react";
import Icon from "./Icon";
import chrome from "./images/icons8-chrome-48.png";
import notepad from "./images/icons8-notepad-48.png";
import instagram from "./images/icons8-instagram-48.png";
import Application from "./Application";
import React from "react";
import ReactDom from "react-dom";
import ReactDomClient from "react-dom/client";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      doubleClicked: false,
    };
  }
  openIcon(openElem) {
    if (this.state.doubleClicked) {
      const root = ReactDomClient.createRoot(document.getElementById("root"));
      root.render(React.createElement(Application));
    } else {
      this.setState({ doubleClicked: true });
      setTimeout(() => {
        this.setState({ doubleClicked: false });
      }, 1000);
    }
  }
  render() {
    return (
      <div>
        <div className="container-fluid bg-black vh-100">
          <div className="row">
            <div
              className="col-sm-4 d-flex justify-content-center vh-100 align-items-center"
              onClick={() => this.openIcon("Application")}
            >
              <Icon caption="Projects" image={chrome}></Icon>
            </div>
            <div className="col-sm-4 d-flex justify-content-center vh-100 align-items-center">
              {" "}
              <Icon caption="Bio" image={notepad}></Icon>
            </div>
            <div className="col-sm-4  d-flex justify-content-center vh-100 align-items-center">
              {" "}
              <Icon caption="Socials" image={instagram}></Icon>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
