import "./index.css";

const SignIn = () => {
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
          <div className="button">Log In!</div>

          <span>Forget Password?</span>
        </div>
      </div>
    </>
  );
};

export default SignIn;
