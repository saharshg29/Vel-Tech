import React from "react";
import { useNavigate } from "react-router-dom";

export default function Left() {
  let navigate = useNavigate();
  return (
    <div>
      <span
        onClick={() => {
          navigate("/admin/student");
        }}
        className="btn btn-priimary"
      >
        Student
      </span>
      <br />
      <span
        onClick={() => {
          navigate("/admin/teacher");
        }}
        className="btn btn-priimary"
      >
        Teacher
      </span>
      <br />
      <span
        onClick={() => {
          navigate("/admin/subject");
        }}
        className="btn btn-priimary"
      >
        Subject
      </span>
      <br />
      <span
        onClick={() => {
          navigate("/admin/request");
        }}
        className="btn btn-priimary"
      >
        Requesst
      </span>
    </div>
  );
}
