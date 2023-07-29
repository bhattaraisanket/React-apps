import React from "react";
import "./Sign.css";
import Admin from "./AdminLogin"

export default function Sign() {
  return (
    <section className="studentLogin">
      <h1>Student Login</h1>
      <input type="email" name="Email" placeholder="Email" required />
      <input type="password" name="Password" placeholder="Password" required />
      <button type="submit">Login</button>
      <a href="#">Forgot Password?</a>
    </section>
  );
}
