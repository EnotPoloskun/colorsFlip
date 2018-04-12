/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import GameField from "./app/containers/gameField"
import GameActions from "./app/containers/gameActions"
import CompleteModal from "./app/components/completeModal"
import reducer from "./app/reducers/field"
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar,
} from 'react-native'

type Props = {};
let initialState = {
  initialField: [
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1]
  ],
  field: [
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1]
  ],
  colors: [1, 2, 3],
  history: [],
  solution: [{row: 1, column: 1}, { row: 2, column: 2 }, { row: 0, column: 0}],
  highlighted: undefined,
  userEventsDisabled: false,
  isGameSolved: false
}

let store = createStore(reducer, initialState, applyMiddleware(thunk))

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
          <CompleteModal />
          <GameField/>
          <GameActions/>
        </View>
      </Provider>
    );
  }
}
