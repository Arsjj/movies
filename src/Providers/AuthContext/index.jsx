import { createContext, useEffect, useState } from "react";
import Loader from "../../Components/Loader";
import useFetch from "../../hooks/useFetch";
import { API_KEY } from "../../Url_s";


export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userObj, setUserObj] = useState(null);

  const id = localStorage?.getItem("session-id");

  const [user, ,loading , getUser] = useFetch(`/account?${API_KEY}&session_id=${id}
  `);
  

  useEffect(() => {
    if (id) {
      console.log("getting session");
      getUser();
    } else {
      setLoggedIn(false);
    }
  }, [id]);

  useEffect(() => {
    if (user?.id) {
      setLoggedIn(true);
      setUserObj(user);
    } else {
      setLoggedIn(false);
      setUserObj(null);
    }
  }, [user]);


  return (
    <AuthContext.Provider
      value={{ userObj, loggedIn, setLoggedIn, setUserObj }}
    >
      {loading? <Loader/>: children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
