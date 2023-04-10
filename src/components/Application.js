import { Component } from "react";
import Tabs from "./Tabs";
import Search from "./Search";
import { createRoot } from "react-dom/client";
import Main from "./Main";
class Application extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
    };
  }
  hideBrowser() {
    this.setState({ visible: false });
    const root = createRoot(document.getElementById("root"));
    root.render(<Main></Main>);
  }
  render() {
    return (
      <div>
        {this.state.visible && (
          <Tabs hideBrowsers={this.hideBrowser.bind(this)}></Tabs>
        )}
        {this.state.visible && <Search></Search>}
      </div>
    );
  }
}

export default Application;
