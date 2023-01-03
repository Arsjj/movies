import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthContext";
import { BASE_URL, API_KEY } from "../../Url_s";

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

  const navigate = useNavigate();

  async function signIn(e) {
    e.preventDefault();

    try {
      const tokenResponse = await fetch(
        `${BASE_URL}/authentication/token/new?${API_KEY}`
      );
      const token = await tokenResponse.json();
      if(token.success){

        const loginResponse = await fetch(
          `${BASE_URL}/authentication/token/validate_with_login?${API_KEY}`,
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
      if(loginToken.success){

        const sessionResponse = await fetch(
          `${BASE_URL}/authentication/session/new?${API_KEY}`,
        {
          method: "POST",
          headers: headers,
          body: JSON.stringify({
            request_token: loginToken?.request_token,
          }),
        }
      );
      const sessionRes = await sessionResponse.json();
      if (sessionRes.success) {
        localStorage.setItem("session-id", sessionRes?.session_id);
        navigate("/home");
        setLoggedIn(true);
      } else {
        alert(sessionRes?.status_message)
      }
    } else {
      alert(loginToken.status_message)
    }
  } else {
    alert(token.status_message)
  }
  } catch (e) {
    console.log(e);
    }
  }

  return (
    <div className="section">
      <div className="cover">
        <div className="form">
          <form>
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
                signIn(e);
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
