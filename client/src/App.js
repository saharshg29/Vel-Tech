import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Screen/Nav/Navbar";
import { Route, Routes } from "react-router-dom";
import SignUp from "./Components/Screen/SignUp/SignUp";
import SignIn from "./Components/Screen/SignIn/SignIn";
import Footer from "./Components/Screen/Footer/Footer";
import Admin from "./Components/Admin/Admin";
import AddStudent from "./Components/Admin/AddStudent";
import AddSubject from "./Components/Admin/AddSubject";
import AddTeacher from "./Components/Admin/AddTeacher";


function App() {
  return (
    <div className="App">
      <div className="sticky-top mb-2">
        <Navbar />
      </div>

      <Routes>
        <Route exact path="/admin" element={<Admin />}></Route>
        <Route exact path="/signin" element={<SignIn />}></Route>
        <Route exact path="/add-student" element={<AddStudent />}></Route>
        <Route exact path="/add-teacher" element={<AddTeacher />}></Route>
        <Route exact path="/add-subject" element={<AddSubject />}></Route>
      </Routes>



      <Footer />
    </div>
  );
}

export default App;
