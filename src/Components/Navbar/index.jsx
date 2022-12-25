import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useFetch1 from "../../hooks/useFetch";
import { AuthContext } from "../../Providers/AuthContext";

import "./index.scss";

// const body = {
//   session_id: id,
// } ;

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [value, setValue] = useState("");

  const navigate = useNavigate();
  // const id = localStorage?.getItem("session-id");

  const { userObj, loggedIn, setLoggedIn, setUserObj } =
    useContext(AuthContext);
  console.log(userObj, loggedIn, 456);

  const [logaut, error, loading, doFetch] = useFetch1(
    "https://api.themoviedb.org/3/authentication/session?api_key=210df5155329bef70be1615bd2091852"
  );

  const signOut = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/authentication/session?api_key=210df5155329bef70be1615bd2091852",
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          session_id: localStorage?.getItem("session-id"),
        }),
      }
    );
    if (res.ok) {
      setLoggedIn(false);
      localStorage.removeItem("session-id");
      setUserObj(null);
      console.log("out");
    }
  };

  function onSearch(e) {
    e.preventDefault();
    navigate(`/search/${value}`);
    setShow(false)
  }

  return (
    <div className="navbar">
      <div className="container">
        <div className="left">
          <Link className="llink" to={loggedIn ? "home" : "/"}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png?20190206123158" />
          </Link>
          <Link to="/home" className="link">
            Homepage
          </Link>
          <Link to={"/movies"} className="link">
            Movies
          </Link>
          <Link to="/series" className="link">
            Series
          </Link>
          {loggedIn ? (
            <Link to="/mylist" className="link">
              My List
            </Link>
          ) : null}
        </div>
        <div className="right">
          <div className="search">
            {show ? (
              <div className="input">
                <form onSubmit={(e) => onSearch(e)}>
                  <input
                    autoFocus
                    type="search"
                    onChange={(e) => {
                      setValue(e.target.value);
                    }}
                  />
                </form>
              </div>
            ) : null}

            <i
              className={show ? `bx bx-chevron-down` : `bx bx-search-alt-2`}
              onClick={() => {
                setShow((prev) => !prev);
              }}
            ></i>
            {/* <span>KID </span> */}
          </div>
          {loggedIn ? (
            <>
              <i className="bx bx-bell"></i>
              <div className="profile">
                <img
                  src="https://thumbs.dreamstime.com/z/%D1%82%D0%B2%D0%BE%D1%80%D1%87%D0%B5%D1%81%D0%BA%D0%B0%D1%8F-%D0%B8%D0%BB%D0%BB%D1%8E%D1%81%D1%82%D1%80%D0%B0%D1%86%D0%B8%D1%8F-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%B0-%D1%83%D0%BA%D0%B0%D0%B7%D0%B0%D1%82%D0%B5%D0%BB%D1%8F-%D0%BC%D0%B5%D1%81%D1%82%D0%B0-%D0%B7%D0%B0%D0%BF%D0%BE%D0%BB%D0%BD%D0%B5%D0%BD%D0%B8%D1%8F-%D0%BF%D1%80%D0%BE%D1%84%D0%B8%D0%BB%D1%8F-107388687.jpg"
                  alt=""
                />
                <i className="bx bxs-down-arrow"></i>
                <div className="options">
                  <span>{userObj?.name}</span>
                  <span>Settings</span>
                  <span onClick={signOut}>Logout</span>
                </div>
              </div>
            </>
          ) : (
            <div className="link" onClick={() => navigate("sign-in")}>
              Sign-in
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
