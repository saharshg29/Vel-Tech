import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./app.css";

export default function SignUp() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassWord] = useState("");

  const postData = () => {
    if (!name || !email || !password) {
      console.log("something is missing");
      return;
    }
    fetch("/signup", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        password,
        email,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          console.log(data);
          console.log(data.error);
        } else {
          console.log(data);
          navigate("/signin");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="form">
        <h1>Sign-Up</h1>
        <form>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="email"
              value={name}
              className="form-control"
              aria-describedby="emailHelp"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              value={email}
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
              value={password}
              className="form-control"
              id="exampleInputPassword1"
              onChange={(e) => {
                setPassWord(e.target.value);
              }}
            />
          </div>

          <span
            className="btn btn-primary"
            onClick={() => {
              postData();
            }}
          >
            Submit
          </span>
        </form>
      </div>
    </>
  );
}
