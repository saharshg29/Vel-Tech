import { Route, Routes } from "react-router-dom";
import SignUp from "./Components/Screen/SignUp/SignUp";
import SignIn from "./Components/Screen/SignIn/SignIn";
import Admin from "./Components/Admin/Admin";
import AddStudent from "./Components/Admin/AddStudent";
import AddSubject from "./Components/Admin/AddSubject";
import AddTeacher from "./Components/Admin/AddTeacher";

import React from "react";

export default function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route exact path="/admin" element={<Admin />}></Route>
        <Route exact path="/signin" element={<SignIn />}></Route>
        <Route exact path="/signup" element={<SignUp />}></Route>
        <Route exact path="/admin/add-student" element={<AddStudent />}></Route>
        <Route exact path="/admin/add-teacher" element={<AddTeacher />}></Route>
        <Route exact path="/admin/add-subject" element={<AddSubject />}></Route>
      </Routes>
    </div>
  );
}
