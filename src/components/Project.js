import { Component } from "react";
import Picture from "./Picture";
import Description from "./Description";
class Project extends Component {
  render() {
    return (
      <div className="d-flex g-2">
        <Picture
          link={this.props.link}
          header={this.props.header}
          source={this.props.source}
          body={this.props.body}
        ></Picture>
        <Description></Description>
      </div>
    );
  }
}

export default Project;
