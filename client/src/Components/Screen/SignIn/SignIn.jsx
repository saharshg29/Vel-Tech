import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./signin.css";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassWord] = useState("");
  const navigate = useNavigate();

  const postData = () => {
    if (!email || !password) {
      console.log("Enter all the details");
      return;
    }

    fetch("/student-signin", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password,
        email,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          console.log(data.error);
        } else {
          localStorage.setItem("jwt", data.toke);
          localStorage.setItem("user", JSON.stringify(data.user));
          console.log("Sign in Sucessfull");
          navigate("/signup");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1>Sign-In</h1>
      <form onSubmit={() => postData()}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={(e) => {
              setPassWord(e.target.value);
            }}
          />
        </div>

        <span className="btn btn-primary" onClick={() => postData()}>
          Submit
        </span>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Don't have an account?
          </label>
          <span className="btn btn-primary" onClick={() => navigate("/signup")}>
            Sign-Up
          </span>
        </div>
      </form>
    </div>
  );
}
