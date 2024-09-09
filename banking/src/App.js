
import { BrowserRouter,Route,Switch} from "react-router-dom";
import Accountss from "./Accountss"
import createAccount from "./CreateAccount";
import Login from "./Login"
import Home from "./Home"
import './App.css';
import Deposit  from "./Deposit";
import Withdraw from "./Withdraw";
import AccountDetails from "./Account-Details"
import SuccessCreated from "./SuccessCreated";
import Loans from "./Loans";
import Transactions from "./Transactions";
import SrryLoans from "./SrryLoans";
import DebitCard from "./DebitCard";
import Register from "./Register";

const App=()=>(
  <BrowserRouter>
   <Switch>
    <Route exact path="/Account-Details/:number" component={AccountDetails}/>
    <Route exact path="/accountss" component={Accountss}/>
    <Route exact path="/createAccount" component={createAccount}/>
   <Route exact path="/" component={Home}/>
   <Route exact path="/login" component={Login}/>
   <Route exact path="/creations" component={SuccessCreated}/>
   <Route exact path="/withdraw" component={Withdraw}/>
   <Route exact path="/deposit" component={Deposit}/>
   <Route exact path="/loan" component={Loans}/>
   <Route exact path="/srryloans" component={SrryLoans}/>
   <Route exact path="/transactions" component={Transactions}/>
   <Route exact path="/debit" component={DebitCard}/>
   <Route exact path="/register" component={Register}/>
   </Switch>
  </BrowserRouter>
)


export default App