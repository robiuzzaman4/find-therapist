import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { app } from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [spinner, setSpinner] = useState(true);

  const userRegister = (email, password) => {
    setSpinner(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const userLogin = (email, password) => {
    setSpinner(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const userLogout = () => {
    setSpinner(true);
    return signOut(auth);
  };

  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (logedInUser) => {
      setUser(logedInUser);
      setSpinner(false);
    });

    console.log("user", user);

    return () => unsubscribe();
  }, [user]);

  const authInfo = {
    user,
    spinner,
    userRegister,
    userLogin,
    userLogout,
    googleLogin,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
