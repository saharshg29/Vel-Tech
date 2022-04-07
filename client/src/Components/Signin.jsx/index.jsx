import "./index.scss";

const SignIn = () => {
  return (
    <>
      <div className="SignIn">
          <div className="username">Username: <input type="text" name="Username" id="" /></div>
          <div className="password">Password: <input type="password" name="Password" id="" /></div>
          <div className="button">Log In!</div>
      </div>
    </>
  );
};

export default SignIn;
