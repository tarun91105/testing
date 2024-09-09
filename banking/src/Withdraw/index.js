import { Component } from "react";
import Cookie from "js-cookie"
import "./index.css" 

class Withdraw extends Component{
    
    state={amount:0,a:0,numb:0}

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
        const urll="http://localhost:3000/edit/withdraw"
        const optionss={
            method:"PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                "bal":parseInt(amount)-parseInt(a),
                "n":numb
            })
        }
        const res=await fetch(urll,optionss)
        const ds=await res.json()
        console.log(ds)
        this.setState((prevState)=>({amount:prevState.amount-a}))
    }

    render(){
       return(
        <div>
        <h1>Deposit</h1>
        <label htmlFor="am">Enter Amount</label>
        <input type="text" onChange={this.onAm} placeholder="Enter Amount" id="am"/>
        <button type="button" onClick={this.onAmount}>Withdraw</button>
    </div>
       )
    }
}


export default Withdraw