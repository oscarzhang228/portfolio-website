import { Component } from "react";
import notepad from "./images/icons8-notepad-48.png";
import TabCloseButton from "./TabCloseButton";
class Tabs extends Component {
  render() {
    return (
      <div
        className="container-fluid vh-20 d-flex"
        style={{ backgroundColor: "#03001C" }}
      >
        <div
          className="d-inline-block border-start border-end border-top border-secondary rounded-top ps-1 mt-2"
          style={{ maxWidth: "max-content", backgroundColor: "#2C394B" }}
        >
          <div className="d-flex align-items-center mb-1 ps-1 pe-1">
            <img
              src={notepad}
              className="img-fluid me-2"
              style={{ height: "1.1rem" }}
            ></img>
            <h1
              className="fs-6 text-light me-4 pt-1 mt-1 text-light pe-5"
              style={{
                fontSize: "16px",
                whiteSpace: "nowrap",
                lineHeight: "24px;",
              }}
            >
              Hello
            </h1>
            <span className="text-center text-light font-weight-bold mt-1">
              &times;
            </span>
          </div>
        </div>
        <div className="ms-auto d-flex align-items-center">
          <TabCloseButton></TabCloseButton>
        </div>
      </div>
    );
  }
}

export default Tabs;
