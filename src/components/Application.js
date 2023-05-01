import { Component } from "react";
import Tabs from "./Tabs";
import Search from "./Search";
import Browser from "./Browser";

class Application extends Component {
  render() {
    return (
      <div>
        {this.props.visible && (
          <Tabs
            hideBrowsers={this.props.hideBrowser}
            item={this.props.item}
          ></Tabs>
        )}
        {this.props.visible && <Search></Search>}
        {this.props.visible && <Browser item={this.props.item}></Browser>}
      </div>
    );
  }
}

export default Application;
