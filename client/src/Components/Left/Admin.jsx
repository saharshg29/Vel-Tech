import React from "react";
import { useNavigate } from "react-router-dom";

export default function Admin() {
  let navigate = useNavigate();
  return (
    <>
      <span
        onClick={() => navigate("/admin/student")}
        className="btn m-2 btn-info"
      >
        Student
      </span>
      <br />
      <span
        onClick={() => navigate("/admin/teacher")}
        className="btn m-2 btn-info"
      >
        Teacher
      </span>
      <br />
      <span
        onClick={() => navigate("/admin/subject")}
        className="btn m-2 btn-info"
      >
        Subject
      </span>
    </>
  );
}
