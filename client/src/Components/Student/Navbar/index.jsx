import "./index.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="navbar">
        <div className="veltech">
          <h1>Saharsh Logo</h1>
        </div>
        <div className="menu">
          <ul>
            <li>
              <span onClick={() => navigate("/profile")}>Profile</span>
            </li>
            <li>
              <span onClick={() => navigate("/subject")}>Subject</span>
            </li>
            <li>
              <span onClick={() => navigate("/grades")}>Grades</span>
            </li>
            <li>
              <span className="buttonlogout" onClick={() => navigate("/signin")}>Log Out</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
