import React from "react";
import { useState } from "react";

export default function AddTeacher() {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [department, setDepartment] = useState("");
  let [designation, setDesignation] = useState([]);

  const postData = () => {
    console.log({ name, email, password, department, designation });
  };

  return (
    <div>
      <form>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Name
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            onChange={(e) => {
              setName(e.target.value);
            }}
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Email
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Department
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={(e) => {
              setDepartment(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Designation
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={(e) => {
              setDesignation(e.target.value);
            }}
          />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={() => postData()}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
