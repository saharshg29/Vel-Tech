import "./index.css";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="SignUp">
        <div className="fields">
          <div className="logo"></div>
          <div className="username">
            Username:
            <input placeholder="Username" type="text" name="Username" id="" />
          </div>

          <div className="password">
            Password:
            <input
              placeholder="Password"
              type="password"
              name="Password"
              id=""
            />
          </div>

          <div className="email">
            Email: <br />{" "}
            <input placeholder="Email" type="email" name="Email" id="" />
          </div>
          <div className="mobilenumber">
            Mobile Number:
            <input
              placeholder="Mobile Number"
              type="number"
              name="Mobile"
              id=""
            />
          </div>

          <div className="button">Sign UP!</div>

          <span onClick={() => navigate("/signin")}>
            Already have an account?? Log In!
          </span>
        </div>
      </div>
    </>
  );
};

export default SignUp;
