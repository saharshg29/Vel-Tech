import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Screen/Nav/Navbar";
import { Route, Routes } from "react-router-dom";
import SignUp from "./Components/Screen/SignUp/SignUp";
import SignIn from "./Components/Screen/SignIn/SignIn";
import Footer from "./Components/Screen/Footer/Footer";

function App() {
  return (
    <div className="App">
      <div className="sticky-top mb-2">
        <Navbar />
      </div>

      <div className="container-fluid m">
        <div className="row">
          <div className="col-md bg-primary mr-1">
            this is Left navigation panel{" "}
          </div>
          <div className="col-md-8 ">
            <Routes>
              <Route exact path="/signup" element={<SignUp />}></Route>
              <Route exact path="/signin" element={<SignIn />}></Route>
            </Routes>
          </div>
          <div className="col-md bg-primary ml-1">
            This is Right navigation panel
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
