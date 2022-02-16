import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Screen/Nav/Navbar";
import Footer from "./Components/Screen/Footer/Footer";
import AllRoutes from "./AllRoutes";
import { useLocation } from "react-router-dom";

function App() {
  var location = useLocation();

  return (
    <>
      <div className="App">
        <div className="sticky-top mb-2">
          <Navbar />
        </div>
        <AllRoutes />
      </div>

      <div className="sticky-bottom mt-2">
        <Footer />
      </div>
    </>
  );
}

export default App;
