import logo from "./logo.svg";
import "./App.css";
import React, { createElement } from "react";

function App() {
  const now = new Date().getFullYear();
  // // Перепишем App.js без использования JSX
  return createElement(
    "div",
    { className: "App" },
    createElement(
      "header",
      { className: "App-header" },
      createElement("img", {
        src: "logo.svg",
        className: "App-logo",
        alt: "logo",
      }),
      createElement(
        "p",
        null,
        "edit",
        createElement("code", null, "src/App.js"),
        "and save to reload."
      ),
      createElement(
        "a",
        {
          className: "App-link",
          href: "https://reactjs.org",
          target: "_blank",
          rel: "noopener noreferrer",
        },
        "Learn React"
      ),
      createElement("h3", null, now)
    )
  );
}

export default App;
