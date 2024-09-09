import { Component } from "react";
import Cookie from "js-cookie"
import "./index.css" 

class Deposit extends Component{
    
    state={amount:0,a:0,numb:0,hist:""}

    componentDidMount(){
          this.getAmount()
    }

    getAmount=async()=>{
        const f=Cookie.get("AccNum");
        const url=`http://localhost:3000/Details/${f}`
        const options={
            method:"GET"
        }
        const response=await fetch(url,options);
        const dat=await response.json()
        const b=dat[0].balance 
        const num=dat[0].number
        console.log(num)
        this.setState({amount:b,numb:num})
    }

    onAm=(event)=>{
         this.setState({a:event.target.value})
    }

    onAmount=async()=>{
        const {a,amount,numb}=this.state 
        if(Number.isInteger(a)){
            console.log(a)
        }
        const urll="http://localhost:3000/edit/balance"
        const optionss={
            method:"PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                "bal":parseInt(a)+parseInt(amount),
                "n":numb
            })
        }
        const res=await fetch(urll,optionss)
        const ds=await res.json()
        console.log(ds)
       
        this.setState((prevState)=>({amount:prevState.amount+a,hist:"/deposi/t"}))
        

    }

    render(){
       return(
        <div className="depo">
        <h1 className="heading11">Deposit</h1>
        <div>
        <label className="i" htmlFor="am">Enter Amount</label>
        <input className="dinp" type="text" onChange={this.onAm} placeholder="Enter Amount" id="am"/>
        </div>
        <button className="buttond" type="button" onClick={this.onAmount}>Deposit</button>
    </div>
       )
    }
}


export default Deposit