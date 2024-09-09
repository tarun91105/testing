import {Component} from "react"
import {Redirect} from "react-router-dom"
import {v4 as uuidv4} from "uuid" 
import Cookie from "js-cookie"
import Navbar from "../Navbar"
import TypeDisplay from "../TypeDisplay"
import "./index.css"

const accountList=[
    {"account":"Create Account","type":"createAccount"},
    {"account":"My Accounts","type":"accountss"},
    {"account":"Online Banking","type":"online"},
    {"account":"Debit Card","type":"debit"},
    {"account":"Loans","type":"loan"},
     {"account":"Mpassbook","type":"transactions"}
]


class Home extends Component{
    render(){
          
        const jwt=Cookie.get("jwt_token");
        if(jwt!=="success"){
            return <Redirect to="/login"/>
        }

        return(
            <div className="Home-Banking">
                <Navbar/>
                <div className="types-cont">
                    {
                        accountList.map((eachItem)=>(
                            <TypeDisplay key={uuidv4()} item={eachItem}/>
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default Home