import React from "react";
import { Route, Routes } from "react-router-dom";
import AddStudent from "./AddStudent";
import AddTeacher from "./AddTeacher";
import AddSubject from "./AddSubject";
export default function Routing() {
  return (
    <Routes>
      <Route exact path="/student" element={<AddStudent />} />
      <Route path="/admin/teacher" element={<AddTeacher />} />
      <Route path="/admin/student" element={<AddSubject />} />
      
    </Routes>
  );
}
