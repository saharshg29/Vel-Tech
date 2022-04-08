import "./index.css";
import { useNavigate, Link } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="SignIn">
        <div className="fields">
          <div className="logo"></div>
          <div className="username">
            Username:{" "}
            <input placeholder="Username" type="text" name="Username" id="" />
          </div>
          <div className="password">
            Password:{" "}
            <input
              placeholder="Password"
              type="password"
              name="Password"
              id=""
            />
          </div>
          <div onClick={() => navigate("/signup")} className="button">
            Log In!
          </div>

          <span onClick={() => navigate("/forgetpass")}>Forget Password?</span>
          <span>
            <Link to="/signup">Don't have an account??</Link>
          </span>
        </div>
      </div>
    </>
  );
};

export default SignIn;
