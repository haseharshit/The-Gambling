import React, { useState } from "react";
import axios from "axios"
function Form(props) {
    console.log(props.type);
    const [data, setData]=useState({
        name:"",
        username:"",
        email:"",
        password:""
    })
    const [sign, setSign]= useState(false)

    const [inside, setInside]= useState("Error");
function changeData(event){
    const {name, value}=event.target
    //console.log(value);
    setData(prev=>({
        ...prev,
        [name]: value
    }))
    //console.log(data)
}
function registerUser(event){
    event.preventDefault();
    
    var nameRegex = /^[a-zA-Z\-]+$/;
    var usernameRegex = /^[a-zA-Z0-9]+$/;
    if(data.name.match(nameRegex)  && data.username.match(usernameRegex) ){

        axios.post("http://localhost:4000/app/signup", data)
        .then(res=>{
            //console.log(res.data);
            setSign(true);
            setInside(res.data);
        })
        .catch(error=>{
            setSign(false);
            setInside("Error");
        })

        setData({
            name:"",
            username:"",
            email:"",
            password:""
        })
        // setSign(true);
    }
    else if(!data.name.match(nameRegex)){
        var name="name"
        setData(prev=>({
            ...prev,
            [name]: ""
        }))
    }
    else{
        var name="username"
        setData(prev=>({
            ...prev,
            [name]: ""
        }))
    }
    

}
  return (
    <form className="form" onSubmit={registerUser}>
     
        <input name ="name" type="text" placeholder="FullName" onChange={changeData} value={data.name}/>

        <input name="email" type="email" placeholder="Email" onChange={changeData} value={data.email} />

      <input name="username"type="text" placeholder="Username" onChange={changeData} value={data.username}/>
      <input name="password" type="password" placeholder="Password" onChange={changeData} value={data.password}/>

      <button type="submit">{(props.type || sign) ? "Login" : "Register"}</button>
      {sign && (
          <h1>{inside}</h1>
      )}
    </form>
  );
}

export default Form;
