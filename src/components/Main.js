import { Component } from "react";
import Icon from "./Icon";
import logo from "./images/icons8-chrome-48.png";
class Main extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid bg-black vh-100">
          <div className="row">
            <Icon class="col-sm-4" caption="Bio" image={logo}></Icon>
          </div>
        </div>
        <div className="fixed-bottom border container-fluid h-5 bg-light">
          <h2>Hello</h2>
        </div>
      </div>
    );
  }
}

export default Main;
