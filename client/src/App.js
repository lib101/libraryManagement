import React from 'react';
import SignIn from './components/SignIn'
import Home from './components/Home'
import AddBook from './components/AddBook'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="app">
          <Switch>
            <Route path="/" exact component={SignIn}/>
            <Route path="/home" exact component={Home}/>
            <Route path="/addbook" exact component={AddBook}/>
          </Switch>
      </div> 

    </Router>
  );
}

export default App;
