import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Screen/Nav/Navbar";
import Footer from "./Components/Screen/Footer/Footer";
import AllRoutes from "./AllRoutes";
import { useLocation } from "react-router-dom";

function App() {
  //use This location for conditional rendering in left and right panel
  let location = useLocation();

  return (
    <>
      <div className="App">
        <div className="sticky-top mb-2">
          <Navbar />
        </div>

        <div className="container-fluid ">
          <div className="row">
            <div className="col-md bg-primary mr-1">
            </div>
            <div className="col-md-8">
              <AllRoutes />
            </div>
            <div className="col-md bg-primary ml-1">right pannel</div>
          </div>
        </div>
        <div className="sticky-bottom mt-2">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
