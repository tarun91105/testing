import { Component } from "react";
import "./index.css" 

class ListTrans extends Component{
    render(){
        const {item}=this.props
        const {method,number,time,amount}=item
        return(
            <div className="accounts-cont22">
                <h1>Method:{method}</h1>
                <h1>Acc Num:{number}</h1>
                <h1>Time: {time}</h1>
                <h1>Amount:{amount}</h1>
            </div>
        )
    }
}

export default ListTrans