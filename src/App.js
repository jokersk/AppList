import React, { Component } from 'react';
import HomePage from "./container/homePage"
import { Provider } from 'react-redux'
import store from "./store"
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <HomePage />
        </div>
      </Provider >
    );
  }
}

export default App;
