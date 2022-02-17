import React from "react";
import { useLocation } from "react-router-dom";
import AddTeacher from "./AddTeacher";
import Edit from './Edit'
import View from './View'

export default function Student() {
  let location = useLocation();
  if (location.pathname === "/student/edit") {
    return <Edit />;
  } else if (location.pathname === "/student/view") {
    return <View />;
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
