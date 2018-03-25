/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import GameField from "./app/containers/gameField"
import GameActions from "./app/containers/gameActions"
import reducer from "./app/reducers/field";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar,
} from 'react-native';

type Props = {};
let initialState = {
  field: [
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1]
  ],
  colors: [1, 2, 3],
  history: [],
}

let store = createStore(reducer, initialState)

let container = {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#2c3e50',
}

export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <View style={container}>
          <StatusBar hidden={true} />
          <GameField/>
          <GameActions/>
        </View>
      </Provider>
    );
  }
}
