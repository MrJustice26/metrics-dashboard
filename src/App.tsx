import './App.scss';
import {NavBar} from './components';
import Search from './components/dashboard/Search';

const App: React.FC = () => {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Search />
    </div>
  );
}

export default App;
