import React from "react";
import { useLocation } from "react-router-dom";

export default function Right() {
  let location = useLocation();
  if (location.pathname === "admin/student") {
    return (
      <>
        <span className="btn btn-info">Add Student</span>
        <span className="btn btn-info">View Student</span>
      </>
    );
  } else if (location.pathname === "admin/teacher") {
    return (
      <>
        <span className="btn-info">Add Teacher</span>
        <span className="btn-info">View Teachers</span>
      </>
    );
  } else if (location.pathname === "admin/subject") {
    return (
      <>
        <span className="btn-info">Add Subject</span>
        <span className="btn-info">View subject</span>
      </>
    );
  }
}
