import { Component} from "react";
import {Link} from "react-router-dom";
import "./index.css" 


class DataAccount extends Component{
    render(){

        const {datt}=this.props
        const {name,type,gender,number}=datt

        return(
            <Link  to={`/Account-Details/${number}`} className="accounts-cont kk">
                <h1>Name: {name}</h1>
                <h1>Account Number:{number}</h1>
                <h1>Account Type: {type}</h1>
                <h1>Gender: {gender}</h1>
            </Link>
            
        )
    }
}

export default DataAccount