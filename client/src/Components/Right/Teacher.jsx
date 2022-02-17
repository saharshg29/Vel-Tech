import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

export default function Teacher() {
    let location = useLocation();
    let navigate = useNavigate();
    if (location.pathname.includes("/teacher-student")) {
      return (
        <>
          <span
            className="btn btn-primary m-2"
            onClick={() => navigate("/admin/student/add")}
          >
            Add Student
          </span>{" "}
          <br />
          <span
            className="btn btn-primary m-2"
            onClick={() => navigate("/admin/student/view")}
          >
            View All
          </span>
          <br />
        </>
      );
    } else if (location.pathname.includes("/teacher/department")) {
      return (
        <>
          <span
            className="btn btn-primary m-2"
            onClick={() => navigate("/admin/teacher/add")}
          >
            Add 
          </span>{" "}
          <br />
          <span
            className="btn btn-primary m-2"
            onClick={() => navigate("/admin/teacher/view")}
          >
            View Teachers
          </span>
          <br />
        </>
      );
    } else if (location.pathname.includes("/teacher/subject")) {
      return (
        <>
          <span
            className="btn btn-primary m-2"
            onClick={() => navigate("/admin/subject/add")}
          >
            Add subject
          </span>
          <br />
          <span
            className="btn btn-primary m-2"
            onClick={() => navigate("/admin/subject/view")}
          >
            View Subjects
          </span>
          <br />
        </>
      );
    }
    return <div>Right</div>;
  }
  