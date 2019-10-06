import React, { Suspense, lazy } from 'react';
import Menu from './Menu/Menu'
import Home from './Home/Home'
import List from './List/List'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NoAccess from './NoAccess/NoAccess';
import PrivateRoute from './Common/PrivateRoute/PrivateRoute';
import { ColorContext } from './Contexts/ColorContext';


const Help = lazy(() => import('./Help/Help'));


class App extends React.Component {
  render() {

    const Avatar = <div className="center">
      <img className="avatar" src="/user_headphones.png"></img>
    </div>

    const { Provider } = ColorContext;

    return (
      <div>
        <Router>
          <Menu avatar={Avatar} />
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Provider value={{ firstColor: 'blue-background', secondColor: 'yellow-background' }}>
                <Route path="/help/:id" component={Help}></Route>
              </Provider>
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



