import React from "react";
import Google from "./GoogleAuth";

const Login = () => {
  return (
    <div>
      Login
      <form>
        <input type="text" placeholder="Enter your name" required />
        <label>Choose a photo</label>
        <input type="file" required />
        <button>Login</button>
      </form>
      <p>Or</p>
      <Google />
    </div>
  );
};

export default Login;
