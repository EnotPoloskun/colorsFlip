import React, { Component } from "react"
import PropTypes from "prop-types"
import { View, StatusBar } from 'react-native'
import { connect } from 'react-redux'
import { loadLevel } from '../../actions/field'
import styles from "../../styles/gameLevel"
import GameField from "../../containers/gameField"
import GameActions from "../../containers/gameActions"
import CompleteModal from "../completeModal"

class GameLevel extends Component {
  componentWillMount() {
    this.props.loadLevel(this.props.levelNumber)
  }

  loadNextLevel() {
    this.props.navigator.push({
      screen: 'game.Level',
      passProps: {
        levelNumber: this.props.levelNumber + 1,
      },
      animationType: 'slide-horizontal'
    });
  }

  render() {
    return (
      <View style={styles.gameLevel}>
        <CompleteModal loadNextLevel={() => this.loadNextLevel()} />
        <GameField/>
        <GameActions/>
      </View>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  loadLevel: (number) => dispatch(loadLevel(number))
})

GameLevel.propTypes = {
  levelNumber: PropTypes.number.isRequired,
  navigator: PropTypes.object
};

export default connect(null, mapDispatchToProps)(GameLevel)
