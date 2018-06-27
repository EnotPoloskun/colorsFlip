import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, StatusBar } from 'react-native'
import { connect } from 'react-redux'
import { loadLevel, loadRewardAd } from 'ColorsFlip/app/actions/field'
import styles from 'ColorsFlip/app/styles/gameLevel'
import GameField from 'ColorsFlip/app/containers/gameField'
import GameActions from 'ColorsFlip/app/containers/gameActions'
import CompleteModal from 'ColorsFlip/app/components/completeModal'
import MenuModal from 'ColorsFlip/app/components/menuModal'
import TopMenu from 'ColorsFlip/app/components/topMenu'

class GameLevel extends Component {
  componentWillMount() {
    this.props.loadLevel(this.props.levelNumber)
    this.props.loadRewardAd()
  }

  loadNextLevel() {
    this.props.navigator.push({
      screen: 'game.Level',
      passProps: {
        levelNumber: this.props.levelNumber + 1,
      },
      animationType: 'slide-horizontal'
    })
  }

  render() {
    return (
      <View style={styles.gameLevel}>
        <StatusBar hidden={true}/>
        <TopMenu/>
        <CompleteModal loadNextLevel={() => this.loadNextLevel()} />
        <MenuModal navigator={this.props.navigator} />
        <GameField/>
        <GameActions/>
      </View>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  loadLevel: (number) => dispatch(loadLevel(number)),
  loadRewardAd: () => dispatch(loadRewardAd()),
})

GameLevel.propTypes = {
  levelNumber: PropTypes.number.isRequired,
  navigator: PropTypes.object
};

export default connect(null, mapDispatchToProps)(GameLevel)
