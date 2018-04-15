/* eslint-disable import/prefer-default-export */
import { Navigation } from 'react-native-navigation';
import GameLevel from './gameLevel';

const defaultNavigationStyles = {
  statusBarHidden: true,
  navBarHidden: true,
}

const registerScreen = (name, component, store, Provider) => {
  component.navigatorStyle = defaultNavigationStyles
  Navigation.registerComponent(name, () => component, store, Provider)
}

export function registerScreens(store, Provider) {
  registerScreen('game.Level', GameLevel, store, Provider)
}
