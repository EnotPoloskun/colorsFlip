/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Navigation } from 'react-native-navigation';
import configureStore from './app/store/configureStore';
import { Provider } from 'react-redux'
import { registerScreens } from './app/components/screens/index';

const store = configureStore()
registerScreens(store, Provider);

export default class App extends Component<Props> {
  constructor(props) {
    super(props)
    Navigation.startSingleScreenApp({
      screen: {
        screen: 'game.Level',
      }
    })
  }
}
