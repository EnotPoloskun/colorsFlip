import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import Level from "ColorsFlip/app/components/level"
import styles from "ColorsFlip/app/styles/page"

class Page extends Component {
  levels() {
    const offset = this.props.pageNumber * 20
    const levelsCount = Math.min(20, this.props.roundsCount - offset)
    const colors = ["green", "orange", "red", "blue"]

    var levels = []
    var shuffledColors = []

    for (var i = 0; i < levelsCount; i++) {
      if (i % 4 == 0) {
        shuffledColors = this.shuffleArray(colors)
      }

      levels.push(
        <Level lastSolvedRound={this.props.lastSolvedRound} levelNumber={offset + i} color={shuffledColors.shift()} loadLevel={this.props.loadLevel} key={i}/>
      )
    }

    return levels
  }

  shuffleArray(arr) {
    let newArr = [...arr]

    for (let i = newArr.length - 1; i > 0; i--) {
        const rand = Math.floor(Math.random() * (i + 1));
        [newArr[i], newArr[rand]]=[newArr[rand], newArr[i]];
    }

    return newArr;
  }

  render() {
    return (
      <View style={styles.page}>
        {this.levels()}
      </View>
    )
  }
}

Page.propTypes = {
  lastSolvedRound: PropTypes.number.isRequired,
  pageNumber: PropTypes.number.isRequired,
  roundsCount: PropTypes.number.isRequired,
  loadLevel: PropTypes.func.isRequired,
}

export default Page
