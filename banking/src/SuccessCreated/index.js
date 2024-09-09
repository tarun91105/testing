import {Component} from "react" 
import {withRouter} from "react-router-dom"
import "./index.css"

class SuccessCreated extends Component{

    Created=()=>{
        const {history}=this.props
        history.replace("/accountss")
    }

    render(){
        return(
            <div  className="main-contt">
                <img className="s" src="https://i.ibb.co/6nLqD9z/IMG-6484.jpg" alt="dv"/>
                <h1>Successfully Created</h1>
                <button className="sButton" onClick={this.Created} type="button">My Accounts</button>
            </div>
        )
    }
}

export default withRouter(SuccessCreated)