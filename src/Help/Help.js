import React, { Component } from 'react'
import './Help.less'
import Square from './Square/Square'
import Details from './Details';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import errorBoundary from '../Common/ErrorBoundary/ErrorBoundary'


function Help({ match, location }) { 

    const SquareErrored = errorBoundary('Something wrong')(Square);

    return (
        <div>
            <h3>ID: {match.params.id}</h3>

            <div>
                <SquareErrored/>
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


