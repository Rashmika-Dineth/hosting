import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import React, {useContext} from "react";
import {UserContext} from "../components/Context";

export default function FirebaseLogin() {
  const {user, setUser} = useContext(UserContext);
  const provider = new GoogleAuthProvider();
  provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
  const auth = getAuth();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user.displayName);
      localStorage.setItem("userName", user.displayName);
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
    } else {
      setUser("Guest");
      localStorage.setItem("userName", "Guest");
      // User is signed out
      // ...
    }
  });

  const GoogleLogin = () => {
    signInWithPopup(auth, provider);
  };

  return (
    <div>
      FirebaseLogin
      <br />
      Welcome {user}
      <br />
      <button onClick={() => GoogleLogin()}>Login With Google</button>
      <br />
      <button onClick={() => signOut(auth)}>LOGOUT</button>
    </div>
  );
}
