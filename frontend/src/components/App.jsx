import React, { useState } from "react";
import Form from "./Form";
import Login from "./Login"

//var pageType= register ? "Register":"Login";
function App() {
  const [register, setRegister]= useState(true);
function change(event){
  
  // console.log(register)
  if(event.target.name==="Login")
    setRegister(false)
  else
    setRegister(true)
}
  return (
    <div className="container">
      <button name="Register" onClick={change}>Register</button>
      <button name="Login" onClick={change}>Login</button>
      <br></br>
      <br></br>
      {
        register?      <Form /> : <Login/>
      }

    </div>
  );
}

export default App;
