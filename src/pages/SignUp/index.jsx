import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../Providers/AuthContext";
import { useNavigate } from "react-router-dom";
import useFetch1 from "../../hooks/useFetch";

import "./index.scss";

const headers = {
  "Content-Type": "application/json",
};

function SignUp() {
  const [values, setValues] = useState({
    username: "Arsen7",
    password: "1234567",
  });

  const onChangeHandler = (e) => {
    setValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    console.log(values);
  };

  const { setLoggedIn } = useContext(AuthContext);

  const id = localStorage.getItem("session-id");
  const navigate = useNavigate();

  const [, , , dofetch] = useFetch1(`
  https://api.themoviedb.org/3/account?api_key=210df5155329bef70be1615bd2091852&session_id=${id}
  `);

  useEffect(() => {
    if (id) {
      dofetch();
    }
  }, [id]);

  async function signI(e) {
    e.preventDefault();

    try {
      const tokenResponse = await fetch(
        "https://api.themoviedb.org/3/authentication/token/new?api_key=210df5155329bef70be1615bd2091852"
      );
      const token = await tokenResponse.json();
      const loginResponse = await fetch(
        "https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=210df5155329bef70be1615bd2091852",
        {
          method: "POST",
          headers: headers,
          body: JSON.stringify({
            ...values,
            request_token: token?.request_token,
          }),
        }
      );
      const loginToken = await loginResponse.json();
      const sessionResponse = await fetch(
        "https://api.themoviedb.org/3/authentication/session/new?api_key=210df5155329bef70be1615bd2091852",
        {
          method: "POST",
          headers: headers,
          body: JSON.stringify({
            request_token: loginToken?.request_token,
          }),
        }
      );
      const sessionRes = await sessionResponse.json();

      localStorage.setItem("session-id", sessionRes?.session_id);
      navigate("/home");
      setLoggedIn(true);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="section">
      <div className="cover">
        <div className="logo">
          {/* <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png?20190206123158" /> */}
        </div>
        <div className="form">
          <form action="">
            <h1>Sign In</h1>
            <input
              type="emial"
              name="username"
              placeholder="Email or phone number"
              onChange={onChangeHandler}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={onChangeHandler}
            />
            <button
              onClick={(e) => {
                signI(e);
              }}
            >
              Sign In
            </button>
            <span>
              New to Netflix?{" "}
              <a href="https://www.themoviedb.org/signup">Sign up now</a>
            </span>
            <small>
              This page is protected by Google reCAPCHA to ensure you're not a
              bot.
              <b> Learn more</b>
            </small>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
