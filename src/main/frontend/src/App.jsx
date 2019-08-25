import React, {Component} from 'react';
import Theme from './Theme.jsx';
import StartPage from './StartPage.jsx';
import stores from './store';
import {Provider} from "mobx-react";

class App extends Component {

  render() {
    return (
      <Provider  {...stores}>
        <StartPage/>
      </Provider>
    )
  }
}

export default Theme(App);