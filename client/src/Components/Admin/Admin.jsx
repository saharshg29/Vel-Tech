import React from "react";
import Left from "./Left";
import Routing from "./Routing";
import { useLocation } from "react-router-dom";
import AddStudent from "./AddStudent";
import AddSubject from "./AddSubject";
import AddTeacher from "./AddTeacher";

export default function Admin() {
  let location = useLocation();
  if (location.pathname === "admin/student") {
    return <AddStudent />;
  } else if (location.pathname === "/admin/teacher") {
    return <AddSubject />;
  } else if (location.pathname === "/admin/subject") {
    return <AddTeacher />;
  }
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <h1>Admin</h1>
          <h3>This is admin panel</h3>
        </div>
      </div>
      {console.log("render hua")}
    </>
  );
}
