import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import SignUp from "./Components/Screen/SignUp/SignUp";
import SignIn from "./Components/Screen/SignIn/SignIn";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="containers">
        <div className="left"></div>
        <div className="content">
          <Routes>
            <Route exact path="/signup" element={<SignUp />}></Route>
            <Route exact path="/signin" element={<SignIn />}></Route>
            {/* <Route exact path="/signup" element={<SignUp />}></Route> */}
          </Routes>
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
}

export default App;
