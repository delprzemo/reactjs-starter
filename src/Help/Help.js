import React, { Component } from 'react'
import './Help.less'
import Square from './Square/Square'
import Details from './Details';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ErrorBoundary from '../Common/ErrorBoundary/ErrorBoundary'


function Help({ match, location }) { 
    return (
        <div>
            <h3>ID: {match.params.id}</h3>

            <div>
                <ErrorBoundary><Square><h1>Hello world</h1></Square></ErrorBoundary>
            </div>

            <div>
                <Router>
                    <Switch>
                        <Route path={`${match.path}/details`}><Details /></Route>
                    </Switch>
                </Router>
            </div>
        </div>
    )
}

export default Help;


