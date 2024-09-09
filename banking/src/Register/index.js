
import {Component} from "react"


import "./index.css"

class Register extends Component{

    state={username:"",password:"",para:false,status:false}
     
    onUsername=(event)=>{
        this.setState({username:event.target.value})
    }
    onPassword=(event)=>{
        this.setState({password:event.target.value})
    }

    RegisterButton=async ()=>{
        const url="http://localhost:3000/register"
        const {username,password}=this.state 
        const options={
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                "username":username,
                "password":password
            })
        }
        const response=await fetch(url,options)
        const data=await response.json()
        if(data.success==="success"){
            const {history}=this.props 
            history.replace("/login")
        }else{
            this.setState({para:"true"})
        }
    }

    


    render(){

        const {username,password,para,status}=this.state
    return(
    <div className="main-cont">
        <div className="login-cont">
            <h1 className="heading">Login</h1>
            <input value={username} className="input" onChange={this.onUsername} type="text" placeholder="UserName"/> 
            <input value={password} className="input" onChange={this.onPassword} type="password" placeholder="Password"/>
    
            {para?(<p className="errPara">username already exists</p>):("")}
            {status?(<p className="errPara">UserName NotFound</p>):("")}
            
            <h1 className="uuu">Not an User..?</h1>
            <button onClick={this.RegisterButton} className="r-b" type="button">Register</button>
        </div>
    </div>
)
}
}

export default Register