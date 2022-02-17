import React from "react";
import { useNavigate } from "react-router-dom";

export default function Teacher() {
  let navigate = useNavigate();
  return (
    <>
      <span
        onClick={() => navigate("/teacher-student")}
        className="btn m-2 btn-info"
      >
        Students
      </span>
      <br />
      <span
        onClick={() => navigate("/teacher/department")}
        className="btn m-2 btn-info"
      >
        Department
      </span>
      <br />
      <span
        onClick={() => navigate("/teacher/subject")}
        className="btn m-2 btn-info"
      >
        Subject
      </span>
    </>
  );
}
