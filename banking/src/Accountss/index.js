import { Component } from "react";
import DataAccount from "../DataAccount";
import "./index.css"


 

class Accountss extends Component{

    state={Data:[]}
     
    componentDidMount(){
        this.fetchAccounts()
    }
    
    fetchAccounts=async()=>{
        const url="http://localhost:3000/acc"
        const options={
            method:"GET",
            
        }
        const response=await fetch(url,options)
        const data=await response.json()
        console.log(data);
        this.setState({Data:data})
     }


    render(){
        const {Data}=this.state
        
        return(
            <div className="accc">
                <h1 className="heading11">YOUR ACCOUNTS</h1>
                <ul className="mai">
                    {
                        Data.map((i)=>(
                            <DataAccount key={i.number} datt={i}/>
                        ))
                    }
                </ul>
                
            </div>
        )
    }
}

export default Accountss
