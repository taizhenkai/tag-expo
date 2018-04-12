import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View
} from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers'
import ReduxThunk from 'redux-thunk'
import Router from './Router';

export default class App extends Component {

  componentWillMount() {
    //do setup for app
  }

  render() {

    const str = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={str}>
        <Router />
      </Provider>
    );
  }
}
