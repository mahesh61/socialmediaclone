import React from "react";
import { Link } from "react-router-dom";
import "./Login.scss";

const Login = () => {
  return (
    <div className="Login">
      <div className="card">
        <div className="left">
          <h1>Well Come</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, harum
            sapiente reprehenderit id temporibus,
          </p>
          <span>Don't have a account?</span>
          <Link to="/socialmediaclone/register">
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="User name.." />
            <input type="password" placeholder="Password.." />
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
