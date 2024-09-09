import { Component } from "react";
import cookie from "js-cookie"
import "./index.css" 

class AccountDetails extends Component{
    
    state={name:"",Bal:0,number:0}

    componentDidMount(){
        this.Details()
    }

    Details=async()=>{
        const {match}=this.props 
        const {params}=match 
        const {number}=params
        const url=`http://localhost:3000/Details/${number}`
        const options={
            method:"GET"
        }
        const response=await fetch(url,options);
        const dat=await response.json()
        const name=dat[0].name
        const num=dat[0].number 
        const b=dat[0].balance
        console.log(num)
        this.setState({name:name,Bal:b,number:num})

    }

    onWith=()=>{
          const {history}=this.props 
          const {number}=this.state
          cookie.set("AccNum",number,{expires:20})
          history.push("/withdraw")

    }

    onDep=()=>{
        const {history}=this.props 
        const {number}=this.state
        console.log(number)
          cookie.set("AccNum",number,{expires:20})
        history.push("/deposit")
  }


    render(){  
          const {Bal}=this.state
        return(
            <div className="detailss">
             <h1 className="heading11">Available Balance: {Bal}</h1>
             <div className="wd">
             <button className="buttonw" type="button" onClick={this.onWith}>Withdraw</button>
             <button className="buttond" type="button" onClick={this.onDep}>Deposit</button>
             </div>
            </div>
        )
    }
}

export default AccountDetails