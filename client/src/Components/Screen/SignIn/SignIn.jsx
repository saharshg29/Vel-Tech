import React from "react";
import { useState } from "react";
import "./app.css";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassWord] = useState("");

  const Data = { email, password };

  const onSubmission = (e) => {
    e.preventDefault();
    console.log('form submitted with data', Data)
  }

  return (
    <div className="form">
      <h1>Sign-In</h1>
      <form onSubmit={() => onSubmission()}>
        Email:
        <br />
        <input
          type="text"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <br />
        Password:
        <br />
        <input
          type="password"
          onChange={(e) => {
            setPassWord(e.target.value);
          }}
        />
        <br />
        <br />
        <span
          onClick={() => {
            console.log(Data);
          }}
        >
          {" "}
          Sign-Up
        </span>
      </form>
    </div>
  );
}
