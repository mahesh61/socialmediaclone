import React from "react";
import { Link } from "react-router-dom";
import "./register.scss";

const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Well Come</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, harum
            sapiente reprehenderit id temporibus,
          </p>
          <span>Do you have a account?</span>
          <Link to="/socialmediaclone/login">
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="User name.." />
            <input type="email" placeholder="email .." />
            <input type="password" placeholder="Password.." />
            <input type="text" placeholder="Name.." />
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
