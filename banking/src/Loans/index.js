import { Component } from "react";
import {v4 as uuidv4} from "uuid";
import DiffLoans from "../DiffLoans";
import "./index.css" 

const LoansList=[
    "Home Loans",
    "Business Loans",
    "Gold Loans",
    "Vehicle Loans",
    "Shop Loans",
    "Education Loans",
    "CreditCard Loans",
    "Personal Loans"
]

class Loans extends Component{

    render(){
        return(
            <div className="main-loan">
                <h1>Available Loans</h1>
                <ul className="Loanss">
                    {
                        LoansList.map((j)=>(
                            <DiffLoans key={uuidv4()} Loan={j}/>
                        ))
                    }
                </ul>
            </div>
        )
    }
}


export default Loans