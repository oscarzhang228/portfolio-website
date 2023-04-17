import { Component } from "react";
import Icon from "./Icon";
import chrome from "./images/icons8-chrome-48.png";
import notepad from "./images/icons8-notepad-48.png";
import instagram from "./images/icons8-instagram-48.png";
import Application from "./Application";
import React from "react";
import { createRoot } from "react-dom/client";
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      doubleClicked: false,
    };
  }
  openIcon(item) {
    if (this.state.doubleClicked) {
      const root = createRoot(document.getElementById("root"));
      const elem = (
        <Application hideBrowser={this.hideBrowser} item={item}></Application>
      );
      root.render(elem);
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
              onClick={() => this.openIcon("Projects")}
            >
              <Icon caption="Projects" image={chrome}></Icon>
            </div>
            <div
              className="col-sm-4 d-flex justify-content-center vh-100 align-items-center"
              onClick={() => this.openIcon("Bio")}
            >
              <Icon caption="Bio" image={notepad}></Icon>
            </div>
            <div className="col-sm-4  d-flex justify-content-center vh-100 align-items-center">
              <a
                href="https://linktr.ee/oscarzhang228"
                rel="noreferrer"
                target="_blank"
              >
                <Icon caption="Socials" image={instagram}></Icon>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
