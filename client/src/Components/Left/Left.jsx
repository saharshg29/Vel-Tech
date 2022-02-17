import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Left() {
  let location = useLocation();
  let navigate = useNavigate();

  if (location.pathname.includes("/admin")) {
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
  return <div>Left</div>;
}
