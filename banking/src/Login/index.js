
import {Component} from "react"
import Cookie from "js-cookie"

import "./index.css"

class Login extends Component{

    state={username:"",password:"",para:false,status:false}
     
    onUsername=(event)=>{
        this.setState({username:event.target.value})
    }
    onPassword=(event)=>{
        this.setState({password:event.target.value})
    }

    RegisterButton=()=>{
        const {history}=this.props 
        history.replace("/register")
    }

    LoginButton=async()=>{
        const {username,password}=this.state 
        if(username.length===0||password.length===0){
            this.setState({para:true})
        }else{
            const url="http://localhost:3000/login"
            const options={
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({
                "username":username,
                "password":password
            })
            
        }
        const response=await fetch(url,options)
        const data=await response.json()
        console.log(response)
        if(response.ok===true){
            const {history}=this.props
            this.setState({para:false,status:false}) 
            Cookie.set('jwt_token',"success",{expires:20})
            history.replace("/")
        }else{
            this.setState({status:true}) 
            console.log(data)
        }
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
    
            {para?(<p className="errPara">please enter valid username or password</p>):("")}
            {status?(<p className="errPara">UserName NotFound</p>):("")}
            <button onClick={this.LoginButton} className="register-button" type="button">Login</button>
            <h1 className="uuu">Not an User..?</h1>
            <button onClick={this.RegisterButton} className="r-b" type="button">Register</button>
        </div>
    </div>
)
}
}

export default Login