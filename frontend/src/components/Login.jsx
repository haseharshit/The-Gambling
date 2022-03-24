import React, { useState } from "react";
import axios from "axios"
function Login() {
    
    const [data, setData]=useState({
        username:"",
        password:""
    })
    const [inside, setInside]= useState(false);
function changeData(event){
    const {name, value}=event.target
    //console.log(value);
    setData(prev=>({
        ...prev,
        [name]: value
    }))
    //console.log(data)
}
function loginUser(event){
    event.preventDefault();
    
    axios.post("http://localhost:4000/app/login", data)
    .then(res=>{
        console.log(res);
        setInside(true);
    })
    .catch(error=>{
        
        setInside(false);
    })

    setData({
        username:"",
        password:""
    })
    // setSign(true);

    

}
  return (
    <form className="form" onSubmit={loginUser}>

 
        {/* <input name="email" type="email" placeholder="Email" onChange={changeData} value={data.email} /> */}
      <input name="username"type="text" placeholder="Username" onChange={changeData} value={data.username}/>
      <input name="password" type="password" placeholder="Password" onChange={changeData} value={data.password}/>

      <button type="submit">Login</button>
      {inside && (
          <h1>{inside}</h1>
      )}
    </form>
  );
}

export default Login;
