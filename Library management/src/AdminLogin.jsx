import React from "react";
import "./Sign.css";

export default function Admin() {
  return (
    <section className="studentLogin adminLogin">
      <h1>Admin Login</h1>
      <input type="email" name="Email" placeholder="Email" required />
      <input type="password" name="Password" placeholder="Password" required />
      <button type="submit">Login</button>
      <a href="#">Forgot Password?</a>
    </section>
  );
}
