import { Component } from "react";
class Description extends Component {
  render() {
    return (
      <div className="ms-1 mt-3">
        <h1
          className="text-light text-wrap"
          style={{
            fontFamily: "Roberto, sans-serif",
            fontSize: 25,
            fontWeight: 700,
          }}
        >
          {this.props.header}
        </h1>
        <h1
          className="text-light text-wrap ms-1"
          style={{
            fontFamily: "Roberto, sans-serif",
            fontSize: 18,
          }}
        >
          {this.props.body}
        </h1>
      </div>
    );
  }
}

export default Description;
