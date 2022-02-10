import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./app.css";

export default function SignUp() {
  const navigate = useNavigate()
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassWord] = useState("");

  const Data = { name, email, password };

  const onSubmission = (e) => {
    e.preventDefault();
    console.log("form submitted with data", Data);
    navigate('/signin')
  };

  return (
    <>
      <div className="form">
        <h1>Sign-Up</h1>
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Name
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
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

          <button
            className="btn btn-primary"
            onClick={() => onSubmission()}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
