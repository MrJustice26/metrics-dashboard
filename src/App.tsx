import './App.scss';
import {NavBar} from './components';
import DashboardApp from './components/dashboard/DashboardApp';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import StocksInspector from './components/dashboard/StocksInspector';

const App: React.FC = () => {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Router>
        <Switch>
          <Route path="/" exact>
            <DashboardApp />
          </Route>
          <Route path="/stock/:stock">
            <StocksInspector />
          </Route>
        </Switch>
      </Router>
      
      
    </div>
  );
}

export default App;
