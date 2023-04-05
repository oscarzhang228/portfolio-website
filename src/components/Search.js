import { Component } from "react";
class Search extends Component {
  render() {
    return (
      <div
        className="container-fluid p-2"
        style={{ backgroundColor: "#2C394B" }}
      >
        <input
          type="text"
          className="border rounded-pill container-fluid bg-dark text-light"
          style={{ borderWidth: 0 }}
        ></input>
      </div>
    );
  }
}

export default Search;
