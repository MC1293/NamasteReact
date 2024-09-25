import { LOGO } from "../utils/constants/";
import { useState } from "react";
import { Link } from "react-router-dom";

const Headers = () => {
  const [btnName, setBtnName] = useState("Login");
  return (
    <div className="headerContainer">
      <div className="logo">
        <img src={LOGO}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>Cart</li>
          <button
            className="btnLogin"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Headers;
