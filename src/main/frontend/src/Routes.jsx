import React, {Component} from 'react';
import {Route, Switch} from 'react-router';
import UnderConstruction from "./pages/UnderConstruction.jsx"


export default class Routes extends Component {

  render() {

    return (
      <Switch>
        <Route exact path="/" component={UnderConstruction}/>
        <Route exact path="/address" component={UnderConstruction}/>
        <Route exact path="/dashboard" component={UnderConstruction}/>
        <Route exact path="/apartments" component={UnderConstruction}/>
        <Route exact path="/municipality" component={UnderConstruction}/>
        <Route exact path="/coordinates" component={UnderConstruction}/>
      </Switch>
    )

  }
}