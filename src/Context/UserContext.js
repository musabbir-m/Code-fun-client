import React, { useState } from "react";
import { createContext } from "react";
import app from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useEffect } from "react";

export const AuthContext = createContext();
const auth = getAuth(app);

const UserContext = ({ children }) => {
  //states
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  //create user
  const signUp = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //signin with email password
  const signIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };

  //sign in with google
  const provider = new GoogleAuthProvider();
  const googleSignIn = () => {
    return signInWithPopup(auth, provider);
  };
  //signin with github
  const githubProvider= new GithubAuthProvider()
  const githubSignIn= ()=>{
    setLoading(true)
    return signInWithPopup(auth, githubProvider)
  }
  //logout
  const logOut= ()=>{
    setLoading(true)
    return signOut(auth)
  }

  //current user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return unsubscribe;
  }, []);
  const authInfo = { user, signIn, signUp, googleSignIn, githubSignIn, logOut, loading};

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default UserContext;
