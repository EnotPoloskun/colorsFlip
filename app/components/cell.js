import React, { Component } from "react"
import PropTypes from "prop-types"
import { View, TouchableWithoutFeedback, Animated, Easing } from 'react-native'
import styles from "../styles/cell"

const COLORS = ["green", "red", "orange"]
 
class Cell extends Component {
  constructor() {
    super()
    this.animatedMarginValue = new Animated.Value(0)
    this.animatedScaleValue = new Animated.Value(0)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.color != this.props.color) {
      this.animateMargin()
    }

    if (this.props.isGameSolved && !prevProps.isGameSolved) {
      this.animateScale()
    }
  }

  animateMargin() {
    Animated.timing(
      this.animatedMarginValue,
      {
        toValue: 1,
        duration: 200,
        easing: Easing.linear
      }
    ).start(() => this.animatedMarginValue.setValue(0))
  }

  animateScale() {
    Animated.timing(
      this.animatedScaleValue,
      {
        toValue: 1,
        duration: 500,
        easing: Easing.linear
      }
    ).start()
  }

  render() {
    const movingMargin = this.animatedMarginValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 3, 0]
    })

    const movingScale = this.animatedScaleValue.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 1.5]
    })

    const transform = [
      { scaleX: movingScale },
      { scaleY: movingScale },
    ]

    return (
      <TouchableWithoutFeedback onPress={this.props.onClick}>
        <View style={styles.cell}>
          <Animated.View style={[{ margin: movingMargin }, styles.content, styles[COLORS[this.props.color - 1]], { transform: transform }]}>
            {this.props.highlighted && <View style={styles.highlighted}/>}
          </Animated.View>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}
 
Cell.propTypes = {
  onClick: PropTypes.func.isRequired,
  color: PropTypes.number.isRequired,
  highlighted: PropTypes.bool.isRequired,
  isGameSolved: PropTypes.bool.isRequired
}
 
export default Cell
