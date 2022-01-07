import logo from './logo.svg';
import './App.css';
import SavingsAccount from './Components/SavingsAccount';
import { BrowserRouter as Router, Switch, Route, Link, useParams } from "react-router-dom"
import { Navigate } from 'react-router-dom'
import Savings from './Components/Savings';
import Login from './Components/Login';




function App() {


  return (
    
    <Router>
      <Switch>
        <Route exact path="/">
          <div className="App">
          
            <Login/>
          </div>
        </Route>
        <Route exact path="/landingPage">

        <div className="App">
            <h1>Accounts</h1>
            <SavingsAccount name="decker" />
            <Link to="/"><button>Log Out</button></Link>
          </div>
        </Route>

        <Route exact path="/savingsAccount/:id">
          <Savings></Savings>
        </Route>
      </Switch>
    </Router>


  );
}

export default App;
