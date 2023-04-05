import { Component } from "react";

class TabCloseButton extends Component {
  render() {
    return (
      <span
        className="text-center text-light font-weight-light"
        style={{ fontSize: "32px" }}
      >
        &times;
      </span>
    );
  }
}
export default TabCloseButton;
