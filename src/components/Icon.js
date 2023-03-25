import React, { Component } from "react";

class Icon extends Component {
  render() {
    return (
      <figure className="figure">
        <div class="d-flex align-items-center flex-start flex-column container mt-5">
          <img
            src={this.props.image}
            className="figure-img img-fluid rounded"
            alt={this.props.caption}
          />
          <figcaption className="figure-caption text-light ">
            {this.props.caption}
          </figcaption>
        </div>
      </figure>
    );
  }
}

export default Icon;
