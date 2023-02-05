
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Base from "../Base/Base";
import { loginData } from "./LoginData";

const LoginPg =  () => {
    const [data,setData] = useState(loginData)
    const [loginName,setLoginName] = useState("")
    const [password,setPassword] = useState("")
    const [error,setError] = useState(false)
    const history = useHistory();
const loginStudents = ()=>{
    if(loginName === data[0].name && password === data[0].password){
        localStorage.setItem("username", loginName)
        setError(false)
        history.push("/students")
    }
    else{
        setError(true)
    }
}

    return(
            <div className="loginStyle">
                <h1 style={{marginBottom:"30px"}}> 🙂 WELCOME TO STUDENTS APP 🙂</h1>
                <Form className="loginForm">
                <div className="loginData">
                <h5>Username : selva</h5>
                <h5>Password : 1234</h5>
                </div>
                <Form.Label>
                    <Form.Label className='loginLabel'>USERNAME</Form.Label><h1>⬇</h1>
                    <Form.Control
                        className='formSty'
                        placeholder="Username"
                        type="text" onChange={(e)=>setLoginName(e.target.value)} value = {loginName}
                    />
                    <Form.Label className='loginLabel'>PASSWORD</Form.Label><h1>⬇</h1>
                    <Form.Control
                        className='formSty'
                        placeholder="Password"
                        type="password" onChange={(e)=>setPassword(e.target.value)} value = {password}
                    /> <br/><br/>
                    <Button onClick={loginStudents} className="loginBtn" variant="success">Login</Button>
                    {error ?
                    <h5 style={{color:"red"}}>Wrong Credentials</h5> : ""}
                </Form.Label>
                </Form>
            </div>
    )
}

export default LoginPg;