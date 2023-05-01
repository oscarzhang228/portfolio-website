import { Component } from "react";
import Icon from "./Icon";
import chrome from "./images/icons8-chrome-48.png";
import notepad from "./images/icons8-notepad-48.png";
import instagram from "./images/icons8-instagram-48.png";
import Application from "./Application";
import React from "react";
import Taskbar from "./Taskbar";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      doubleClicked: false,
      visible: false,
      tIcon: null,
      img: null,
    };
  }
  openIcon(item) {
    if (this.state.doubleClicked) {
      this.setState({ visible: true, tIcon: item });
      if (item === "Projects") {
        this.setState({ img: chrome });
      } else if (item === "Bio") {
        this.setState({ img: notepad });
      }
    } else {
      this.setState({ doubleClicked: true });
      setTimeout(() => {
        this.setState({ doubleClicked: false });
      }, 1000);
    }
  }
  hideBrowser() {
    this.setState({ visible: false, img: null });
  }

  render() {
    return (
      <div>
        <Application
          visible={this.state.visible}
          item={this.state.tIcon}
          hideBrowser={this.hideBrowser.bind(this)}
        ></Application>
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
        <Taskbar image={this.state.img}></Taskbar>
      </div>
    );
  }
}

export default Main;
