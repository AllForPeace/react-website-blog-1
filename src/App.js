import './App.css';
import Home from './Home'
import Navbar from './Navbar';
import AddBlog from './AddBlog';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact><Home /></Route>
          <Route path="/addBlog" exact><AddBlog /></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
