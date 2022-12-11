import { createContext, useEffect, useState } from "react";
import useFetch1 from "../../hooks/useFetch";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userObj, setUserObj] = useState(null);

  const id = localStorage?.getItem("session-id");

  const [user, userError, userLoading, getUser] = useFetch1(`
  https://api.themoviedb.org/3/account?api_key=210df5155329bef70be1615bd2091852&session_id=${id}
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
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
