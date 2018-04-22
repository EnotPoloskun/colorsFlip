import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, Text } from 'react-native'
import styles from "ColorsFlip/app/styles/level"

class Level extends Component {
  levelStyles() {
    if (this.props.levelNumber <= this.props.lastSolvedRound) {
      return [styles.level, styles[this.props.color]]
    } else if (this.props.levelNumber > this.props.lastSolvedRound + 1) {
      return [styles.level, styles.disabled]
    } else {
      return [styles.level, styles.current]
    }
  }

  textStyles() {
    if (this.props.levelNumber <= this.props.lastSolvedRound + 1) {
      return [styles.levelText]
    } else {
      return [styles.levelText, styles.levelTextDisabled]
    }
  }

  isDisabled() {
    return this.props.levelNumber > this.props.lastSolvedRound + 1
  }

  render() {
    return (
      <TouchableOpacity onPress={() => this.props.loadLevel(this.props.levelNumber)} style={this.levelStyles()} disabled={this.isDisabled()}>
        <Text style={this.textStyles()}>{this.props.levelNumber + 1}</Text>
      </TouchableOpacity>
    )
  }
}

Level.propTypes = {
  lastSolvedRound: PropTypes.number.isRequired,
  levelNumber: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
}

export default Level
