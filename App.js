import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./img_logo/logo.png";

const Headers = () => {
  return (
    <div className="headerContainer">
      <div className="logo">
        <img src={logo}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = () => {
  return (
    <div className="rest-card">
      <img
        className="rest-img"
        alt="Restarant image"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/75c49a5d43681cb2406227ae82f6c781"
      ></img>
      <h3>MCK Restarant and Bar</h3>
      <h4>South indian, Chineese, Italian</h4>
      <h4>4.3 star</h4>
      <h4>40 mintues</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="bodycontainer">
      <div className="search">SearchBar</div>
      <div className="restContainer">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="appcontainer">
      <Headers />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
