import React from "react";
import { useNavigate } from "react-router-dom";

export default function Student() {
  let navigate = useNavigate();
  return (
    <>
      <div
        className="btn btn-info m-2"
        onClick={() => {
          navigate("/student/edit");
        }}
      >
        Edit Account
      </div>
      <div
        className="btn btn-info m-2"
        onClick={() => {
          navigate("/student/view");
        }}
      >
        View Subjects
      </div>
      <div
        className="btn btn-info m-2"
        onClick={() => {
          navigate("/student/query");
        }}
      >
        Raise Query
      </div>
    </>
  );
}
