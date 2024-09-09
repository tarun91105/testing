import { Component } from "react"; 
import Cookie from "js-cookie"
import {Link,withRouter} from "react-router-dom"
import { BsBank2 } from "react-icons/bs";
import { AiOutlineLogout } from "react-icons/ai";
import "./index.css"

class Navbar extends Component{

    LogOut=()=>{
        const {history}=this.props 
        Cookie.remove("jwt_token")
        history.replace("/login")
    }

    render(){
        return(
            <div className="navbar">
                  <div className="logo-cont">
                  <BsBank2 className="icon"/>
                  <h1 className="head">National Bank of India</h1>
                  </div>
                  <div className="features">
                      <Link to="/about" className="nav-link">
                        About
                      </Link>
                      <Link to="/transactions" className="nav-link">
                        Transactions
                      </Link>
                      <Link to="/about" className="nav-link">
                        Contact Us
                      </Link>
                      <Link to="" className="nav-link">
                        <button type="button" className="btn" onClick={this.LogOut}>
                        <AiOutlineLogout className="log-out"/>
                        </button>
                      </Link>
                  </div>
            </div>
        )
    }
}



export default withRouter(Navbar)