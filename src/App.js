import './App.css';
import Home from './Home'
import Navbar from './Navbar';
import AddBlog from './AddBlog';
import SingleBlogPage from './SingleBlog';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact><Home /></Route>
          <Route path="/addBlog" exact><AddBlog /></Route>
          <Route path="/blogs/:id" component={SingleBlogPage}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
