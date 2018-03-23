import React from "react"
import PropTypes from "prop-types"
import { View, TouchableWithoutFeedback } from 'react-native';
import styles from "../styles/cell"
 
const Cell = ({ onClick, color }) => {
  colors = ["green", "red", "yellow"]

  return (
    <TouchableWithoutFeedback onPress={onClick}>
      <View style={[styles.cell, styles[colors[color - 1]]]}/>
    </TouchableWithoutFeedback>
  )
}
 
Cell.propTypes = {
  onClick: PropTypes.func.isRequired,
  color: PropTypes.number.isRequired,
}
 
export default Cell;
