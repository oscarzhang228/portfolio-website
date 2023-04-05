import { Component } from "react";
import Tabs from "./Tabs";
import Search from "./Search";
class Application extends Component {
  render() {
    return (
      <div>
        <Tabs></Tabs>
        <Search></Search>
      </div>
    );
  }
}

export default Application;
