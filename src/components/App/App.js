import React from "react";
import Photo from "../Photo/Photo";
import Gallery from "../Gallery/Gallery";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Photo
          url="https://picsum.photos/200"
          rotation="10"
          note={["Line one"]}
        />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn react
        </a>
      </header> */}
      <Gallery />
    </div>
  );
}

export default App;
