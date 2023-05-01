import { Component } from "react";

class Picture extends Component {
  render() {
    return (
      <div className="mt-3 ms-3">
        <a ref={this.props.link} target="_blank">
          <img src={this.props.source} style={{ height: "250px" }}></img>
        </a>
      </div>
    );
  }
}

export default Picture;
