import React from 'react';
import Menu from './Menu/Menu'
import Help from './Help/Help'
import Home from './Home/Home'
import List from './List/List'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Menu />

          <Switch>
            <Route path="/help/:id" component={Help}></Route>
            <Route path="/list"><List /></Route>
            <Route path="/"><Home /></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;



