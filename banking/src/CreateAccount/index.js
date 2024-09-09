import {Component} from "react" 
import "./index.css"

class createAccount extends Component{
    state={name:"",type:"",gender:""}

    onName=(event)=>{
           this.setState({name:event.target.value})
    }

    onType=(event)=>{
        this.setState({type:event.target.value})
    }

    onGender=(event)=>{
        this.setState({gender:event.target.value})
    }
   
   onCreate=async()=>{
       console.log("click")
       const {name,gender,type}=this.state
       const num=Math.floor((Math.random()*100000000000)+10000000)
       const url="http://localhost:3000/create"
       const options={
        method:"PUT",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            "name":name,
            "type":type,
            "gender":gender,
            "number":num,
            "Balance":0
        })
       }
       const response=await fetch(url,options)
       const data=await response.json()
       if(response.ok===true){
        const {history}=this.props 
        history.push("/creations")
       }
       console.log(data)
   }

    render(){
        return(
            <div className="createAccount">
                <div className="selecting">
                <h1>Create Account</h1>
                <div>
                <label className="label" htmlFor="account-type">Account Type</label>
                <select onChange={this.onType} name="Account Type" id="account-type" className="in" placeholder="account">
                    <option value="savings">
                        Savings
                    </option>
                    <option value="fixed">
                        Fixed
                    </option>
                    <option value="business">
                        Business
                    </option>
                </select>
                </div>
                <div>
                    <label className="label" htmlFor="name">Name:</label>
                    <input onChange={this.onName} type="text" placeholder="Name" id="name" className="in"/>
                </div>
                <div className="s1">
                <input onChange={this.onGender} type="radio" name="male" value="male" id="radio" className="inr"/>
                <label htmlFor="radio" className="l">Male</label>
                <input onChange={this.onGender} type="radio" name="male" value="female" id="radio2" className="inr"/>
                <label htmlFor="radio2" className="l">Female</label>
                <input onChange={this.onGender} type="radio" name="male" value="others" id="radio3" className="inr"/>
                <label htmlFor="radio3" className="l">Others</label>
                </div>
            </div>
            <button type="button" onClick={this.onCreate} className="createButton">Create</button>
                </div>
        )
    }
}

 export default createAccount