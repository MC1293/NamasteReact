// const heading = React.createElement(
//   "h1",
//   { id: "heading", className: "abc" },
//   "Hello React World"
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

{
  /* <div id="parent">
  <div id="child1">
    <div>
      <h1>Welcome to child1</h1>
      <p>What do you want?</p>
    </div>
  </div>
  <div id="child2">
    <div>
      <h1>Welcome to child2</h1>
      <p>What do you want here?</p>            
    </div>
  </div>
</div>; */
}
import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
  "div",
  { id: "parent" },
  [React.createElement(
    "div",
    { id: "child1" },
    React.createElement(
      "div",
      null,
      [React.createElement("h1", null, "Welcome to child1"),React.createElement("p", null, "Sakthi")]
    )
  ),React.createElement(
    "div",
    { id: "child2" },
    React.createElement(
      "div",
      null,
      [React.createElement("h1", null, "Welcome to child2"),React.createElement("p", null, "Vinodth Muthuvel")]
    )
  )]
);

ReactDOM.createRoot(document.getElementById("root")).render(parent);
