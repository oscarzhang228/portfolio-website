import "./App.css";
import Main from "./components/Main.js";

function App() {
  return (
    <div className="root">
      <Main></Main>
      <div className="fixed-bottom border container-fluid h-5 bg-light">
        <h2>Hello</h2>
      </div>
    </div>
  );
}

export default App;
