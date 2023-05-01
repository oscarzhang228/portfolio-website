import { Component } from "react";
class Taskbar extends Component {
  render() {
    return (
      <div className="fixed-bottom border container-fluid h-5 bg-light ">
        {!(this.props.image === null) && (
          <div className="d-flex justify-content-center flex-column align-items-center">
            <img
              src={this.props.image}
              className="figure-img img-fluid rounded m-0"
              alt="Desktop Icon"
            ></img>
            <div
              style={{
                height: 5,
                width: 20,
                borderRadius: "30%",
                backgroundColor: "#0078d7",
              }}
            ></div>
          </div>
        )}
        {this.props.image === null && <div style={{ height: "48px" }}></div>}
      </div>
    );
  }
}

export default Taskbar;
