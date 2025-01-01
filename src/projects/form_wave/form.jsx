import { useState } from "react";
import "../form_wave/form.css";

const Form = () => {
  let email = "Email"
    .split("")
    .map((letter, idx) => (
      <span style={{ transitionDelay: `${idx * 50}ms` }}>{letter}</span>
    ));

  let password = "Password"
    .split("")
    .map((letter, idx) => (
      <span style={{ transitionDelay: `${idx * 50}ms` }}>{letter}</span>
    ));

  return (
    <div className="flex justify-center items-center h-screen bg-steelblue font-muli">
      <div className="m-[10px] bg-[rgba(0,0,0,0.4)] rounded-md p-8 w-[400px] text-white text-center">
        <h1 className="text-3xl mb-5 font-bold">Please Login</h1>
        <form>
          <div className="form-field">
            <input type="email" id="email" required />
            <label>{email}</label>
          </div>

          <div className="form-field">
            <input type="password" id="password" required />
            <label>{password}</label>
          </div>
        </form>
        <button className="btn">Login</button>
        <p>
          Don't have an account? <a href="#">Register</a>
        </p>
      </div>
    </div>
  );
};

export default Form;
