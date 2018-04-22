import { Navigation } from 'react-native-navigation'
import GameLevel from 'ColorsFlip/app/components/screens/gameLevel'
import LevelsList from 'ColorsFlip/app/components/screens/levelsList'

const defaultNavigationStyles = {
  statusBarHidden: true,
  navBarHidden: true,
  screenBackgroundColor: '#1b1b35'
}

const registerScreen = (name, component, store, Provider) => {
  component.navigatorStyle = defaultNavigationStyles
  Navigation.registerComponent(name, () => component, store, Provider)
}

export function registerScreens(store, Provider) {
  registerScreen('game.Level', GameLevel, store, Provider)
  registerScreen('game.LevelsList', LevelsList, store, Provider)
}
