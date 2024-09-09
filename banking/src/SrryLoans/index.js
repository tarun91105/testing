import { Component } from "react";
import "./index.css" 

class SrryLoans extends Component{


    goHome=()=>{
        const {history}=this.props 
        history.replace("/")
    }

    render(){
        return(
            <div className="srryy">
                <img src="https://t4.ftcdn.net/jpg/02/72/46/31/360_F_272463185_OuDPSH1G4Mx5dxiYNEKNdPZNwAaNpAR3.jpg" alt="sorry"/>
                <h1 className="heading11">Sorry,</h1>
                <h1 className="heading11">Currently We are not providing any Loans</h1>
                <button type="button" className="srrybtn" onClick={this.goHome}>Home</button>
            </div>
        )
    }
}

export default SrryLoans