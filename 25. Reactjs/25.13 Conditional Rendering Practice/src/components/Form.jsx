import React from "react";
import Button from "./Button";

function Form({registered}) {
  return (
    <form className="form">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      {!registered && <input type="password" placeholder="Confirm Password" />}
      {registered ? <Button text="Login" /> : <Button text="Register" />}
    </form>
  );
}

export default Form;
