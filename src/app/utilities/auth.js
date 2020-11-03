import React, { useEffect, useState, useRef } from "react";
import firebase from "firebase/app";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true);
  const mounted = useRef(true);

  // useEffect(() => {
  // firebase.auth().onAuthStateChanged((user) => {
  //   setCurrentUser(user);
  //   setPending(false);
  // });
  //   setDidMount(true);
  //   return () => setDidMount(false);
  // }, []);

  useEffect(() => {
    if (mounted.current) {
      firebase.auth().onAuthStateChanged((user) => {
        setCurrentUser(user);
        setPending(false);
      });
    }
    return () => (mounted.current = false);
  }, []);

  // firebase.auth().onAuthStateChanged((user) => {
  //   setCurrentUser(user);
  //   setPending(false);
  // });

  if (pending) {
    return <>Loading...</>;
  } else {
    return (
      <AuthContext.Provider
        value={{
          currentUser
        }}
      >
        {children}
      </AuthContext.Provider>
    );
  }
};
