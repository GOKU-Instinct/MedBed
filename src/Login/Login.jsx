import React from "react";
import "./Login.css";

function Login() {
  return (
    <div class="container">
      <section id="content">
        <form action="">
          <h1>Login to MedBed</h1>
          <div>
            <input
              type="text"
              placeholder="Username (Email ID)"
              required=""
              id="username"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              required=""
              id="password"
            />
          </div>
          <div>
            <input type="submit" value="Log in" />
            <a href="#">Forgot your password?</a>
            <a href="#">Register</a>
          </div>
        </form>
      </section>
    </div>
  );
}

export default Login;
