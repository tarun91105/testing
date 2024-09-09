import {Component} from "react" 
import {Link} from "react-router-dom"
import "./index.css"

class TypeDisplay extends Component{
    render(){
        const {item}=this.props;
        const {account,type}=item
        return(
           <Link className="main-link" to={`/${type}`}>
            <div className="type-cont">
              <h1>{account}</h1>
            </div>
            </Link>
        )
    }
}


export default TypeDisplay