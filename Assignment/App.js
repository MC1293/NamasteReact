import React from "react";
import ReactDOM from "react-dom/client";
import { Logo } from "./components/Logo";

// const header = React.createElement("div", { class: "title" }, [
//   [React.createElement("h1", null, "Sakthi")],
//   [React.createElement("h2", null, "Vinodth")],
//   [React.createElement("h3", null, "Muthuvel")],
// ]);

// const heading1 = <h1>Sakthii</h1>;
// const heading2 = () => <h2>Vinodthh</h2>;
// const Header = () => (
//   <div className="title">
//     {heading1}
//     {heading2()}
//     <h3>Muthuvel</h3>
//   </div>
// );

//Adding a fn component
const Heading = () => (
  <div>
    <Logo />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading />);
