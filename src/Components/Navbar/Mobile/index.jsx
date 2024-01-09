import React from "react";
import { useState } from "react";
import "./index.scss";
import { Link } from "react-router-dom";

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

const MobileNavbar = ({ loggedIn, signOut }) => {
  const [active, setActive] = useState(false);

  const changeHandler = () => {
    setActive((prev) => !prev);
  };

  return (
    // <nav className="navigation">
    <div id="menuToggle">
      <Link className="link" to={loggedIn ? "home" : "/"}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png?20190206123158"
          alt="Netflix"
        />
      </Link>
      <input type="checkbox" checked={active} onClick={changeHandler} />
      <span onClick={changeHandler}></span>
      <span onClick={changeHandler}></span>
      <span onClick={changeHandler}></span>
      <ul id="menu">
        <li onClick={changeHandler}>
          <Link to="/home" className="link">
            Homepage
          </Link>
        </li>
        <li onClick={changeHandler}>
          <Link to={"/movies"} className="link">
            Movies
          </Link>
        </li>
        <li onClick={changeHandler}>
          <Link to="/series" className="link">
            Series
          </Link>
        </li>
        
        <li onClick={changeHandler}>
          {loggedIn ? (
            <>
              <Link to="/mylist" className="link">
                My List
              </Link>
            </>
          ) : (
            <Link to="/sign-in">Sign-in</Link>
          )}
        </li>
        {loggedIn && <li onClick={changeHandler}>
          <Link onClick={signOut} className="link">
            Sign out
          </Link>
        </li>}
      </ul>
    </div>
    // </nav>
  );
};

export default MobileNavbar;
