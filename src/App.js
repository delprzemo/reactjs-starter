import React, { Suspense, lazy } from 'react';
import Menu from './Menu/Menu'
import Home from './Home/Home'
import List from './List/List'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NoAccess from './NoAccess/NoAccess';
import PrivateRoute from './Common/PrivateRoute/PrivateRoute';


const Help = lazy(() => import('./Help/Help'));


class App extends React.Component {
  render() {

    const Avatar = <div className="center">
      <img className="avatar" src="/user_headphones.png"></img>
    </div>

    return (
      <div>
        <Router>
          <Menu avatar={Avatar}/>

          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route path="/help/:id" component={Help}></Route>
              <PrivateRoute path="/list" component={List}></PrivateRoute>
              <Route path="/noAccess"><NoAccess /></Route>
              <Route path="/"><Home /></Route>
            </Switch>
          </Suspense>
        </Router>
      </div>
    );
  }
}

export default App;



