import React from "react";
import ReactDOM from "react-dom/client";

const TitleComponent = () => <div className="title"> Welcome sakthi !!!</div>;
const title2 = <h2>Akash saini course!!!</h2>;
const HeadingComponent = () => {
  return (
    <div id="container">
      <TitleComponent />
      {title2}
      <h1 id="test" className="abc">
        Welcome to class@@@
      </h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
