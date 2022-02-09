import React from "react";
import { useState } from "react";
import "./app.css";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassWord] = useState("");

  const Data = { name, email, password };

  const onSubmission = (e) => {
    e.preventDefault();
    console.log('form submitted with data', Data)
  }

  return (
    <div className="form">
      <h1>Sign-Up</h1>
      <form onSubmit={() => onSubmission()}>
        Name:
        <input
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <br />
        Email:
        <input
          type="text"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <br />
        Password:
        <input
          type="password"
          onChange={(e) => {
            setPassWord(e.target.value);
          }}
        />
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
