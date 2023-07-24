import React, {useContext, useState} from "react";
import {UserContext} from "../components/Context";

export default function LoginScreen() {
  const {user, setUser} = useContext(UserContext);
  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      LoginScreen
      <p>Welcome {user}</p>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter your name here"
      ></input>
      <button
        onClick={() => {
          setUser(inputValue);
          localStorage.setItem("userName", inputValue);
        }}
      >
        LOGIN
      </button>
      <button
        onClick={() => {
          setUser(localStorage.getItem("userName"));
        }}
      >
        READ
      </button>
      <button
        onClick={() => {
          setUser(localStorage.removeItem("userName"));
        }}
      >
        REMOVE
      </button>
    </div>
  );
}
