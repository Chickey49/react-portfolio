import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import 'react-bootstrap'
import HomeComponent from './components/home';
import AboutComponent from './components/about'
import PortfolioComponent from './components/portfolio';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
    <Switch>
        <Route exact path='/home' component={HomeComponent} />
        <Route exact path='/about' component={AboutComponent} />
        <Route exact path='/portfolio' component={PortfolioComponent} />
    </Switch>
</Router>
  );
}

export default App;
