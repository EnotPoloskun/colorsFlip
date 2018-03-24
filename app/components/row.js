import React from "react"
import PropTypes from "prop-types"
import { View } from 'react-native'
import styles from "../styles/row"
import Cell from "./cell"
 
const Row = ({ onClick, row }) => (
  <View style={styles.row}>
    {row.map((color, index) =>
      <Cell
        key={index}
        color={color}
        onClick={() => onClick(index)}
      />
    )}
  </View>
)
 
Row.propTypes = {
  onClick: PropTypes.func.isRequired,
  row: PropTypes.array.isRequired,
}
 
export default Row
