import React from "react";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent -Constructor");
  }
  render() {
    console.log("Parent -Render");
    return (
      <div>
        <h1>About us</h1>
        <h2>Page got routed to About page</h2>
        <UserClass
          name="Sakthi Vinodth -Class Based component"
          location="Madurai, Tamil Nadu"
        />
      </div>
    );
  }

  componentDidMount() {
    console.log("Parent - componentDidMount");
  }
}

export default About;
