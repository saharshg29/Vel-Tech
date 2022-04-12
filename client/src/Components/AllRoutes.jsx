import SignIn from "./Signin";
import SignUp from "./SignUp";
import Student from "./Student";
import { Route, Routes } from "react-router-dom";
export default function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/student" element={<Student />} />
      </Routes>
    </div>
  );
}
