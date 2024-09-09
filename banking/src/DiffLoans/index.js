import { Component } from "react";
import {Link} from "react-router-dom"
import "./index.css" 

class DiffLoans extends Component{
    render(){
        const {Loan}=this.props
        return(
            <Link className="diff-loan" to="/srryloans">
                 <h1>{Loan}</h1>
            </Link>
        )
    }
}

export default DiffLoans