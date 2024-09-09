import { Component } from "react";
import "./index.css" 


class DebitCard extends Component{
    render(){
        return(
            <div className="debit-card">
                <h1>Debit Card</h1>
                <div className="ccard">
                    <img className="smart-chip" src="https://i.ibb.co/6wvbhmf/IMG-6495.jpg" alt="chip"/>
                    <img className="wifi" src="https://i.ibb.co/6bBWvqH/IMG-6496.jpg" alt="wifi"/>
                    <h1 className="num">0938 7895 0546 0584</h1>
                    <img className="master-card" src="https://i.ibb.co/mTCK4Db/IMG-6497.jpg" alt="master"/>
                    <h1 className="valid">07/2028</h1>
                </div>
                
            </div>
        )
    }
}

export default DebitCard