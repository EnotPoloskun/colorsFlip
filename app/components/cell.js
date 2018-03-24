import React, { Component } from "react"
import PropTypes from "prop-types"
import { View, TouchableWithoutFeedback, Animated, Easing } from 'react-native';
import styles from "../styles/cell"

const COLORS = ["green", "red", "yellow"]
 

class Cell extends Component {
  constructor() {
    super()
    this.animatedValue = new Animated.Value(0)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.color != this.props.color) {
      this.animate();
    }
  }

  animate() {
    Animated.timing(
      this.animatedValue,
      {
        toValue: 1,
        duration: 200,
        easing: Easing.linear
      }
    ).start(() => this.animatedValue.setValue(0))
  }

  render() {

    const movingMargin = this.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 3, 0]
    })

    return (
      <TouchableWithoutFeedback onPress={this.props.onClick}>
        <View style={styles.cell}>
          <Animated.View style={[{ margin: movingMargin }, styles.content, styles[COLORS[this.props.color - 1]]]}/>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}
 
Cell.propTypes = {
  onClick: PropTypes.func.isRequired,
  color: PropTypes.number.isRequired,
}
 
export default Cell;
