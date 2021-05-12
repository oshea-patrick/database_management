import logo from './logo.svg';
import './styles/App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Home.js'
import Banner from './components/Banner';
import About from './components/About';
import Signup from './components/Signup';
import Login from './components/Login';
import Inventory from './components/Inventory';
import Reservations from './components/Reservations';
import React, { useState, useEffect } from 'react';

function App() {
  const [name,setName] = useState("User")
  const [email, setEmail] = useState()
  const [loggedIn, setLogin] = useState(false)
  console.log("reloaded")

  return (
    <div className="App">
      <Router>
        <Banner name={name}/>
        <Switch>
          <Route path='/' exact={true} component={Home} />
          <Route path='/home' render={(props) => (
            <Home {...props} email={email} name={name} /> )}/>
          <Route path='/about' render={(props) => (
            <About {...props} email={email} name={name} loggedin={loggedIn}/> )}/>
          <Route path='/signup' component={Signup} />
          <Route path='/login' render={(props) => (
            <Login {...props} setEmail={setEmail} setName={setName} setLogin={setLogin}/>
          )}/>
          <Route path='/inventory' render={(props) => (
            <Inventory {...props} email={email} name={name} loggedin={loggedIn} />
          )}/>
          <Route path='/reservations' render={(props) => (
            <Reservations {...props} email={email} name={name} loggedin={loggedIn}/>
          )}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
