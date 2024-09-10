import { Component } from "react";
import ListTrans from "../ListTrans";
import {v4 as uuidv4} from "uuid"
import "./index.css" 

class Transactions extends Component{

    state={D:[]}

  componentDidMount(){
    this.fetchTransactions()
  }

  fetchTransactions=async()=>{
    const url=`http://localhost:3000/transactions`
    const options={
        method:"GET",
        
    }
    const resposne=await fetch(url,options);
    const data=await resposne.json()
    console.log(data)
    this.setState({D:[...data]})

  }

    render(){
        const {D}=this.state
        console.log(D)
        return(
          <div className="transs">
            <h1 className="heading11">Transactions</h1>
            <ul className="mait">
                {
                    D.map((each)=>(
                        <ListTrans key={uuidv4()} item={each}/>
                    ))
                }
            </ul>
          </div>
        )
    }
}


export default Transactions