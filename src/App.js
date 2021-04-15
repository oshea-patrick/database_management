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

function App() {
  return (
    <div className="App">
      <Router>
        <Banner />
        <Switch>
          <Route path='/' exact={true} component={Home} />
          <Route path='/home' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/signup' component={Signup} />
          <Route path='/login' component={Login} />
          <Route path='/inventory' component={Inventory} />
          <Route path='/reservations' component={Reservations} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
