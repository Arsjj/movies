import React from "react";
import { useState } from "react";
import "./index.scss";

const navbarLinks = [
  {
    path: "/industries",
    label: "Industries",
    key: 1,
  },
  {
    path: "/case-studies",
    label: "Case Studies",
    key: 2,
  },
  {
    path: "/about",
    label: "About Us",
    key: 3,
  },
];

const MobileNavbar = () => {
  // const [active, setActive] = useState(false);

  return (
    <nav className="mobile-container">
      <div id="menuToggle">
        <input type="checkbox" />
        <span></span>
        <span></span>
        <span></span>
        <ul id="menu">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Info</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MobileNavbar;
