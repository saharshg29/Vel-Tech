import React, { useState } from "react";

export default function AddSubject() {
  let [name, setName] = useState("");
  let [courseCode, setCC] = useState("");
  let [Teachers, setTeachers] = useState("");
  let [HoD, setHoD] = useState(null);

  let data = { name, courseCode, Teachers, HoD };
  let postData = () => {
    console.log(data);
  };

  return (
    <div>
      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Name
          </label>
          <input
            type="email"
            class="form-control"
            onChange={(e) => setName(e.target.value)}
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Course Code
          </label>
          <input
            type="password"
            class="form-control"
            onChange={(e) => setCC(e.target.value)}
            id="exampleInputPassword1"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Teachers
          </label>
          <input
            type="password"
            class="form-control"
            onChange={(e) => setTeachers(e.target.value)}
            id="exampleInputPassword1"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Head of Department
          </label>
          <input
            type="password"
            class="form-control"
            onChange={(e) => setHoD(e.target.value)}
            id="exampleInputPassword1"
          />
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        <button onClick={() => postData()} class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
