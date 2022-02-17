import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Screen/Nav/Navbar";
import Footer from "./Components/Screen/Footer/Footer";
import AllRoutes from "./AllRoutes";
import Left from "./Components/Left/Left";
import Right from "./Components/Right/Right";
function App() {
  return (
    <>
      <div className="sticky-top mb-2">
        <Navbar />
      </div>
      <div className="row">
        <div className="col-md m-1 bg-danger ">
          <Left></Left>
        </div>
        <div className="col-md-8">
          <AllRoutes />
        </div>
        <div className="col-md m-1 bg-info">
          <Right></Right>
        </div>
      </div>
      <div className="sticky-bottom mt-2">
        <Footer />
      </div>
    </>
  );
}

export default App;
